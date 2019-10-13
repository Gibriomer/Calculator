import React, { Component } from 'react'
import './Button.scss';

export class Button extends Component {
    
    isOperator(chart) {
        return !isNaN(chart) || chart === "." || chart ==="="
    }
    
    render() {
        return (
            <div className={`button ${this.isOperator(
                this.props.children) ? "" : "operator"}`}
                onClick={() => this.props.handelClick(this.props.children) } >
                {this.props.children}
            </div>
        )
    }
}

export default Button
