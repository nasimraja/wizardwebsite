import React, { useState } from "react";
import { Row, Col, Container,Button,ModalHeader,ModalFooter, Modal, ModalBody } from "reactstrap";
import $ from "jquery";
import hero from '../../images/hero.png';
import Header from '../header.js';
import Footer from '../footer.js';
import search from '../../images/search.png';
import big from '../../images/big.png';
import play from '../../images/play.png';
import NFT_STAKE_ABI from  "../../../Config/NFT_STAKE_ABI.json"
import TOKEN_ABI from  "../../../Config/TOKEN_ABI.json"
import {NFT, NFT_STAKE} from  "../../../Config"
import Web3 from "web3"
import { useEffect } from 'react';
import {useWallet} from '@binance-chain/bsc-use-wallet'
import ConnectButton from '../../services/ConnectButton'
import add from '../../images/add.gif';
import StakeCard from "./StakeCard";
import WIZARD from '../../images/add.gif';
import ORDINARY from '../../images/Ordinary.gif';
import EPIC from '../../images/Epic.gif';
import RARE from '../../images/Rare.gif';
import { func } from "prop-types";
import AUTOSHARK from '../../images/AUTOSHARK.gif';
import DMTNT from '../../images/DMTNT.gif';
import BabyNFT from '../../images/BabyNFT.gif';
import NFB from '../../images/BananaWIZARDs.gif';
import MCS from '../../images/MoonCafeSloth.gif';
 
import ROUTER_ABI from  "../../../Config/ROUTER_ABI.json"
import NFWolfPup from '../../images/NFWolfPup.gif';


const STAKE_CONTRACT =
[ 
    {address: '0x13458cBa5f5E4de35543Ae0f8929a678b9229171', nft: '0x60f794549c0C0725041fF73B826B47d3E76f5777',image : NFB, status: 1, fee: 1 ,feedecimal: 100},
    {address: '0xCEC6B959f18C11181575493ADA084e51c58534eC', nft: '0x5350c6DA3e03a287d9657F469539b6B979f7b4A5',image : MCS, status: 1, fee: 1 ,feedecimal: 100},
    {address: '0x7BdFbD8124cD45F6AAFeFdc689390411E980a01E', nft: '0x6DE0198e668eEc5fB9E14376a0A560371BfFc850',image : NFWolfPup, status: 1, fee: 1 ,feedecimal: 100},
    {address: '0x776B37b5f3252EdF7a7D6145c7af2a818dCFFF9a', nft: '0xAB3f83a57FFe66a9B05577188F95911Ef17B97De',image : BabyNFT, status: 1, fee: 1 ,feedecimal: 100},
    {address: '0x97af550f4E875fC29979833Eac86FC5412Ed8758', nft: '0x645d1C47E7d1337A05878a143A4aDa9fcD5b1E8F',image : DMTNT, status: 1, fee: 1 ,feedecimal: 1},
    {address: '0xe3A0F1AA816aF790154AdE6ed790A9D400b0794f', nft: '0xe6dd923ad331cbd9015f00baa3ec8633d3131548',image : AUTOSHARK, status: 1, fee: 1,feedecimal: 1},
    {address: '0x63a6c517cdBb674D42931cc716236249E3BCEd67' , nft: '0x7d82F56ea0820A9d42b01C3C28F1997721732218' ,image : WIZARD, status: 0, fee: 0,feedecimal: 1},
    {address: '0x1ecA32d3EbA1F035a7e4e8607342112abFcF267a' , nft: '0x6c7933040170ad060e2132346b4b406e146c63a9',image : ORDINARY, status: 1, fee: 0,feedecimal: 1},
    {address: '0xdd19760840D1997F8325f218cC460E79c21660dc', nft: '0x89edc8cbC6a87d7bCF3f5Cf1A4468157fB2Eb950',image : RARE, status: 1, fee: 0,feedecimal: 1},
    {address: '0x5d70a100cFBcF216f6ff9096E68FC89Ba0DB8C48', nft: '0x50Ee5cA83766d0aF92921A8cC07968c7974525e8',image : EPIC, status: 1, fee: 0,feedecimal: 1},

];

