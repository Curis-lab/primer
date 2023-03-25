import { Component } from "react";

export class ProductList extends Component{
    render(){
        if(this.props.prot === null || this.props.prot.length === 0){
            return<h5 className="p-2">No Products</h5>
        }
        return <>
            {this.props.prot && this.props.prot.map((p, i)=><div key={i}  className="card m-1 p-1 bg-light">
            <h4>
                {p.name}
                <span className="badge badge-pill badge-primary float-right">${p.price.toFixed(2)}</span>
            </h4>
            <div className="card-text bg-white p-1">
                {p.description}
                <button onClick={()=>this.props.addCart(p)} className="btn btn-success btn-sm float-right">Add to Cart</button>
            </div>
        </div>)}
        </>
    }
}