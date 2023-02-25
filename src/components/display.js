import "./css/display.css"
import Cards from './cards.js'
import React from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

// const datafetch = "http://localhost:5000/content"
const datafetch = "https://phantomdairy-api.onrender.com/content"

function Display() {

   const[allContent,setContent] = React.useState([])

   const navigate = useNavigate();


  React.useEffect(()=>{
    axios.get(datafetch)
    .then((res)=>{
      setContent(res.data)
    })
    .catch((e)=>{
      console.log(e)
    })
  },[])

  function HandelClick(){
    navigate('/typepad')
  }


  const cards = allContent.map((item)=>{
    return(
    
      <Cards
        key = {item.id}
        item = {item}
      />
      
    )
  })


  return (
    <div>
      {cards}
      <button onClick={HandelClick} className="createbutton">Create</button>
    </div>

  );
}

export default Display;
