import tarifs from "../../tarifs.json"
import Cards from "../Cards/Cards";
import style from "./App.module.css"

export default function App() {
  
console.log();
  return (
    <>
      <div className={style.container}>{tarifs.map((item,index) => <Cards key={index} item={item}/>)}</div>
    </>
  )
}
