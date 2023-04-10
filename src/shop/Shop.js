import { Component } from "react";
import { CartSummary } from "./CartSummary";
import { CategoryNavigation } from "./CategoryNavigation";
import { ProductList } from "./ProductList";

export class Shop extends Component{
    render(){
        return<div className="container-fluid">
            <div className="row">
                <div className="col bg-dark text-white">
                    <div className="navbar-brand">SPORT STORE</div>
                    <CartSummary {...this.props.cart}/>
                </div>
            </div>
            {/* <div className="row">
                <div className="col-3 p-2">
                    <CategoryNavigation
                     baseUrl = "/shop/products"
                     categories = {this.props.user.categoires}/>
                </div>
                <div className="col-9 p-2">
                    <ProductList addCart={this.props.addToCart} prot={this.props.products_file}/>
                </div>
            </div> */}
        </div>
    }
    componentDidMount(){
        console.log('this is from shop',this.props);
    }
}