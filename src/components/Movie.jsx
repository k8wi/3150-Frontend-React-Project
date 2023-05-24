import { useState } from "react";

const Movie=(props)=>{
    const id = props.id
    const [buttonText,setButtonText]=useState("Add");
    const [changeColor, setChangeColor] =useState(false);
    const [effect, setEffect] = useState(false);
    const addedList = props.addedList
    const setAddedList = props.setAddedList
    const checkifMovieInAddedList = () => {
        if(id in addedList){
            return true
        }
        else{
            return false
        }
    }
    const isMovieinList = checkifMovieInAddedList()

    const handleClick=()=>{
        
        if(!isMovieinList)
        {
                const movie = {
                    id:id,
                    title:props.title,
                    rating:props.rating,
                    image:props.src
                }
                setAddedList({...addedList,[id]:movie})  
         
        }
        else
         {
            const tempAddedList = Object.assign({},addedList)
            if(isMovieinList){
                delete tempAddedList[id]
                setAddedList(tempAddedList)
            }
         }
         setChangeColor(!changeColor);
    }

    return( 
   
    <div className="mov relative max-w-xs overflow-hidden bg-cover bg-no-repeat" >
     <img src={props.src}  className="max-w-xs transition duration-300 ease-in-out hover:scale-110 rounded-xl"/>
     <div className="mov-det tracking-tight">
     <h4>
         {props.title}<br/>
         {props.rating}
     </h4>
     <button className={` focus: shadow-lg transform active:scale-75 transition-transform  ${(isMovieinList === true)? 'bg-lime-500 ' : 'bg-blue-700'}`} type="submit" onClick={handleClick} >
        {isMovieinList?"Remove":"Add"}
      </button>
     </div>
   
    </div>
    
    
);
}

export default Movie;