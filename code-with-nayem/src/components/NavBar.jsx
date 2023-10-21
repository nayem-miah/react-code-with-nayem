import React, { Component } from 'react'
import {Link, NavLink} from 'react-router-dom'
export default class NavBar extends Component {

 

  //  scrollHandler = () => {

  //   let selectHeader = window.querySelector('#header')
  //   if (selectHeader) {
  //     const headerScrolled = () => {
  //       if (window.scrollY > 0) {
  //         selectHeader.classList.add('header-scrolled')
  //       } else {
  //         selectHeader.classList.remove('header-scrolled')
  //       }
  //     }
  //     window.addEventListener('load', headerScrolled)
  //     window.addEventListener('scroll', headerScrolled)
  //   }

  //  }


  render() {

    // const changeBack = () => {
    //   if(window.scrollY> 500){
    //     console.log('hi')
    //   }else{
    //     console.log('not working')
    //   }
    //   console.log(window.scrollY);
    //    }
    // window.addEventListener('scroll', changeBack);
    
    
    return (
      <div>
                  
            <header id='header' class='fixed-top header'>
                <div class="container d-flex align-items-center justify-content-between">

                <h1 class="logo"><Link to="/">Nayem </Link></h1>
            
                <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"/></a>

                <nav id="navbar" class="navbar">
                    <ul>
                    <li><NavLink class="nav-link scrollto active" to="/">Home</NavLink></li>
                    <li><NavLink class="nav-link scrollto" to="/about">About</NavLink></li>
                    <li><NavLink class="nav-link scrollto" to="/service">Services</NavLink></li>
                    <li><NavLink class="nav-link scrollto" to="/portfolio">Portfolio</NavLink></li>
                    <li><NavLink class="nav-link scrollto" to="/team">Team</NavLink></li>
                    <li><NavLink class="nav-link scrollto" to="/blog">Blog</NavLink></li>
                    
             
                    <li><NavLink class="nav-link scrollto" to="/contact">Contact</NavLink></li>
                    </ul>
                    <i class="bi bi-list mobile-nav-toggle"></i>
                </nav>

                </div>
            </header>


      </div>
    )
  }
}


