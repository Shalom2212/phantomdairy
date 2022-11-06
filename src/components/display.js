import "./css/display.css"
import Cards from './cards.js'
import Data from './data'

function Display() {

  const cards = Data.map((item)=>{
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
      <div className="login-btn">WRITE A STORY</div>
    </div>
  );
}

export default Display;