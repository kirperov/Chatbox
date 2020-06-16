import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
class Connnexion extends Component {
    state = {
        //Empty by default
        pseudo: '',
        goToChat: false
    }

    handleChange = event => {
        const pseudo = event.target.value
        this.setState({pseudo})
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({ goToChat: true })
    }
    render() {
        if(this.state.goToChat) {
            return <Redirect to={`/pseudo/${this.state.pseudo}`}/>
        }
        return(
            <div className="connexionBox">
                <form className="connexion" onSubmit={ this.handleSubmit }>
                    <input
                        value={this.state.pseudo}
                        onChange={this.handleChange }
                        placeholder="Pseudo"
                        type="text"
                        required />   
                        <button type="submit">GO</button>                
                </form>
            </div>
        )
    }
}
export default Connnexion
