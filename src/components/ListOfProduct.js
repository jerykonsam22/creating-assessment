import React from "react";

const ListOfProduct = () => {
  
 

  return (
    <div
      style={{ border: "1px solid blue", height: "2000px", marginTop: "70px" }}
    >
      <div className="row m-1  ">
        <div style={{height:'250px', border:'1px solid black', }} className="col col1 m-1">
          image
          <div>Name</div>
          <div>Price</div>
        </div>
        <div style={{height:'250px', border:'1px solid black'}} className="col col2 m-1">image
          <div>Name</div>
          <div>Price</div>
        </div>
        <div style={{height:'250px', border:'1px solid black'}} className="col col3 m-1">
          image
          <div>Name</div>
          <div>Price</div>
        </div>
        <div style={{height:'250px', border:'1px solid black'}} className="col col4 m-1">
          image
          <div>Name</div>
          <div>Price</div>
        </div>
      </div>
      <div className="row m-1 ">
        <div style={{height:'250px', border:'1px solid black'}} className="col col1 m-1">
          image
          <div>Name</div>
          <div>Price</div>
        </div>
        <div style={{height:'250px', border:'1px solid black'}} className="col col2 m-1">image
          <div>Name</div>
          <div>Price</div>
        </div>
        <div style={{height:'250px', border:'1px solid black'}} className="col col3 m-1">
          image
          <div>Name</div>
          <div>Price</div>
        </div>
        <div style={{height:'250px', border:'1px solid black'}} className="col col4 m-1">
          image
          <div>Name</div>
          <div>Price</div>
        </div>
      </div>
    </div>
  );
};

export default ListOfProduct;
