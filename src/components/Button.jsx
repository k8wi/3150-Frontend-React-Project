import { useState } from "react";


export default function Button() {
 const [buttonText,setButtonText]=useState("Add");
 const [color, setColor] = useState("dodgerblue");

 const handleClick=()=>{
     setColor('green');
     setButtonText("Added");
    }

  return (
    <div>
      <button className={"bg-  hover:bg-black hover:text-white"} type="submit" onClick={handleClick} >
        {buttonText}
      </button>
    </div>
  );
}

