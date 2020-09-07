import React, { Component } from 'react';



class DetailsCard extends Component {
    render() {
        return (
            <div>
                <h1>hi</h1>
                <h2>{this.props.match.params.id}</h2>
            </div >
        )
    }
}

export default DetailsCard;