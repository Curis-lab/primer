import { Component } from "react";

export class CartDetialsRows extends Component{
    render(){
        return<>
            {this.props.cart && this.props.cart.map(item=>
            <tr key={item.product.id}>
                <td>
                    <input type="number" value={item.quantity}></input>
                </td>
                <td>{item.product.name}</td>
                <td>${item.product.price.toFixed(2)}</td>
                <td>${item.quantity * item.product.price}</td>
                <td>
                    {/* I have to understand how it work */}
                    <button className="btn btn-sm btn-danger" onClick={()=>this.props.removeFromCart(item.product)}>
                        Remove
                    </button>
                </td>
            </tr>)}
        </>
    }
}