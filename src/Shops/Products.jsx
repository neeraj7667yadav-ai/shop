const Products = ({elm}) => {
  const {title,description,category,price,rating,thumbnail}=elm
  return (
  
      <div className="card">

        <div className="row g-0">

          {/* Left side - Details */}
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title text-primary">{title}</h5>

              <p className="card-text">
                {description}
              </p>
              <h5>{category}</h5>
              <h5>${price}</h5>
            <div>{rating}</div>
             
            </div>
          </div>

          {/* Right side - Image */}
          <div className="col-4 d-flex align-items-center justify-content-center">
            <img
              src={thumbnail}
              className="img-fluid"
              alt="..."
            />
          </div>

        </div>

      </div>
  );
};

export default Products;