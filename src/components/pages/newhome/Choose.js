import React, { Component } from 'react';
import hero from '../../images/hero.png';
import Header from '../header.js';
import Footer from '../footer.js';
import search from '../../images/search.png';
import add from '../../images/add.gif';
import choose from '../../images/NFTFarm.png';
import choose2 from '../../images/BuyNFT.png';
import button from '../../images/button.png';



class Choose extends Component{
    constructor(props) {
      super(props);
      this.state = {
      };
  
    }
  
  componentDidMount = () =>{

   
  }
  render(){
		return(
			
			
        <div className="bg-choose">
			    <Header />
          <div className="bannermain-bg">
          <section id="partner-sec" className="sec1">
		<div className="container">
      
			<div className="partner-head">
				<h3>NFT</h3>
			</div>
			<div className="row">
				<div className="col-lg-12">
					<div className="wrp-partner-bgimg">
						<div className="wrp-autobox1">
              <div className="row">
                <div className="col-lg-12">
                  <div className="btn-center">
                    <a href="">
                      <img src={button}/>
                    </a>
                  </div>
              </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="btn-center1">
                  <a href="/stake">                
                    <img src={choose} height="440px"/>
                  </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="btn-center2">
                    <a href="/buy">
                      <img src={choose2} height="440px"/>
                    </a>
                  </div>
                </div>
              </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  </div>
				  
                <Footer />
					
            </div>
			
		);
  }

}
export default Choose;