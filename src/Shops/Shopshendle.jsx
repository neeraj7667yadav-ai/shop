import Shopcontainer from './Shopcontainer'
 import {useEffect, useRef, useState } from 'react'
import Notfound from './Notfound'
function Shopshendle() {
  const [inp, setInp]= useState("")
  const [productdata, setproductdata]= useState([]);
  const [intialproductData, setintialproductData]= useState([]);
  //useref Hook
  const refelm = useRef()
  const getData = async()=>{
    let res = await fetch("https://dummyjson.com/products");
    let data = await res.json()
    setproductdata(data.products)
    setintialproductData(data.products)
    
  }
  //useeffect hook
  useEffect(()=>{
    getData();
  },[])
  const handlesearch= ()=> {
    console.log(refelm.current.className)
    let afterfilterdata = intialproductData.filter(
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
          <input type="text" 
          ref={refelm}
          className='fukra' onChange={(e)=>setInp(e.target.value)}
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
