import React, { Component } from 'react'
import "./Flavour.scss"
import coffes from "../../assets/coffees.png"
import cap from "../../assets/capuc.png"
import nice from "../../assets/nice.png"

export default class Flavour extends Component {
  render() {
    return (
        <main>
            <section className="flavour">
                <div className="container">
                    <div className="flavour__wrapper">
                        <div className="flavour__card">
                            <div className="flavour__titles">
                                <p className="flavour__number">01</p>
                                <p className="flavour__title">Best Coffee Flavour</p>
                            </div>
                            <img src={coffes} alt="" />
                        </div>
                        <div className="flavour__card">
                            <div className="flavour__titles">
                                <p className="flavour__number">02</p>
                                <p className="flavour__title">Place to get lost</p>
                            </div>
                            <img src={cap} alt="" />
                        </div>
                        <div className="flavour__card">
                            <div className="flavour__titles">
                                <p className="flavour__number">03</p>
                                <p className="flavour__title">Proper roesting</p>
                            </div>
                            <img src={nice} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
  }
}
