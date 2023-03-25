import React, { Component } from "react";
import { ToggleLink } from "../ToggleLink";

export class CategoryNavigation extends Component{
    render(){
        return <>
            <ToggleLink to={this.props.baseUrl}>All</ToggleLink>
            {this.props.categories && this.props.categories.map((cat, i)=>
                <ToggleLink to={`${this.props.baseUrl}/${cat.toLowerCase()}`} key={i}>
                    {cat}
                </ToggleLink>)}
        </>
    }
}