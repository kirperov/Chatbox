import React, { Component, createRef } from 'react'
import Formulaire from './components/Formulaire'
import './App.css'
import './animations.css'
import Message from './components/Message'

//Firebase
import base from './components/base'
//Aniamation (package react-transition group)
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group'

class App extends Component {
  state = {
    messages: {},
    pseudo: this.props.match.params.pseudo
  }
  //Create ref
  messageRef = createRef()

  componentDidMount() {
    // '/' root in firebase data to synchrinise
    base.syncState('/', {
      context: this, //our class
      state: 'messages'
    })
  }
  // To verify that state is update (I use it for messageRef to scrol the message automaticly in props ref in render below)
   componentDidUpdate() {
    const ref = this.messageRef.current
    ref.scrollTop = ref.scrollHeight
   }

  addMessage = message => {
    const messages = { ...this.state.messages }
    messages[`message-${Date.now()}`] = message
    //To delete past messages if > 10
    Object
      .keys(messages)
      .slice(0, -10)
      .forEach(key => {
        messages[key] = null
      })
    this.setState({messages});
  }

  //Method to know if pseudo is current pseudo 
  isUser = pseudo => pseudo === this.state.pseudo 
  render () {
  
    const messages = Object
    .keys(this.state.messages)
    .map(key => (
      <CSSTransition
        timeout={200}
        classNames='fade'
        key={key}>
        <Message
          isUser={this.isUser} 
          message={this.state.messages[key].message}
          pseudo={this.state.messages[key].pseudo}
        />
      </CSSTransition>
    ))
                          
    return (
      <div className='box'>
        <div>
          <div className='messages' ref={this.messageRef}>
            <TransitionGroup className="message">
              {messages}
            </TransitionGroup>
          </div>
        </div>
        <Formulaire
         length={140}
         pseudo={this.state.pseudo} 
         addMessage={this.addMessage}/>
      </div>
      )
  }
}

export default App
