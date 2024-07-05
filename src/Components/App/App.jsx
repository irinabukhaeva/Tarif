import tarifs from "../../tarifs.json"
import Cards from "../Cards/Cards";
import "./App.css"

export default function App() {
  
console.log();
  return (
    <>
      <div className="container">{tarifs.map((item,index) => <Cards key={index} item={item}/>)}</div>
    </>
  )
}
