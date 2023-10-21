import React, { Component } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import Portfolio from './Portfolio'
export default class Hero extends Component {


  render() {


    return (
      <div>
        <>
         <NavBar/> </>
          <section id="hero">
              <div class="hero-container">
                <h3>Welcome to <strong>Tempo</strong></h3>
                <h1>We're Creative Agency</h1>
                <h2>We are team of talented designers making websites with Bootstrap</h2>
                <a href="" class="btn-get-started scrollto">Get Started</a>
              </div>
            </section>
        <>
        <Portfolio/>
        <Footer/>
        
        </>

      </div>
    )
  }
}


