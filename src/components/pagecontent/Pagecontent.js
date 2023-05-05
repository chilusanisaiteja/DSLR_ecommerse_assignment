import { useNavigate } from 'react-router-dom';
import { collections } from '../../data';
import './Pagecontent.css'
import React,{useState} from 'react';

function Pagecontent() {
  const [cards,setcards]=useState(collections);
  const [id,setid] = useState(1);
  const navigate = useNavigate();


  return (
    <div className="pagecontent">
      {
        cards?.map((card,index)=>{
          return (
<div className="card" onClick={()=>{
  navigate(`/productdetailspage/${index}`);
}}>
      <div class="card2" style={{width: "25rem"}}>
  <img src={card?.primaryImage?.jpegImages.lImage} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">{card?.name}</h5>
    <p class="card-text">{card?.description}</p>
    <h5 className='amount'>Rs. {card.listingPrice} <del className="mrp">Rs.{card.mrp}</del> <span className="percent">({card.discount}%)</span></h5>
  </div>
</div>
</div>);
        })
      }
    </div>
  );
}

export default Pagecontent
