import React from "react";
import { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import Star from "./Star";
function Practice() {
  const [contact, setcontact] = useState({
    firstName: "Arun",
    lastName: "Daduwa",
    email: "arun.daduwa.ad@gmail.com",
    isFavourite: true,
  });

  const favouriteIcon = contact.isFavourite ? <FaStar /> : <FaRegStar />;

  function favouriteToggle() {
    setcontact((prevContact) => {
      return {
        ...contact,
        isFavourite: !prevContact.isFavourite,
      };
    });
  }

  return (
    <div className="mx-auto w-[550px] min-h-[550px] shadow-md items-center flex flex-col text-center content-center ">
      <FaRegUserCircle className="text-[9vw]" />
      <Star isFilled={contact.isFavourite} handleClick={favouriteToggle} />
      <h1>
        {contact.firstName} {contact.lastName}
      </h1>
      <h1>{contact.email}</h1>
    </div>
  );
}

export default Practice;
