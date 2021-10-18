import React, { useState, useEffect } from 'react';
import $ from "jquery";
import Header from '../../pages/header.js';
import Footer from '../../pages/footer.js';
import bannericon  from '../../images/bannericon.png';
import wizard  from '../../images/wizard.png';
import wizaartimg  from '../../images/wizaart-img.gif';
import tokent1  from '../../images/tokent.png';
import tokent2  from '../../images/tokent2.png';
import roadmap1  from '../../images/roadmap1.png';
import roadmap2  from '../../images/roadmap2.png';
import roadmapl  from '../../images/roadmapl.png';
import dm  from '../../images/dm.png';
import p1  from '../../images/p1.png';
import p2  from '../../images/p2.png';
import p3  from '../../images/p3.png';
import p4  from '../../images/p4.png';
import p5  from '../../images/p5.png';
import p6  from '../../images/p6.png';
import p7  from '../../images/p7.png';
import p8  from '../../images/p8.png';
import p9  from '../../images/p9.png';
import p10  from '../../images/p10.png';
import p11  from '../../images/p11.png';
import p12  from '../../images/p12.png';
import wiz  from '../../images/wiz.png';
import wiz2  from '../../images/wiz2.png';
import wiz3  from '../../images/wiz3.png';
import wiz4  from '../../images/wiz4.png';
import wiz5  from '../../images/wiz5.png';
import wiz6  from '../../images/wiz6.png';
import wiz7  from '../../images/wiz7.png';
import q1  from '../../images/q1.png';
import q2  from '../../images/q2.png';
import q3  from '../../images/q3.png';
import q4  from '../../images/q4.png';
import q5  from '../../images/q5.png';
import q6  from '../../images/q6.png';
import f1  from '../../images/f1.png';
import f2  from '../../images/f2.png';
import f3  from '../../images/f3.png';
import f4  from '../../images/f4.png';
import f5  from '../../images/f5.png';
import f6  from '../../images/f6.png';
import f8  from '../../images/f8.png';
import f9  from '../../images/f9.png';
import f10  from '../../images/f10.png';

