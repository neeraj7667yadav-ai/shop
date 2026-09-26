import Shopcontainer from './Shopcontainer'
import {Data} from './Data'
import { useState } from 'react'
import Notfound from './Notfound'
function Shopshendle() {
  const [inp, setInp]= useState("")
  const [productdata, setproductdata]= useState(Data)
  const handlesearch= ()=> {
    let afterfilterdata = Data.filter(
      (elm)=> elm.title.toLocaleLowerCase().includes(inp.toLocaleLowerCase())
    ); 
    setproductdata( afterfilterdata)
};
  const handlekey = (e) => {
    if (e.key === "Enter") {
      handlesearch();
    }
  };
  return (
     <div className="container">
      <div className="py-2">
        <div>
          <input type="text" className='' onChange={(e)=>setInp(e.target.value)}
          onKeyDown={handlekey} /> 
        </div>
        <button type="button" className="btn btn-success" onClick={handlesearch}>Search</button>
      </div>
        <div className="row">

         {productdata.length === 0 ? ( <Notfound /> ) : ( productdata.map((elm, index) => ( <Shopcontainer key={index} elm={elm} /> )) )}
     </div>
     </div>
  )
}

export default Shopshendle
