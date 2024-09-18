import React from "react";
import "./style.css";
import { useState, useEffect } from "react";

function Form() {
  const [memeImage, setmemeImage] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });
  const [allMemes, setallMemes] = useState();

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(res=>res.json())
    .then(data=>setallMemes(data.data.memes))
  
    return () => {
      
    }
  }, [])

  function generateMeme() {
    const randomElement = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomElement].url;
    setmemeImage((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(e){
    const {name, value, type, checked} = e.target
    setmemeImage((prevMemeImage)=>{
      return {
        ...prevMemeImage,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  return (
    <main className="w-[550px] mx-auto p-8">
      <div className="form grid grid-cols-2 place-items-stretch gap-8">
        <input className="form--inputs" type="text" placeholder="Top text"
        name="topText"
        onChange={handleChange}
        value={memeImage.topText}
        />
        <input className="form--inputs" type="text" placeholder="Bottom Text" 
        name="bottomText"
        onChange={handleChange}
        value={memeImage.bottomText}
        />
        <button
          className="form--button grid-cols-2 bg-gradient-to-r from-[#711F8D] to-[#A818DA] rounded py-3 capitalize text-sm text-white"
          onClick={generateMeme}
        >
          get a new meme image
        </button>
      </div>
      <div className="meme--generated relative text-center">
        <img
          src={memeImage.randomImage}
          alt=""
          className="meme--image w-[100%] mt-4 h-auto"
        />
        <h2 className="meme--text--top absolute flex items-center justify-center leading-none">{memeImage.topText}</h2>
        <h2 className="meme--text--bottom absolute flex items-center justify-center">{memeImage.bottomText}</h2>
      </div>
    </main>
  );
}

export default Form;
