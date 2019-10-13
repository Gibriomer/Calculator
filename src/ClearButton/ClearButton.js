import React, { Component } from 'react'
import './ClearButton.scss';

export class ClearButton extends Component {
    render() {
        return (
            <div className="clear-btn" onClick={() => this.props.handelClick(this.props.children) }>
                {this.props.children}
            </div>
        )
    }
}

export default ClearButton
