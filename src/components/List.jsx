import React from "react";
import Movie from "./Movie";
function List(props){
    const addedList = props.addedList
    const setAddedList = props.setAddedList
    return(<div className='movie-container'>{
            Object.keys(addedList).map(item=>{
                return( 
                          <Movie key={item} 
                                 id={item} 
                                 src={addedList[item].image} 
                                 title={addedList[item].title} 
                                 rating={addedList[item].rating}
                                 addedList={addedList} 
                                 setAddedList={setAddedList}
                                 /> 
                        )
            })
        }
   

        </div>)
}

export default List