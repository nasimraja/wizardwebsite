import React, { Component } from 'react';

import $ from "jquery";

import Header from '../../pages/header.js';
import Footer from '../../pages/footer.js';
import wizaartimg  from '../../images/wizaart-img.gif';
import check from '../../images/check.png';
import acc from '../../images/acc.png';
class marketplace extends Component{ 
	constructor(props) {
	  super(props);
	  this.state = {
	  };
  
	}
	
	componentDidMount = () =>{

		const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener('click', () => {
  // Show loader on button click
  loginBtn.classList.add("loading");
  // Hide loader after success/failure - here it will hide after 2seconds
  setTimeout(() => loginBtn.classList.remove("loading"), 3000);
});
		
				
	  }

	render(){
		return(
			<div className="marketplace-bg">
				<Header />
                <section className="marketplace-sec2">
                    <div className="container">
                        <div className="wrp-head-marketplace">
                            <div className="head-marketchild2">
                                <h3>Top picks</h3>
                            </div>
                            
                        </div>
                        <div className="row">
                            <div className="col-lg-3">
                            <a href="#">
                                <div class="product-list2">
                                <div class="product-img2">
                                    <img src={wizaartimg} />
                                </div>
                                <div class="product-content2">
                                    <h4>Parague</h4>
                                    <div className="wrp-busd">
                                        <div className="busd-child1">
                                            <h5>10 BUSD</h5>
                                        </div>
                                        <div className="busd-child2">
                                            <p><span><i class="far fa-heart"></i></span>44</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </a>
                            </div>
                            <div className="col-lg-3">
                            <a href="#">
                                <div class="product-list2">
                                <div class="product-img2">
                                    <img src={wizaartimg} />
                                </div>
                                <div class="product-content2">
                                    <h4>Parague</h4>
                                    <div className="wrp-busd">
                                        <div className="busd-child1">
                                            <h5>10 BUSD</h5>
                                        </div>
                                        <div className="busd-child2">
                                            <p><span><i class="far fa-heart"></i></span>44</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </a>
                            </div>
                            <div className="col-lg-3">
                            <a href="#">
                                <div class="product-list2">
                                <div class="product-img2">
                                    <img src={wizaartimg} />
                                </div>
                                <div class="product-content2">
                                    <h4>Parague</h4>
                                    <div className="wrp-busd">
                                        <div className="busd-child1">
                                            <h5>10 BUSD</h5>
                                        </div>
                                        <div className="busd-child2">
                                            <p><span><i class="far fa-heart"></i></span>44</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </a>
                            </div>
                            <div className="col-lg-3">
                            <a href="#">
                                <div class="product-list2">
                                <div class="product-img2">
                                    <img src={wizaartimg} />
                                </div>
                                <div class="product-content2">
                                    <h4>Parague</h4>
                                    <div className="wrp-busd">
                                        <div className="busd-child1">
                                            <h5>10 BUSD</h5>
                                        </div>
                                        <div className="busd-child2">
                                            <p><span><i class="far fa-heart"></i></span>44</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </a>
                            </div> 
                        </div>
                        
                    </div>
                </section>
                <section id="featured-sec">
                    <div className="container">
                            <div className="head-marketchild2">
                                <h3>Featured Collections</h3>
                            </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <a href="/collectionview">
                                    <div className="collection-b">
                                       <div className="shadow-div">
                                            <div className="collect-content">
                                                <div className="col-box"><p>Collection</p></div>
                                                <h3>Altura Penguins <img src={check} /></h3>
                                                <p>Altura Penguins are the first set of Smart NFTs to roam the blockchain.
                                                Each Penguin is located in a different city across the globe. The background
                                                of the NFT will dynamically change to fit the time of day in the Penguin's location.
                                                There are 20 unique Penguins with a supply of 100 each. </p>
                                                <div className="view-btn">
                                                    <a href="#">View items on sale</a>
                                                    <a href="#" className="visit-website">Visit website</a>
                                                </div>
                                            </div>
                                       </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-lg-6">
                                <ul className="featured-list mrt-featured">
                                    <li>
                                        <div className="wrp-featured-list">
                                            <div className="featuredlist-img">
                                             <img src={wizaartimg} />
                                            </div>
                                            <div className="featuredlist-content">
                                                <div className="ect-box">
                                                    <a href="#">Collection</a>
                                                    <p>Magipunks <img src={check} className="img-check" /></p>
                                                    <div>
                                                        <a href="#" className="view-item">View items on sale</a>
                                                    </div>
                                                    <div>
                                                        <a href="#" className="visit-web">Visit website</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="wrp-featured-list">
                                            <div className="featuredlist-img">
                                             <img src={wizaartimg} />
                                            </div>
                                            <div className="featuredlist-content">
                                                <div className="ect-box">
                                                    <a href="#">Collection</a>
                                                    <p>Magipunks <img src={check} className="img-check" /></p>
                                                    <div>
                                                        <a href="#" className="view-item">View items on sale</a>
                                                    </div>
                                                    <div>
                                                        <a href="#" className="visit-web">Visit website</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="top-weekly-sec">
                    <div className="container">
                        <div className="head-marketchild2">
                                <h3>Top Weekly Sellers</h3>
                        </div>
                        <div className="top-weekly-reponsive">
                        <div className="row">
                            <div className="col-lg-12">
                                <ul className="topweekly-list">
                                    <li>
                                        <a href="#" className="weekly-link">
                                            <div className="wrp-topweekly-c">
                                                <div className="topweekly-img">
                                                    <img src={acc} />
                                                </div>
                                                <div className="topweekly-content">
                                                    <h3>AlturaNFT</h3>
                                                    <p>$53,821.12</p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="weekly-link">
                                            <div className="wrp-topweekly-c">
                                                <div className="topweekly-img">
                                                    <img src={acc} />
                                                </div>
                                                <div className="topweekly-content">
                                                    <h3>AlturaNFT</h3>
                                                    <p>$53,821.12</p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="weekly-link">
                                            <div className="wrp-topweekly-c">
                                                <div className="topweekly-img">
                                                    <img src={acc} />
                                                </div>
                                                <div className="topweekly-content">
                                                    <h3>AlturaNFT</h3>
                                                    <p>$53,821.12</p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="weekly-link">
                                            <div className="wrp-topweekly-c">
                                                <div className="topweekly-img">
                                                    <img src={acc} />
                                                </div>
                                                <div className="topweekly-content">
                                                    <h3>AlturaNFT</h3>
                                                    <p>$53,821.12</p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="weekly-link">
                                            <div className="wrp-topweekly-c">
                                                <div className="topweekly-img">
                                                    <img src={acc} />
                                                </div>
                                                <div className="topweekly-content">
                                                    <h3>AlturaNFT</h3>
                                                    <p>$53,821.12</p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                <section className="marketplace-sec2">
                    <div className="container">
                        <div className="wrp-head-marketplace">
                            <div className="head-marketchild2">
                                <h3>Recently listed</h3>
                            </div>
                            
                        </div>
                        <div className="row">
                            <div className="col-lg-3">
                            <a href="#">
                                <div class="product-list2">
                                <div class="product-img2">
                                    <img src={wizaartimg} />
                                </div>
                                <div class="product-content2">
                                    <h4>Parague</h4>
                                    <div className="wrp-busd">
                                        <div className="busd-child1">
                                            <h5>10 BUSD</h5>
                                        </div>
                                        <div className="busd-child2">
                                            <p><span><i class="far fa-heart"></i></span>44</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </a>
                            </div>
                            <div className="col-lg-3">
                            <a href="#">
                                <div class="product-list2">
                                <div class="product-img2">
                                    <img src={wizaartimg} />
                                </div>
                                <div class="product-content2">
                                    <h4>Parague</h4>
                                    <div className="wrp-busd">
                                        <div className="busd-child1">
                                            <h5>10 BUSD</h5>
                                        </div>
                                        <div className="busd-child2">
                                            <p><span><i class="far fa-heart"></i></span>44</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </a>
                            </div>
                            <div className="col-lg-3">
                            <a href="#">
                                <div class="product-list2">
                                <div class="product-img2">
                                    <img src={wizaartimg} />
                                </div>
                                <div class="product-content2">
                                    <h4>Parague</h4>
                                    <div className="wrp-busd">
                                        <div className="busd-child1">
                                            <h5>10 BUSD</h5>
                                        </div>
                                        <div className="busd-child2">
                                            <p><span><i class="far fa-heart"></i></span>44</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </a>
                            </div>
                            <div className="col-lg-3">
                            <a href="#">
                                <div class="product-list2">
                                <div class="product-img2">
                                    <img src={wizaartimg} />
                                </div>
                                <div class="product-content2">
                                    <h4>Parague</h4>
                                    <div className="wrp-busd">
                                        <div className="busd-child1">
                                            <h5>10 BUSD</h5>
                                        </div>
                                        <div className="busd-child2">
                                            <p><span><i class="far fa-heart"></i></span>44</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </a>
                            </div> 
                        </div>
                        <div className="loadmore-btn">
                            < button type="button" className="action-btn" id="login-btn">Load more</button>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
		);
	}

}
export default marketplace;