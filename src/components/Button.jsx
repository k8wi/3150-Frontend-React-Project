import { useState } from "react";


export default function Button() {
 const [buttonText,setButtonText]=useState("Add");
 const [active, setActive] = useState(false);
 const handleClick=()=>{
    setActive(true);
    setButtonText("Added");
    }

  return (
    <div>
      <button type="submit" onClick={handleClick} style={{ backgroundColor: active ? "limegreen" : "dodgerblue" }}>
        {buttonText}
      </button>
    </div>
  );
}



