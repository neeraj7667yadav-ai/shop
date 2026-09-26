import Products from "./Products";

function Shopcontainer({elm}) {

  return (
        <div className="col-md-6 py-2">
          <Products elm={elm}/>
        </div>
  );
}

export default Shopcontainer;