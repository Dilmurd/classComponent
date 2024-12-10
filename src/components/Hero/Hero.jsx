import React, { Component } from 'react'
import "./Hero.scss"

export default class Hero extends Component {
  render() {
    return (
        <main>
            <section className="hero">
                <div className="hero__img">
                    <div className="container">
                    <div className="hero__text">
                        <p className="hero__title">Enjoy Your
                        Morning Coffee.</p>
                        <p className="hero__desc">The coofee is brewed by fist roasting the green coffee beans over hot coals in brazier. given to Opportunity</p>
                        <button className='hero__btn'>Test Coffee</button>
                    </div>
                    </div>
                </div>
            </section>
        </main>
    )
  }
}
