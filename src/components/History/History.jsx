import React, { Component } from "react";
import "./History.scss";
import ok from "../../assets/7.png";
import no from "../../assets/13.png";
import yes from "../../assets/14.png";

export default class History extends Component {
  render() {
    return (
      <main>
        <section className="history">
          <div className="container">
            <div className="history__wrapper">
              <div className="history__imgs">
                <div>
                  <img src={ok} alt="" />
                  <img src={no} alt="" />
                </div>
                <div className="img__item">
                  <img src={yes} alt="" />
                </div>
              </div>
                <div className="history__text">
                  <p className="history__title">Our history</p>
                  <p className="history__subtitle">Create a
                  new story with us</p>
                  <p className="history__desc">mauris rhoncus in imperdiet placerat. vestibu emismd nisl suscirpit ligula volutpat, a feyguat urn maxmaus. cars massa nibhtincidunt. donec et nibh maximus, est eu, mattis nuce. preasent ut quam quis quam venen
                  atis fringilla. morbi vastibulum id tells mmodo mattis. aliauam erat volutpal.</p>
                </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
