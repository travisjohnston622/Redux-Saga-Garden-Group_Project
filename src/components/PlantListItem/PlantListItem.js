import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


class PlantListItem extends Component {
    removePlant = () => {
        this.props.dispatch({
            type: 'DELETE_PLANT',
            payload: this.props.plant.id 
        })
    }

    render() {
        return(
            <div>
                <p>{this.props.plant.name}</p>
                <button onClick={this.removePlant}>Remove Plant</button>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(PlantListItem);