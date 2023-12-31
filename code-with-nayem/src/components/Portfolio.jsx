
import NavBar from './NavBar'

import React, { Component } from 'react'




// ......................................................with function component.......................................................

export default function Portfolio() {

    React.useEffect(() => {


                const portfolioContainer = document.querySelector('.portfolio-container');
            
                if (portfolioContainer) {
                const portfolioIsotope = new Isotope(portfolioContainer, {
                    itemSelector: '.portfolio-item',
                    layoutMode: 'fitRows'
                });
            
                const portfolioFilters = document.querySelectorAll('#portfolio-flters li');
            
                portfolioFilters.forEach(filter => {
                    filter.addEventListener('click', e => {
                    e.preventDefault();
                    portfolioFilters.forEach(el => {
                        el.classList.remove('filter-active');
                    });
                    filter.classList.add('filter-active');
            
                    portfolioIsotope.arrange({
                        filter: filter.getAttribute('data-filter')
                    });
                    });
                });
                console.log('testing...');
                }



    
    
    }, []); // The empty dependency array ensures this effect runs only once, like componentDidMount.
    
    
    
    

  return (
    <div>
    <> <NavBar/> </>

    <section id="portfolio" class="portfolio">
        <div class="container">

            <div class="section-title">
            <h2>Portfolio</h2>
            <h3>Check our <span>Portfolio</span></h3>
            <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
            </div>

            <div class="row">
            <div class="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                <li data-filter="*" class="filter-active">All</li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-card">Card</li>
                <li data-filter=".filter-web">Web</li>
                </ul>
            </div>
            </div>

            <div class="row portfolio-container">

            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <img src="img/portfolio/portfolio-1.jpg" class="img-fluid" alt=""/>
                <div class="portfolio-info">
                <h4>App 1</h4>
                <p>App</p>
                <a href="img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 1"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                <img src="img/portfolio/portfolio-2.jpg" class="img-fluid" alt=""/>
                <div class="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <a href="img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Web 3"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <img src="img/portfolio/portfolio-3.jpg" class="img-fluid" alt=""/>
                <div class="portfolio-info">
                <h4>App 2</h4>
                <p>App</p>
                <a href="img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 2"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                <img src="img/portfolio/portfolio-4.jpg" class="img-fluid" alt=""/>
                <div class="portfolio-info">
                <h4>Card 2</h4>
                <p>Card</p>
                <a href="img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Card 2"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                <img src="img/portfolio/portfolio-5.jpg" class="img-fluid" alt=""/>
                <div class="portfolio-info">
                <h4>Web 2</h4>
                <p>Web</p>
                <a href="img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Web 2"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <img src="img/portfolio/portfolio-6.jpg" class="img-fluid" alt=""/>
                <div class="portfolio-info">
                <h4>App 3</h4>
                <p>App</p>
                <a href="img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 3"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                <img src="img/portfolio/portfolio-7.jpg" class="img-fluid" alt=""/>
                <div class="portfolio-info">
                <h4>Card 1</h4>
                <p>Card</p>
                <a href="img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Card 1"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                <img src="img/portfolio/portfolio-8.jpg" class="img-fluid" alt=""/>
                <div class="portfolio-info">
                <h4>Card 3</h4>
                <p>Card</p>
                <a href="img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Card 3"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                <img src="img/portfolio/portfolio-9.jpg" class="img-fluid" alt=""/>
                <div class="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <a href="img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Web 3"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
                </div>
            </div>

            </div>

        </div>
    </section>
  </div>
  )
}



// ......................................................with class component.......................................................

// export default class Portfolio extends Component {


//     componentDidMount(){      // when data is on DOM, componentDidMount is called automatically. its a defualt method

//                 const portfolioContainer = document.querySelector('.portfolio-container');
            
//                 if (portfolioContainer) {
//                 const portfolioIsotope = new Isotope(portfolioContainer, {
//                     itemSelector: '.portfolio-item',
//                     layoutMode: 'fitRows'
//                 });
            
//                 const portfolioFilters = document.querySelectorAll('#portfolio-flters li');
            
//                 portfolioFilters.forEach(filter => {
//                     filter.addEventListener('click', e => {
//                     e.preventDefault();
//                     portfolioFilters.forEach(el => {
//                         el.classList.remove('filter-active');
//                     });
//                     filter.classList.add('filter-active');
            
//                     portfolioIsotope.arrange({
//                         filter: filter.getAttribute('data-filter')
//                     });
//                     });
//                 });
//                 console.log('testing...');
//                 }
   
//      }


//   render() {

