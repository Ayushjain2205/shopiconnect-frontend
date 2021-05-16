import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Shoptile = (props) => {
  const { photo, name, id ,category,location} = props.shop;
  return (
    <Card style={{ width: "300px" }}>
      <Card.Img className='tile-image' variant='top' src={photo.name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        <p className='city'>
          <i class='fas fa-map-marker-alt'></i>
          {location.city}
        </p>
        <div className={`category ${category.name}`}>{category.name}</div>
        </Card.Text>
      </Card.Body>
      <Link to={`/shop/${id}`}>
          <div className="bottom-btn" variant='primary'>View <i class="fas fa-angle-right"></i></div>
        </Link>
    </Card>
  );
};

export default Shoptile;
