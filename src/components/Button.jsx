import { useState } from "react";


export default function Button(props) {
 const [buttonText,setButtonText]=useState("Add");
 const [changeColor, setChangeColor] =useState(false);
 const [effect, setEffect] = useState(false);
 const addedList = props.addedList
 const setAddedList = props.setAddedList
 const handleClick=()=>{
    if(buttonText==="Add")
    {
      setButtonText("Remove");
    }
    else
     {
      setButtonText("Add");
     }
     setChangeColor(!changeColor);
    }

  return (
    <div>
       
      <button className={` focus: shadow-lg transform active:scale-75 transition-transform  ${(changeColor === true)? 'bg-lime-500 ' : 'bg-blue-700'}`} type="submit" onClick={handleClick} >
        {buttonText}
      </button>
    </div>
  );
}

