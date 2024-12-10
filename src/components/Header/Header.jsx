import React, { Component } from 'react'
import "./Header.scss"
import Navbar from "../../assets/navbar.png"
import { FaSearch } from 'react-icons/fa' 
import { FaBagShopping } from 'react-icons/fa6'


export default class Header extends Component {
  render() {
    return (
        <header>
            <div className="container__lg">
                <nav className="navbar">
                    <ul className="navbar__collection">
                        <li className='navbar__item'>
                            <a href="#">
                                <span>Home</span>
                            </a>
                        </li>
                        <li className='navbar__item'>
                            <a href="#">
                                <span>About</span>
                            </a>
                        </li>
                        <li className='navbar__item'>
                            <a href="#">
                                <span>Menu</span>
                            </a>
                        </li>
                        <li className='navbar__item'>
                            <a href="#">
                                <span>Reservation</span>
                            </a>
                        </li>
                    </ul>
                    <div className="navbar__logo">
                        <img src={Navbar} alt="" />
                    </div>
                    <ul className="navbar__collection">
                        <li className='navbar__item'>
                            <a href="#">
                                <span>Pages</span>
                            </a>
                        </li>
                        <li className='navbar__item'>
                            <a href="#">
                                <span>Shop</span>
                            </a>
                        </li>
                        <li className='navbar__item'>
                            <a href="#">
                                <span>Contact</span>
                            </a>
                        </li>
                        <li className='navbar__item'>
                            <FaSearch/>
                        </li>
                        <li className='navbar__item'>
                            <FaBagShopping/>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
  }
}
