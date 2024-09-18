import React from 'react'
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
function Star(props) {
    let favouriteIcon = props.isFilled ? <FaStar/> : <FaRegStar/>
  return (
    <span
        onClick={props.handleClick}
       className="text-3xl text-orange-600">
        {favouriteIcon}
        </span>
  )
}

export default Star