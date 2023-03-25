import { Component } from "react";
import { Link, Route } from "react-router-dom";

export class ToggleLink extends Component{
    render(){
        return<Route 
        path={this.props.to} 
        //restrict the route
        exact={this.props.exact}
        children={ routeProps =>{
            const baseClasses = this.props.className || "m-2 btn btn-block";
            const activeClasses = this.props.className || "btn-primary";
            const inActiveClasses = this.props.className || "btn-secondary";

            const combinedClasses = `${baseClasses} ${routeProps.match? activeClasses: inActiveClasses}`
            return <Link to={this.props.to} className={combinedClasses}>{this.props.children}</Link>
        }}
        />
    }
}