function Home() {
  
	

  useEffect(() => {

	let copyText = document.querySelector(".copy-text");
copyText.querySelector("button").addEventListener("click", function () {
	let input = copyText.querySelector("input.text");
	input.select();
	document.execCommand("copy");
	copyText.classList.add("active");
	window.getSelection().removeAllRanges();
	setTimeout(function () {
		copyText.classList.remove("active");
	}, 2500);
});
    // faq open js

		$(document).ready(function() {
			$('.block__title').click(function(event) {
				if($('.block').hasClass('one')){
					$('.block__title').not($(this)).removeClass('active');
					$('.block__text').not($(this).next()).slideUp(300);
				}
				$(this).toggleClass('active').next().slideToggle(300);
			});
		
		});

		// closed faq js
  });

  return (
	<div>
	<Header />
	<div className="bannermain-bg">
		<section id="banner-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-7">
						<div className="banner-content">
							
							<h3>Where the magic happens.</h3>
							<p>WIZARD is a first-of-a-kind fantasy token and NFT marketplace which brings 
								a magical experience to all who behold it, combining crypto with games for multiplied
								rewards! It hosts an immersive, explorative platform with unique magical secrets tucked
								away within many hidden nooks and crannies!
							</p>
							
							<div className="bnr-btn">
								<a href="https://nft.wizard.financial/" target="_blank">BUY NFT</a>
								<a href="https://game.wizard.financial/dashboard" className="play-btn" target="_blank">PLAY  NOW</a>
							</div>
							<div className="copy-text contract-adr">
								<h3>Contract Address</h3>
								<input className="text" type="text" value="0x5066c68cae3b9bdacd6a1a37c90f2d1723559d18" />
									<button class="btn" type="button" data-clipboard-demo="" data-clipboard-target="#foo">
										COPY
									</button>
							</div>
						</div>
					</div>
					<div className="col-lg-5">
						<div className="bnr-img">
							<img src={wizaartimg} />
						</div>
					</div>
				</div>
			</div>
		</section>
		<section id="tokenomic-sec">
			<div className="container">
				<div className="wrp-tokenhead">
					<div className="tokenhead1">
						<img src={wizard} />
					</div>
					<div className="tokenhead2">
						<h3>Tokenomics</h3>
					</div>
					<div className="tokenhead3">
					<img src={wizard} />
					</div>
				</div>
				<div className="responsives">
				<div className="wrp-token-box">
					<div className="tokenboxc">
						<h3>Area</h3>
						<ul className="list-token">
							<li>Game funding</li>
							<li>Presale (oxbull)</li>
							<li>Presale (Seedify)</li>
							<li>Liquidity</li>
							<li>Team and advisor <br></br>token (locked)</li>
							<li>Ecosystem and <br></br>marketing</li>
						</ul>
					</div>
					<div className="tokenboxc tokenboxc-color">
						<h3>Percentage</h3>
						<ul className="list-token">
							<li>5%</li>
							<li>25%</li>
							<li>10%</li>
							<li>35%</li>
							<li>10%</li>
							<li>15%</li>
						</ul>
					</div>
					<div className="tokenboxc">
						<h3>WIZARD</h3>
						<ul className="list-token">
							<li>100000</li>
							<li>500000</li>
							<li>200000</li>
							<li>700000</li>
							<li>200000</li>
							<li>300000</li>
						</ul>
					</div>
					<div className="tokenboxc tokenboxc-color">
						<h3>Vesting Period</h3>
						<ul className="list-token">
							<li>10% at TGE rest 1</li>
							<li>year</li>
							<li>60% at TGE</li>
							<li>20% TGE Within first <br></br>6 months of launch</li>
							<li>10% release after <br></br>every 3 months</li>
							<li>20% at TGE rest over <br></br>5 months</li>
						</ul>
					</div>
					<div className="tokenboxc">
						<h3>Amount at TGE</h3>
						<ul className="list-token">
							<li>10000</li>
							<li>300000</li>
							<li>120000</li>
							<li>140000</li>
							<li></li>
							<li>60000</li>
						</ul>
					</div>
				</div>
				<div className="ido-wrp">
					<div className="ido-box">
						<h3>Ido price 0.5</h3>
					</div>
					<div className="ido-box idobox-color">
						<h3>Listing price 0.55</h3>
					</div>
					<div className="ido-box">
						<h3>Market cap at launch</h3>
					</div>
					<div className="ido-box idobox-color">
						<h3>280k</h3>
					</div>
				</div>
				</div>
				
				<div className="amount-box">
					<p>Amount to raise 350k <br></br>
						TGE (Token Generation Event)</p>
				</div>
			</div>
		</section>
		
	</div>
	<section id="roadmap">
			<div className="container">
				<div className="head-roadmap">
					<h3>Road Map</h3>
				</div>
				<div className="main-roadmapbox">
					<div className="wrp-roadmap-content">
						<div className="roadmap-c1">
							<div className="roadmapimg1">
								<img src={roadmap1} />
							</div>
						</div>
						<div className="roadmap-c1">
							<div className="roadmap2">
								<img src={roadmap2} />
							</div>
							<div className="roadmapl">
								<img src={roadmapl} />
							</div>
						</div>
						<div className="roadmap-c1">
							<div className="tokenomic-c">
								<h3>TOKENOMICS</h3>
								<ul className="tokenomic-list">
									<li>2,000,000 Total Tokens</li>
									<li>Game funding 5%</li>
									<li>Presale (oxbull & seedify) 35%</li>
									<li>Liquidity 35%</li>
									<li>Team token and advisor (locked) 10%</li>
									<li>Ecosystem and marketing 15%</li>

								</ul>
								<h3 className="mrt-h">TOKEN BURN</h3>
								<p>2% of tokens burn until the council of wizards <br></br>vote to end it!</p>
								<h3 className="mrt-h">TOKEN REDISTRIBUTION</h3>
								<p>2% of each transaction gets redistributed amongst <br></br>
									all wizards according to their weighted holdings.</p>
								<h3 className="mrt-h">CHARITY & COMMUNITY</h3>
								<p>1% of tokens from each transaction go towards<br></br>
									helping to build the magic of the WIZARD<br></br>
									community, and to give back by paying it forward<br></br>
									to charities chosen by $WIZARD holders!
								</p>
							</div>
						</div>
					</div>
					<div className="automated-wrp">
						<h3>AUTOMATED LP</h3>
						<p>1% of tokens that incur slippage are added into the LP, to ensure that wizards’ magic never falters.</p>
						<h3>How it Works?</h3>
						<p>$WIZARD has 4% slippage on all transactions to prevent price manipulation from muggles and encourage wizards to hold.</p>

						<div className="wrp-tokengrt-list">
							<div className="tokengetlist1">
								<ul className="tokengetlist">
									<li>1% Gets burned</li>
									<li>1% Goes towards Charity and Community</li>
								</ul>
							</div>
							<div className="tokengetlist1">
								<ul className="tokengetlist">
									<li>1% Gets redistributed amongst all wizards</li>
									<li>1% Automated Market Making</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	<section id="faq-section">
		<div className="container">
			<div className="head-faq">
				<h3>FAQ</h3>
			</div>
			<div className="wrp-faq">
				<div className="row">
					<div className="col-lg-11">
					<div class="wrapper">
						<div class="block one">
							<div class="block__item">
								<div class="block__title">Q: What is a wizard financial?</div>
								<div class="block__text">
								Ans Wizard is a fantasy-based ecosystem that is solely made to revolutionize 
								the P2E and NFTs use case on the blockchain. Wizard gives unique NFT based solutions 
								for all sorts of DEFI processes, Which include NFT farms, NFT pools, NFT Armory, NFT 
								swap, and much more. While WIzard is definitely unique with its approach for NFTs it 
								is also aiming to change and dominate 
								the P2E gaming on the blockchain, We have Bridge
								 steam games, Wizard wars, Quidditch, and much more.
								</div>
							</div>
							<div class="block__item">
								<div class="block__title">Q: What are the benefits of holding WIZARD?</div>
								<div class="block__text">
									Holding WIZARD comes with the following benefits:
									<p>1) Access to P2E</p>
									<p>2) Cheaper Access to NFT marketplace</p>
									<p>3) Access to utility NFT farms</p>
									<p>4) Access to IWO</p>
									<p>5) Access to NFT armory</p>
								</div>
							</div>
							<div class="block__item">
								<div class="block__title">Q: What is IWO?</div>
								<div class="block__text">
								And IWO stands for Initial Wizard Offering is a launchpad by wizard financial 
								but with use-case of NFTS you can buy guaranteed allocation by achieving certain 
								NFTs you can trade those NFTs on our marketplace too. For the rest of the allocation, 
								people will be able to participate by holding WIZARD in their wallets.
								</div>
							</div>
							<div class="block__item">
								<div class="block__title">Q: What is KNIGHT and how it is related to WIZARD?</div>
								<div class="block__text">
									Ans A fierce and brave warrior a protector of human realm more details will be revealed shortly
								</div>
							</div>
							<div class="block__item">
								<div class="block__title">Q: What is so unique about the WIZARD NFT marketplace?</div>
								<div class="block__text">
								Ans WIZARD NFT marketplace is made to trade all sorts of erc721 whether it a game weapon,
								 other projects NFT, your personally minted NFT on any other platform. Motivation behind 
								 WIZARD marketplace is the ability to trade the weapons, tools and characters that are used 
								 in other P2E ecosystem.

									
								</div>
							</div>
							
							
					
						</div>
					</div>
					</div>
					<div className="col-lg-1">
						<ul className="dm-list">
							<li><img src={q1} /></li>
							<li><img src={q2} /></li>
							<li><img src={q3} /></li>
							<li><img src={q4} /></li>
							<li ><img src={q5} /></li>
					
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section id="partner-sec">
		<div className="container">
			<div className="partner-head">
				<h3>Partners</h3>
			</div>
			<div className="row">
				<div className="col-lg-12">
					<div className="wrp-partner-bgimg">
						<div className="wrp-autobox">
							<a href="https://apeswap.finance/" target="_blank">
								<div className="auto-box">
									<div className="auto-content-box">
										<h3>APESWAP</h3>
									</div>
									<div className="autocircle-box">
										<img src={p1} />
									</div>
								</div>
							</a>
							<a href="https://babyswap.io/"  target="_blank">
							<div className="auto-box">
								<div className="auto-content-box">
									<h3>Baby swap</h3>
								</div>
								<div className="autocircle-box">
									<img src={p2} />
								</div>
							</div>
							</a>
							<a href="(https://honeyfarm.finance/" target="_blank">
								<div className="auto-box">
									<div className="auto-content-box">
										<h3>Honey farm</h3>
									</div>
									<div className="autocircle-box">
										<img src={p3} />
									</div>
								</div>
							</a>
							<a href="https://www.oxbull.tech/" target="_blank">
							<div className="auto-box">
								<div className="auto-content-box">
									<h3>Oxbull</h3>
								</div>
								<div className="autocircle-box">
									<img src={p4} />
								</div>
							</div>
							</a>
							<a href="(http://seedify.fund/" target="_blank">
							<div className="auto-box">
								<div className="auto-content-box">
									<h3>Seedify</h3>
								</div>
								<div className="autocircle-box">
									<img src={p5} />
								</div>
							</div>
							</a>
							<a href="https://www.wolfdencrypto.com/" target="_blank">
							<div className="auto-box">
								<div className="auto-content-box">
									<h3>Wolfden</h3>
								</div>
								<div className="autocircle-box">
									<img src={p6} />
								</div>
							</div>
							</a>
							<a href="https://cafeswap.finance/" target="_blank">
							<div className="auto-box">
								<div className="auto-content-box">
									<h3>Cafeswap</h3>
								</div>
								<div className="autocircle-box">
									<img src={p7} />
								</div>
							</div>
							</a>
							<a href="https://autoshark.finance/" target="_blank">
								<div className="auto-box">
									<div className="auto-content-box">
										<h3>Autoshark</h3>
									</div>
									<div className="autocircle-box">
										<img src={p8} />
									</div>
								</div>
							</a>
							<div className="auto-box">
								<div className="auto-content-box">
									<h3>koala defi</h3>
								</div>
								<div className="autocircle-box">
									<img src={p9} />
								</div>
							</div>
							<div className="auto-box">
								<div className="auto-content-box">
									<h3>ditto</h3>
								</div>
								<div className="autocircle-box">
									<img src={p10} />
								</div>
							</div>
							<a href="https://treasurekey.bet/" target="_blank">
							<div className="auto-box">
								<div className="auto-content-box">
									<h3>treasure key</h3>
								</div>
								<div className="autocircle-box">
									<img src={p11} />
								</div>
							</div>
							</a>
							<a href="https://wault.finance/" target="_blank">
							<div className="auto-box">
								<div className="auto-content-box">
									<h3>wault</h3>
								</div>
								<div className="autocircle-box">
									<img src={p12} />
								</div>
							</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	
	<section id="wingame-sec">
		<div className="container">
			<div className="game-head">
				<h3>Wiz Game</h3>
			</div>
			
			<div className="row">
				<div className="col-lg-12">
					<div className="wrp-wizgame">
						<div className="wizgame-w">
						<div className="row">
							<div className="col-lg-4">
								<a href="https://wizard.financial/platformer/" target="_blank">
									<div className="flat-box">
										<h3>Flatformer</h3>
										<img src={wiz} />
									</div>
								</a>
							</div>
							<div className="col-lg-4">
								<a href="https://wizard.financial/fluppy-wuz/" target="_blank">
								<div className="flat-box">
									<h3>Fluppy wuz</h3>
									<img src={wiz2} />
								</div>
								</a>
							</div>
							<div className="col-lg-4">
								<a href="https://dragonsden.wizard.financial/" target="_blank">
								<div className="flat-box">
									<h3>dragon's den</h3>
									<img src={wiz3} />
								</div>
								</a>
							</div>
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
export default Home;