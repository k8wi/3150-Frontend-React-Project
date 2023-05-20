import Button from "./Button";

const Movie=(props)=>{
    return( 
    
    <div className="mov">
     <img src={props.src}/>
     <div className="mov-ins">
     <h4>
         {props.title}<br/>
         {props.rating}
     </h4>
     <Button/>
     </div>
   
    </div>
    
    
);
}

export default Movie;