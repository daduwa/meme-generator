import React, { useState } from "react";

function SignupPractice() {
  const [formData, setFormData] = useState({
    fullName: "",
    password: "",
    matchPassword: "",
    isChecked: false,
  });

  const [errorMessage, seterrorMessage] = useState("")

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  // console.log(formData)
  function handleSubmit(event) {
    event.preventDefault()
    if(formData.password === formData.matchPassword){
        seterrorMessage("")
        console.log("password match successfully")
    }
    else{
        seterrorMessage("Password do not match")
    }

    if(formData.isChecked){
      console.log("Thank for sigining up for our newsletter")
    }
    console.log(formData);
  }
  return (
    <section className="mb-10">
      <div className="signupcontainer flex w-[550px] mx-auto">
        <form onSubmit={handleSubmit}>
          <h1 className="uppercase">signup to news letter</h1>

          {errorMessage && <p style={{color:'red'}}>{errorMessage}</p>}

          <input
            className="border-[2px] border-cyan-500 rounded-md px-4 py-2 my-2 mx-2"
            type="text"
            placeholder="Fullname"
            id=""
            name="fullName"
            onChange={handleChange}
            value={formData.fullName}
          />
          <input
            className="border-[2px] border-cyan-500 rounded-md px-4 py-2 my-2 mx-2"
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
            value={formData.password}
          />
          <input
            className="border-[2px] border-cyan-500 rounded-md px-4 py-2 my-2 mx-2"
            placeholder="Confirm password"
            type="password"
            name="matchPassword"
            onChange={handleChange}
            value={formData.matchPassword}
          />
          <div className="py-4 px-2 items-center gap-4">
            <input
              type="checkbox"
              id="isOkNeswLetter"
              name="isChecked"
              onChange={handleChange}
              checked={formData.isChecked}
            />
            <label htmlFor="isOkNeswLetter">
              I want to join the newsletter
            </label>
          </div>
          <button className="bg-cyan-500 py-2 px-4 rounded-lg">Sign up</button>
        </form>
      </div>
    </section>
  );
}

export default SignupPractice;
