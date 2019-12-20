import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
});

class NewPlantForm extends Component {
    state = {
        newPlant: {
            name: '',
            kingdom:'',
            clade: '',
            order: '',
            family:'',
            subfamily: '',
            genus: '',
        }
    }

    handleNameChange = (event, inputKey) => {
        console.log('event happended')
        this.setState({
            newPlant: {
                ...this.state.newPlant,
                [inputKey]: event.target.value,
            }
        });
        console.log(this.state.newPlant);
    }

    addNewPlant = event => {
        this.props.dispatch({ type: 'ADD_PLANT', payload: this.state.newPlant });
    }

    render() {
        return (
            <div>
                <h3>This is the form</h3>
                <pre>{JSON.stringify(this.state)}</pre>
                    <input type='text' value={this.state.newPlant.name} placeholder="name" onChange={(event)=>this.handleNameChange(event, 'name')} />
                    <input type='text' value={this.state.newPlant.kingdom} placeholder="kingdom" onChange={(event)=>this.handleNameChange(event, 'kingdom')} />
                    <input type='text' value={this.state.newPlant.clade} placeholder="clade" onChange={(event)=>this.handleNameChange(event, 'clade')} />
                    <input type='text' value={this.state.newPlant.order} placeholder="order" onChange={(event)=>this.handleNameChange(event, 'order')} />
                    <input type='text' value={this.state.newPlant.family} placeholder="family" onChange={(event)=>this.handleNameChange(event, 'family')} />
                    <input type='text' value={this.state.newPlant.subfamily} placeholder="subfamily" onChange={(event)=>this.handleNameChange(event, 'subfamily')} />
                    <input type='text' value={this.state.newPlant.genus} placeholder="genus" onChange={(event)=>this.handleNameChange(event, 'genus')} />
                    <button onClick={this.addNewPlant}>submit</button>
            </div>
        );
    }
}


export default connect(mapStateToProps)(NewPlantForm);
