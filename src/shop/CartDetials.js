import { Component } from "react";
import { Link } from "react-router-dom";
import { CartDetialsRows } from "./CartDetailsRow";

export class CartDetials extends Component{
    render(){
        return<div className="m-3">
            <h2 className="text-center">Your Cart</h2>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Quanity</th>
                        <th>Product</th>
                        <th className="text-right">Price</th>
                        <th className="text-right">Sub Total</th>
                    </tr>
                </thead>
                <tbody>
                    <CartDetialsRows cart={this.props.cart}/>
                </tbody>
            </table>
            <div className="text-center">
                <Link to="/shop" className="btn btn-primary m-1">Continue Shopping</Link>
            </div>
        </div>
    }
}