const Stake = () => {
//   alert(STAKE_CONTRACT.length);
  let web3Provider  = window.ethereum ; 
  const [tvl,setTVL] = useState(0) ;
  

const getPrice = async (_token,ape) => {
    
    let _web3 = new Web3(web3Provider);
    const BNB = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'; // BNB or another token
    const BUSD = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56' ; //BUSD
   
 
    let _tokenContract = new _web3.eth.Contract(TOKEN_ABI,_token);
    let stotalDecimals = await _tokenContract.methods.decimals().call() ;

 

    let SROUTER_ADDRESS = null ; 
   
        if(ape == 0){
            SROUTER_ADDRESS = '0x10ed43c718714eb63d5aa57b78b54704e256024e';
        }
        else if(ape == 1) {
            SROUTER_ADDRESS = '0xcF0feBd3f17CEf5b47b0cD257aCf6025c5BFf3b7';

        }

         
        let _amountUSD = 1 * (10 ** 18 ); 

        let _routerContractS = new _web3.eth.Contract(ROUTER_ABI, SROUTER_ADDRESS);

        let _resultUSDS = await _routerContractS.methods.getAmountsOut(_amountUSD+'', [BNB, BUSD]).call();
        let BNBUsdS = _resultUSDS[1] / (10 ** 18);
 
     
 
 
        let _stokenPrice = 0 ;
  
 
                 let _amountS = 1 * (10 ** stotalDecimals ); 
                let _resultS = await _routerContractS.methods.getAmountsOut(_amountS+'', [_token, BNB]).call();
                _stokenPrice = _resultS[1] / (10 ** 18); // price of 1 CAKE in BUSD
                
                _stokenPrice = _stokenPrice * BNBUsdS ;
                 
            
            return _stokenPrice ;

        }
 

async function getTVL(){
    let tvl = 0 
    STAKE_CONTRACT.length > 0 && STAKE_CONTRACT.map(async (value, index) => {
        let _web3 = new Web3(web3Provider);     
        let _stakeContract = new _web3.eth.Contract(NFT_STAKE_ABI,value.address);
        let _staketoken = await _stakeContract.methods.staketoken().call() ; 
        let _tokenContract = new _web3.eth.Contract(TOKEN_ABI,_staketoken);

        let sprice = await getPrice(_staketoken,0);
        let _totalStaked = await _tokenContract.methods.balanceOf(value.address).call() ;  
        let _decimals= await _tokenContract.methods.decimals().call() ; 
        _totalStaked = parseFloat(_totalStaked/1e1 ** _decimals).toFixed(2);
        tvl = tvl + parseFloat(sprice*_totalStaked);
        if(index == (STAKE_CONTRACT.length - 1) ){
            tvl = parseFloat(tvl).toFixed(2);
            setTVL(tvl);
        }

    })

}

 
useEffect(() => {
    $(document).ready(function() {
        $(".faqs-container .faq-singular:first-child").addClass("active").children(".faq-answer").slideDown();//Remove this line if you dont want the first item to be opened automatically.
        $(".faq-question").on("click", function(){
          if( $(this).parent().hasClass("active") ){
            $(this).next().slideUp();
            $(this).parent().removeClass("active");
          }
          else{
            $(".faq-answer").slideUp();
            $(".faq-singular").removeClass("active");
            $(this).parent().addClass("active");
            $(this).next().slideDown();
          }
        });
      });
    $('.tabs3').on('click','a',function(e){
		e.preventDefault();
		var tabId = $(this).attr('data-tab');
		$(this).closest('.tabs3').find('a').removeClass('active');
		$(this).addClass('active');
		$('.tab-panel').removeClass('active');
		$('#'+tabId).addClass('active');
	  });


    if(window.ethereum){
        web3Provider  = window.ethereum;
      }
      else{
        web3Provider = new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org/')
       
      }
      getTVL() ;
},[])
      

// console.log(STAKE_CONTRACT);

 

		return(
			
			
            <div className="bg-stake">
			    <Header />
				
				<section id="choose-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="mainwrp">
                               <div className="stake-head">
                                   <h3>Earn NFT</h3>
                                   <p>Stake your WIZARD tokens to Earn NFT</p>
                               </div>

                               <div className="inactive-box mb-3">
									<ul class="tabs3 mb-3">
									<li class="tab-button"><a href="#" class="active" data-tab="active">Active</a></li>
									<li class="tab-button"><a href="#" class="" data-tab="inactive">Inactive</a></li>	
                                    </ul>
                                    <h4 className="ml-3 pt-1 pb-1 pr-3 align-self-center bg-white pl-3 d-inline-flex rounded ">
                                        Total Value Locked: ${tvl}
                                    </h4>
								</div>
                            	<div class="tab-pane">
								<div class="tab-panel active" id="active">
                            	{STAKE_CONTRACT.length > 0 && STAKE_CONTRACT.map((value, index) => {
                                    if(value.status == 1){
                                   return   <StakeCard index={index} />
                                }

                                })
                                }
                            </div>
                            <div class="tab-panel" id="inactive">
                            {STAKE_CONTRACT.length > 0 && STAKE_CONTRACT.map((value, index) => {
                                    if(value.status == 0){
                                   return   <StakeCard index={index} />
                                }

                                })
                                }
                            </div>


                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
					
                <Footer />  
            </div>
			
		);
 

}
export default Stake;