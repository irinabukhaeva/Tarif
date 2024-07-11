import "./Cards.css"
import { useState } from "react"

export default function Cards(props) {
  const {title, price,speed, description, color, state} = props.item
  const [active, setActive] = useState(false)
  return (        
          
            <div onClick={()=>setActive(!active) }className={`card ${active? "transform":""}`}>
              <div className ={"title"+" "+`${color}`}>{title}</div>
              <div className={"price_tag"+" "+`${color}`}>
                <p className="rub">руб</p>
                <p className= "price">{price}</p>
                <p className="mes">/мес</p>
              </div>
              <div className= "speed">{speed}</div>
              <div className= "description">{description}</div>
            </div>
                
  )
}
