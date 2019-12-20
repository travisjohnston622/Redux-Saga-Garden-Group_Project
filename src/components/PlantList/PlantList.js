import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlantListItem from '../PlantListItem/PlantListItem';
import mapStoreToProps from '../../redux/mapStoreToProps';

class PlantList extends Component {
    componentDidMount() {
      this.props.dispatch({
          type: 'GET_PLANTS',
      });
    }

    render() {
        return (
            <div>
                {this.props.reduxState.plantListReducer.map((item, index) => {
                    return (
                        <PlantListItem key={index} plant={item} />
                    )
                })}
                <pre>{JSON.stringify(this.props.reduxState)}</pre>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(PlantList);