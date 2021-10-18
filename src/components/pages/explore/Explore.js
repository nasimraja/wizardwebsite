import React, { Component } from 'react';
import $ from "jquery";
import Header from '../../pages/header.js';
import Footer from '../../pages/footer.js';
import { MARKETPLACE } from '../../../Config/index.js';
import MARKETPLACE_ABI from '../../../Config/MARKETPLACE_ABI.json';
import NFT_ABI from '../../../Config/NFT_ABI.json';
import Web3 from "web3"
import { useState , useEffect} from 'react';
import ExploreSingle from './ExploreSingle.js';
import useWallet from '@binance-chain/bsc-use-wallet'
import NftSingle from './NftSingle'
const Explore = () => {
    let web3Provider  = window.ethereum ; 
    const wallet = useWallet();
    const [counter,setCounter] = useState([]) ; 
    const [olimit,setolimit] = useState(20) ;
    const [oloading,setoLoading] = useState(false) ;
    const [slimit,setslimit] = useState(20) ;
    const [sloading,setsLoading] = useState(false) ;
    const [mlimit,setmlimit] = useState(20) ;
    const [mloading,setmLoading] = useState(false) ;
    const [climit,setclimit] = useState(20) ;
    const [cloading,setcLoading] = useState(false) ;
 


    const [userBids,setUserBids] = useState([]) ;
    const [userNfts,setUserNfts] = useState([]) ;
    const [nftAddress,setnftAddress] = useState(null) ;
    
    
    useEffect(() => {

      $('.tabs6').on('click','a',function(e){
        e.preventDefault();
        var tabId = $(this).attr('data-tab');
        $(this).closest('.tabs6').find('a').removeClass('active');
        $(this).addClass('active');
        $('.tab-panel').removeClass('active');
        $('#'+tabId).addClass('active');
      });
 
      $('.btn').on('click', function() {
        var $this = $(this);
      $this.button('loading');
        setTimeout(function() {
           $this.button('reset');
       }, 8000);
    });

    if(window.ethereum){
        web3Provider  = window.ethereum;
      }
      else{
        web3Provider = new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org/')
       
      }
 
      init() ;
      getCollection() ;
    },[wallet.account])

    const init = async () => {
        let _web3 = new Web3(web3Provider);
         let _marketPlaceContract = new _web3.eth.Contract(MARKETPLACE_ABI,MARKETPLACE);
         let _count =  await _marketPlaceContract.methods.getTradeCount().call() ;
          let rows = [];
         for (let i = 0; i < _count; i++) {
          rows.push({count : 1}) ;
         }
        //  alert(rows);
         setCounter(rows); 


         if(wallet.account){
           let _userBids = await _marketPlaceContract.methods.getAuctionsOfUser(wallet.account).call() ;
           setUserBids(_userBids);           
         }

    }


    
    const getCollection = async () => {
      let _web3 = new Web3(web3Provider);
       let _marketPlaceContract = new _web3.eth.Contract(MARKETPLACE_ABI,MARKETPLACE);
       let _nftAddress =  await _marketPlaceContract.methods.nftAddress().call() ;
       let _nftContract = new _web3.eth.Contract(NFT_ABI,_nftAddress);
 
       setnftAddress(_nftAddress)
       if(wallet.account){
         let _userBalance = await _nftContract.methods.balanceOf(wallet.account).call() ;
         let userTokens = [] ;

         for(let i = 0 ; i < _userBalance; i++){
          let _userToken = await _nftContract.methods.tokenOfOwnerByIndex(wallet.account,i).call() ;
            userTokens.push(_userToken);
            if(i == (_userBalance-1)){
               setUserNfts(userTokens);           
            }

         }
       }

  }


    const getStatus =  async (tradeid) => {
      let _web3 = new Web3(web3Provider);
       let _marketPlaceContract = new _web3.eth.Contract(MARKETPLACE_ABI,MARKETPLACE);
        let _status =  await _marketPlaceContract.methods.getAuctionStatus(tradeid).call() ;
      // let _status = 1 ;
       return  _status ;
         

  }
    
  const oloadmore = () => {
    setoLoading(true);
      setolimit(olimit+20)
      setTimeout(() => {
    setoLoading(false);
        
      }, 3000);
  }
    const sloadmore = () => {
      setsLoading(true);
        setslimit(slimit+20)
        setTimeout(() => {
      setsLoading(false);
          
        }, 3000);
    }
    const mloadmore = () => {
      setmLoading(true);
        setmlimit(mlimit+20)
        setTimeout(() => {
      setmLoading(false);
          
        }, 3000);
    }

    const cloadmore = () => {
      setcLoading(true);
        setclimit(climit+20)
        setTimeout(() => {
      setcLoading(false);
          
        }, 3000);
    }
    

    return(
      <div className="main-bg">
        <Header />
        <div className="container">
          <div className="row">
              <div className="col-lg-12">
                <section id="product-tips">
                <div className="marketplace-head">
                  <h3>marketplace</h3>
                </div>
                <div className="main-marketplace">
                <div className="main-tab-box">
                <ul class="tabs6">
                  <li class="tab-button"><a href="#" class="tab-link active" data-tab="onsale">On Sale</a></li>
                  <li class="tab-button"><a href="#" class="tab-link" data-tab="soldout">Sold Out</a></li>
                  <li class="tab-button"><a href="#" class="tab-link" data-tab="mybids">My Bids</a></li>
                  <li class="tab-button"><a href="#" class="tab-link" data-tab="collection"> My Collection</a></li>

                </ul>
                </div>
                <div class="tab-pane mt-4">
                  <div class="tab-panel active" id="onsale">
                  
                  <div className="row">
                    {
                    counter.length > 0 && counter.map((v,i) => {
                      let _status =  getStatus(i) ;
                      let _acounter = 0 ;
                      if(i< olimit && _status == 1){
                        _acounter++ ;
                        return (
                          <ExploreSingle tradeid={i}   />
                        ) 
                          }
                          else{
                            if(_acounter == 0 && (i == counter.length - 1))
                            return (
                              <div className="text-center w-100 m-3 p-5  card cards2">
                                  <h3>No Auction Available</h3>
                                </div>
                            )
                          }
                  })}

{
                    counter.length == 0 &&
                
                    <div className="text-center w-100 m-3 p-5  card cards2">
                                    <h3>No Auction Available</h3>
                                </div>
                        
                    }

                  </div>
                  {
                counter.length > olimit         &&     
              <div className="loadmore-btn">
              < button type="button" className={oloading ? "loading action-btn" : "action-btn"}   onClick={oloadmore} id="login-btn">Load more</button>
              </div>
              }
                  </div>
                  <div class="tab-panel" id="soldout">
                  
                  <div className="row">
                    {
                    counter.length > 0 && counter.map((v,i) => {
                      let _status =  getStatus(i) ;
                      if(i< slimit && _status != 1){
                        return (
                          <ExploreSingle tradeid={i}   />
                        ) 
                          }
                          else{
                            return (
                              <div className="text-center w-100 m-3 p-5  card cards2">
                                  <h3>No Auction Available</h3>
                                </div>
                            )
                          }
                  })}
 {
                    counter.length == 0 &&
                
                    <div className="text-center w-100 m-3 p-5  card cards2">
                                 <h3>No Auction Available</h3>
                                </div>
                        
                    }
                  </div>
                  {
                userBids.length > slimit         &&     
              <div className="loadmore-btn">
              < button type="button" className={sloading ? "loading action-btn" : "action-btn"}   onClick={sloadmore} id="login-btn">Load more</button>
              </div>
              }
                  </div>
                  <div class="tab-panel" id="mybids">
                     
                  <div className="row">
                    {
                    userBids.length > 0 && userBids.map((v,i) => {
                      let _status =  getStatus(v) ;
                      if(i< mlimit && _status != 1){
                        return (
                          <ExploreSingle tradeid={v}   />
                        ) 
                          }
                          else{
                            return (
                              <div className="text-center w-100 m-3 p-5  card cards2">
                                 <h3>No Auction Available</h3>
                                </div>
                            )
                          }
                  })}
                  {
                    userBids.length == 0 &&
                
                    <div className="text-center w-100 m-3 p-5  card cards2">
                                 <h3>No Auction Available</h3>
                                </div>
                        
                    }

                  </div>
                  {
                userBids.length > mlimit         &&     
              <div className="loadmore-btn">
              < button type="button" className={mloading ? "loading action-btn" : "action-btn"}   onClick={mloadmore} id="login-btn">Load more</button>
              </div>
              }
                  </div>

                  <div class="tab-panel" id="collection">
                    
                  <div className="row">
                    {
                    userNfts.length > 0 && userNfts.map((v,i) => {
                       if(i< climit ){
                        return (
                          <NftSingle nftid={v} nftAddress={nftAddress}   />
                        ) 
                          }
                          else{
                            return (
                              <div className="col-lg-12">
                                  <h3>No Collection Available</h3>
                              
                                </div>
                            )
                          }
                  })}
 {
                    userNfts.length == 0 &&
                
                    <div className="text-center w-100 m-3 p-5 card cards2">
                                 <h3>No Collection Available</h3>
                                </div>
                        
                    }
                  </div>
                  {
                userNfts.length > climit         &&     
              <div className="loadmore-btn">
              < button type="button" className={cloading ? "loading action-btn" : "action-btn"}   onClick={cloadmore} id="login-btn">Load more</button>
              </div>
              }
                  </div>
                </div>
                </div>
                  
                </section>
              </div>
          </div>
        </div>
        <Footer />
      </div>
    );
 

}
export default Explore;