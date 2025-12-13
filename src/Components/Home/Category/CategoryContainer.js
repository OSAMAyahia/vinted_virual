

const CategoryContainer = ({load,data}) => {
  const colors = ["#FFD3E8", "#F4DBA5", "#55CFDF", "#FF6262", "#0034FF", "#FFD3E8"];
  
  return (
    <div className='row my-5'>
      {load === false ? (
        data.map((category) => (
          <div key={category._id} className="col-md-4 col-sm-6 col-lg-2 col-6 my-2"> 
            <div className="">
              <img 
                src={category.image} 
                style={{ borderRadius: "150px", height: "130px", width: "150px", background: colors[Math.floor(Math.random() * colors.length)] }} 
                className="card-img-top" 
                alt={category.name}
              />
              <div className="card-body mt-2">
                <h5 className="card-title">{category.name}</h5>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="spinner-grow spinner-grow-sm" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </div>
  );
}

export default CategoryContainer;
