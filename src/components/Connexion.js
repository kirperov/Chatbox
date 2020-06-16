import React, { Component } from 'react'
class Connnexion extends Component {
    render() {
        return(
            <div className="connexionBox">
                <form className="connexion">
                    <input
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