//     return (
//       <div>
//         <> <NavBar/> </>

//         <section id="portfolio" class="portfolio">
//             <div class="container">

//                 <div class="section-title">
//                 <h2>Portfolio</h2>
//                 <h3>Check our <span>Portfolio</span></h3>
//                 <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
//                 </div>

//                 <div class="row">
//                 <div class="col-lg-12 d-flex justify-content-center">
//                     <ul id="portfolio-flters">
//                     <li data-filter="*" class="filter-active">All</li>
//                     <li data-filter=".filter-app">App</li>
//                     <li data-filter=".filter-card">Card</li>
//                     <li data-filter=".filter-web">Web</li>
//                     </ul>
//                 </div>
//                 </div>

//                 <div class="row portfolio-container">

//                 <div class="col-lg-4 col-md-6 portfolio-item filter-app">
//                     <img src="img/portfolio/portfolio-1.jpg" class="img-fluid" alt=""/>
//                     <div class="portfolio-info">
//                     <h4>App 1</h4>
//                     <p>App</p>
//                     <a href="img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 1"><i class="bx bx-plus"></i></a>
//                     <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
//                     </div>
//                 </div>

//                 <div class="col-lg-4 col-md-6 portfolio-item filter-web">
//                     <img src="img/portfolio/portfolio-2.jpg" class="img-fluid" alt=""/>
//                     <div class="portfolio-info">
//                     <h4>Web 3</h4>
//                     <p>Web</p>
//                     <a href="img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Web 3"><i class="bx bx-plus"></i></a>
//                     <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
//                     </div>
//                 </div>

//                 <div class="col-lg-4 col-md-6 portfolio-item filter-app">
//                     <img src="img/portfolio/portfolio-3.jpg" class="img-fluid" alt=""/>
//                     <div class="portfolio-info">
//                     <h4>App 2</h4>
//                     <p>App</p>
//                     <a href="img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 2"><i class="bx bx-plus"></i></a>
//                     <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
//                     </div>
//                 </div>

//                 <div class="col-lg-4 col-md-6 portfolio-item filter-card">
//                     <img src="img/portfolio/portfolio-4.jpg" class="img-fluid" alt=""/>
//                     <div class="portfolio-info">
//                     <h4>Card 2</h4>
//                     <p>Card</p>
//                     <a href="img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Card 2"><i class="bx bx-plus"></i></a>
//                     <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
//                     </div>
//                 </div>

//                 <div class="col-lg-4 col-md-6 portfolio-item filter-web">
//                     <img src="img/portfolio/portfolio-5.jpg" class="img-fluid" alt=""/>
//                     <div class="portfolio-info">
//                     <h4>Web 2</h4>
//                     <p>Web</p>
//                     <a href="img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Web 2"><i class="bx bx-plus"></i></a>
//                     <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
//                     </div>
//                 </div>

//                 <div class="col-lg-4 col-md-6 portfolio-item filter-app">
//                     <img src="img/portfolio/portfolio-6.jpg" class="img-fluid" alt=""/>
//                     <div class="portfolio-info">
//                     <h4>App 3</h4>
//                     <p>App</p>
//                     <a href="img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 3"><i class="bx bx-plus"></i></a>
//                     <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
//                     </div>
//                 </div>

//                 <div class="col-lg-4 col-md-6 portfolio-item filter-card">
//                     <img src="img/portfolio/portfolio-7.jpg" class="img-fluid" alt=""/>
//                     <div class="portfolio-info">
//                     <h4>Card 1</h4>
//                     <p>Card</p>
//                     <a href="img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Card 1"><i class="bx bx-plus"></i></a>
//                     <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
//                     </div>
//                 </div>

//                 <div class="col-lg-4 col-md-6 portfolio-item filter-card">
//                     <img src="img/portfolio/portfolio-8.jpg" class="img-fluid" alt=""/>
//                     <div class="portfolio-info">
//                     <h4>Card 3</h4>
//                     <p>Card</p>
//                     <a href="img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Card 3"><i class="bx bx-plus"></i></a>
//                     <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
//                     </div>
//                 </div>

//                 <div class="col-lg-4 col-md-6 portfolio-item filter-web">
//                     <img src="img/portfolio/portfolio-9.jpg" class="img-fluid" alt=""/>
//                     <div class="portfolio-info">
//                     <h4>Web 3</h4>
//                     <p>Web</p>
//                     <a href="img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Web 3"><i class="bx bx-plus"></i></a>
//                     <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
//                     </div>
//                 </div>

//                 </div>

//             </div>
//         </section>

//       </div>
//     )
//   }
// }
