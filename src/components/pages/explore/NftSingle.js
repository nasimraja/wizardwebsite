import React, { Component } from 'react';
import $ from "jquery";
import { Row, Col, Container,Button,ModalHeader,ModalFooter, Modal, ModalBody } from "reactstrap";
import { MARKETPLACE,NFT_LINK } from '../../../Config/index.js';
 
import MARKETPLACE_ABI from '../../../Config/MARKETPLACE_ABI.json';
import TOKEN_ABI from '../../../Config/TOKEN_ABI.json';
import NFT_ABI from '../../../Config/NFT_ABI.json';
import Web3 from "web3"
import { useState , useEffect } from 'react';
import useWallet from '@binance-chain/bsc-use-wallet'

import ConnectButton from '../../pages/ConnectButton';

const NftSingle = (props) => {
    let web3Provider  = window.ethereum ; 
    const wallet = useWallet();
    const [name,setName] = useState(0) ;
    const [price,setPrice] = useState(0) ;
    const [media,setMedia] = useState(null) ;
    const [balance, setBalance] = useState(0);
    const [approval, setApproval] = useState(0) ;
    const [damount, setdAmount] = useState(0);
    const [depositError,setDepositError] = useState(null) ;
    const [decimals, setDecimals] = useState(0);
    const [bidIncreasePercentage,setBidIncreasePercentage] = useState(0) ;
    const [minimumBid,setMinimumBid] = useState(0) ;
    const [symbol,setSymbol] = useState(null) ;
    const [highestBid,setHighestBid] = useState(0) ;
    const [userbid, setUserbid] = useState(0);
    const [endTime, setEndTime] = useState(0);
    const [bidStatus, setBidStatus] = useState(null);
    const bidStatusName = ['Inactive' , 'Open' , 'Paused' , 'Closed'];
    const [highestBidder,setHighestBidder] = useState(null) ;
    const [canClaim, setCanClaim] = useState(false);
    const [depositAmount, setDepositAmount] = useState(0);

    let timeInterval ;
    let timeInterval2 ;
    const [modal, setModal] = useState(false);
    const [bidModal, setBidmodal] = useState(false);

    const toggle = () => setModal(!modal);
    const bidToggle = () => setBidmodal(!bidModal);

    useEffect(() => {
        if(window.ethereum){
            web3Provider  = window.ethereum;
          }
          else{
            web3Provider = new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org/')
           
          }
     
          init() ;
 
        },[wallet.account])
       

            
        const init = async () => {
            let _web3 = new Web3(web3Provider);        
             let _nftContract = new _web3.eth.Contract(NFT_ABI,props.nftAddress);             
             let _media =  await _nftContract.methods.tokenURI(props.nftid).call() ;
             _media = await getBase64FromUrl(_media);
             setMedia(_media);
             
 
        }
  
        const taketo = async (taketo) => {
          window.open(NFT_LINK+taketo, "_blank");
        }
          
    
        const getBase64FromUrl = async (url) => {
            const data = await fetch(url);
            const blob = await data.blob();
            return new Promise((resolve) => {
              const reader = new FileReader();
              reader.readAsDataURL(blob); 
              reader.onloadend = () => {
                const base64data = reader.result;   
                resolve(base64data);
              }
            });
          }

		return(
  
						<div className="col-lg-3">
              <div class="product-list">
						{/* <a href={"/product/"+props.tradeid}> */}

                {
                  media == null || media.includes('data:text/html;') ?
                     <div class="product-img" >
              {/* <img src={media} /> */}
          </div>                      
              :
                <div class="product-img" style={{backgroundImage : 'url('+media+')'}}>
                  {/* <img src={media} /> */}
              </div>     
                }
                 <div className="more-detail">
                    <ul className="mt-3">
                      <li className="d-flex justify-content-between"><p className="title font-weight-bold">NFT Adress</p> <p className="value clickable" onClick={() => taketo(props.nftAddress) } >{props.nftAddress.substring(0, 6)+"...."+props.nftAddress.substring(props.nftAddress.length - 6)} </p> </li>
                      <li className="d-flex justify-content-between"><p className="title font-weight-bold">Token ID</p> <p className="value  clickable">{props.nftid} </p> </li>
                     </ul>
                     </div>
                 </div>
              </div>
         
		 
		);
 

}
export default NftSingle;