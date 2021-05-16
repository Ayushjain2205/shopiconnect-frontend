import React, { Component } from "react";
import Map from "../layout/Map";
import axios from "axios";

export class ShopPage extends Component {
  state = {
    shops: [],
    shop: {},
  };

  async componentDidMount() {
    // this.props.getShop(this.props.match.params.id);
    const id = this.props.match.params.id;
    const res = await axios.get(`http://localhost:1337/shops/${id}`);
    this.setState({ shop: res.data });
  }

  render() {
    console.log(this.state.shop);
    const {
      name,
      img_src,
      city,
      description,
      homeDelivery,
      pickup,
      phone,
      link,
    } = this.state.shop;
    return (
      // <div>test</div>
      <div>
        <h1>{name}</h1>
        <div className='card page-card grid-2'>
          <img className='page-image' src={img_src} alt='' />
          <div className='details'>
            <div className='card-top grid-2'>
              <div>
                <p>
                  <i class='fas fa-map-marker-alt'></i>
                  {city}
                </p>
                <p>
                  {homeDelivery ? (
                    <i class='fas fa-check yes'></i>
                  ) : (
                    <i class='fas fa-times no'></i>
                  )}
                  Home Delivery
                </p>
                <p>
                  {pickup ? (
                    <i class='fas fa-check yes'></i>
                  ) : (
                    <i class='fas fa-times no'></i>
                  )}
                  Pick Up
                </p>
              </div>
              <div>
                <p>
                  <i class='fas fa-phone-alt'></i>
                  {phone}
                </p>
                <p>
                  <i class='fab fa-whatsapp'></i>
                  {phone}
                </p>
              </div>
            </div>
            <p className='desc'>
              <b>Desription -</b> {description}
            </p>
          </div>
        </div>
        <div>
          <div className='card page-card card-map'>
            <h2>
              <i class='fas fa-compass'></i> Location
              <span className='loc'>
                <a className='loc' target='blank' href={link}>
                  <i class='fas fa-external-link-alt'></i>
                </a>
              </span>
            </h2>
            <Map />
          </div>
        </div>
      </div>
    );
  }
}

export default ShopPage;
