import { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { Action } from "../data/Action";
import { dataTypes } from "../data/Types";
import { Shop } from "./Shop";
import { addToCart, updateCartQuantity, removeFromCart, clearCart } from "../data/CartActionCreator";
import { CartDetials } from "./CartDetials";

const mapStateToProps = (storeData) =>{return {user: storeData.ShopReducer, cart:storeData.CartReducer};}

const mapDispatchToProps = {Action, addToCart, updateCartQuantity, removeFromCart, clearCart}

const filterProducts = (products = [], category)=>
    (!category || category === "All")
    ?products
    :products.filter(p=> p.category.toLowerCase() === category.toLowerCase())

export const ShopConnector = connect(mapStateToProps, mapDispatchToProps)(
    class extends Component{
        render(){
            return(<Switch>
                <Route path="/shop/products/:category?" render={(routerProps)=><Shop {...this.props} {...routerProps} products_file={filterProducts(this.props.user.products, routerProps.match.params.category)}/>}></Route>
                <Route path="/shop/cart" render={(routeProps)=><CartDetials {...this.props.cart} {...routeProps}/>}/>
                <Redirect to="/shop/products"/>
            </Switch>)
        }       
        componentDidMount(){
            this.props.Action(dataTypes.CATEGORIES);
            this.props.Action(dataTypes.PRODUCTS);
        }
    }
)