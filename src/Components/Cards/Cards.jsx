import style from "./Cards.module.css"

export default function Cards(props) {
  const {title, price,speed, description, id} = props.item

const getColorTitle = () => {
  switch (id) {
    case 1: return style.blue;
    case 2: return style.green;
    case 3: return style.red;
    default: return style.graphite;
  }
}
const getColorPrice = () => {
  switch (id) {
    case 1: return style.lightblue;
    case 2: return style.lightgreen;
    case 3: return style.lightred;
    default: return style.lightgraphite;
  }
}
  return (
        <div className={style.card}>
      <div className ={style.title+" "+getColorTitle()}>{title}</div>
      
        <div className={style.price_tag+" "+getColorPrice()}>
          <p className={style.rub}>руб</p>
          <p className= {style.price}>{price}</p>
          <p className={style.mes}>/мес</p>
        </div>
        <p className= {style.speed}>{speed}</p>
        <p className= {style.description}>{description}</p>
      
    </div>
  )
}
