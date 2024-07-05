import "./Cards.css"

export default function Cards(props) {
  const {title, price,speed, description, color, state} = props.item

  return (        
          <div className={state}>
            <div className="card">
              <div className ={"title"+" "+`${color}`}>{title}</div>
              <div className={"price_tag"+" "+`${color}`}>
                <p className="rub">руб</p>
                <p className= "price">{price}</p>
                <p className="mes">/мес</p>
              </div>
              <div className= "speed">{speed}</div>
              <div className= "description">{description}</div>
            </div>
          </div>        
  )
}
