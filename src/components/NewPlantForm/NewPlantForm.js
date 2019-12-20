import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const mapStateToProps = reduxState => ({
    reduxState,
});

class NewPlantForm extends Component {
    state = {
        newPlant: {
            name: '',
            kingdom: '',
            clade: '',
            order: '',
            family: '',
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
                <div>
                    <TextField type='text' value={this.state.newPlant.name} placeholder="name" onChange={(event) => this.handleNameChange(event, 'name')} />
                    <TextField type='text' value={this.state.newPlant.kingdom} placeholder="kingdom" onChange={(event) => this.handleNameChange(event, 'kingdom')} />
                    <TextField type='text' value={this.state.newPlant.clade} placeholder="clade" onChange={(event) => this.handleNameChange(event, 'clade')} />
                    <TextField type='text' value={this.state.newPlant.order} placeholder="order" onChange={(event) => this.handleNameChange(event, 'order')} />
                    <TextField type='text' value={this.state.newPlant.family} placeholder="family" onChange={(event) => this.handleNameChange(event, 'family')} />
                    <TextField type='text' value={this.state.newPlant.subfamily} placeholder="subfamily" onChange={(event) => this.handleNameChange(event, 'subfamily')} />
                    <TextField type='text' value={this.state.newPlant.genus} placeholder="genus" onChange={(event) => this.handleNameChange(event, 'genus')} />
                </div>
                <br/>
                <Button variant="contained" color="primary" onClick={this.addNewPlant}>submit</Button>
            </div>
        );
    }
}


export default connect(mapStateToProps)(NewPlantForm);
