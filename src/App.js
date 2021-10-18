import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Redirect} from 'react-router-dom';
import './App.css';
import Home from './components/pages/home/home.js';
import Tokenomic from './components/pages/tokenomic/Tokenomic.js';
import Explore from './components/pages/explore/Explore.js';
import Product from './components/pages/product/Product.js';
import Farm from './components/pages/home2/Farm.js';
import Home2 from './components/pages/home2/home.js';
import Choose from './components/pages/newhome/Choose.js';
import Stake from './components/pages/newhome/Stake.js';
import Newpage2 from './components/pages/newhome/Newpage2.js';
import multiple from './components/pages/multiple/multiple.js';
import single from './components/pages/single/single.js';
import create from './components/pages/create/create.js';
import marketplace from './components/pages/marketplace/marketplace.js';



const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={(props) => (
	  localStorage.getItem('ACCESS_ID') != null ? <Redirect to='/' /> : <Component {...props} />
	)} />
  )
class App extends Component {

  render() {
    return (
	<Router>
		<div>				
			<Route exact path="/" name="Home Page" component = {Home} />
			<Route exact path="/tokenomic" name="Tokenomic Page" component = {Tokenomic} />
			<Route exact path="/explore" name="explore Page" component = {Explore} />
			<Route exact path="/product/:tradeid" name="Product Page" component = {Product} />
			<Route exact path="/farm" name="Farm Page" component = {Farm} />
			<Route exact path="/home" name="Home2 Page" component = {Home2} />
			<Route exact path="/choose" name="Choose Page" component = {Choose} />
			<Route exact path="/stake" name="Stake Page" component = {Stake} />
			<Route exact path="/buy" name="Newpage2 Page" component = {Newpage2} />
			<Route exact path="/multiple" name="multiple Page" component = {multiple} />
			<Route exact path="/single" name="single Page" component = {single} />
			<Route exact path="/create" name="create Page" component = {create} />
			<Route exact path="/marketplace" name="marketplace Page" component = {marketplace} />
		</div>
	</Router>
    );
  }
}

export default App;
