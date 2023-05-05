import './Productpage.css';
import React,{useState} from 'react'
import { useParams } from 'react-router';
import { collections } from '../../data';
import { BsHandbag,BsHeart } from "react-icons/bs";
function Productpage() {
  const params = useParams();
  const [data,setdata]=useState(collections[params.id]);
  const [images,setimages]=useState(data.primaryImage.jpegImages);
  const [image,setimage]=useState(0);

  const arr = [images.lImage,images.mImage,images.sImage,images.xsImage];

  return (
    <div>
    <div className='header'>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid container2">
    <a className="navbar-brand" href="/"> {data?.supplierName}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
      </ul>
      <BsHandbag className="icon1"/>
      <BsHeart className="icon2"/>
    </div>
  </div>
</nav>

    </div>
  <div className="cardpage">
  <div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
    <img src={arr[image]} class="card-img-top image2" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <h5 classNaame="card-title">{data?.name}</h5>
    <p className="card-text">{data?.description}</p>
    <p className="card-Qty">Quantity:{data?.availableQty}</p>
    <h5 className='amount'>Rs. {data?.listingPrice} <del className="mrp">Rs.{data?.mrp}</del> <span className="percent">({data.discount}%)</span></h5>
    <p className="card-Qty2">Quantity: {data.isAvailable ? <span className="avai">Availiable</span>: <span className="avai2">unAvailiable</span>}</p>
    <p className="card-size">Size: 
     <button className="bt" onClick={()=>{setimage(0)}}>L</button>
     <button className="bt" onClick={()=>{setimage(1)}}>m</button>
     <button className="bt" onClick={()=>{setimage(2)}}>s</button>
     <button className="bt" onClick={()=>{setimage(3)}}>x</button>
    </p>
    <hr/>
    <button type="button" className="btn btn-light"> <BsHeart/> WISHLIST</button>
    <button type="button" className="btn btn-danger bt2"><BsHandbag />  ADD TO BAG</button>
      </div>
    </div>
  </div>
</div>
  </div>
    </div>
  );
}

export default Productpage
