import { React, Component } from 'Component'
import { connect } from 'react-redux'
import { Flex, Item } from 'Flex'

import { findDOMNode } from 'react-dom'

import Slide from 'Slide'
import styles from './style/index.css'

import Deck from './deck'

class App extends Component {

  constructor(props){
    super(props)

    const index = window.location.hash
    this.state = {
      index: (index.slice(1) || 0)*1
    }

    console.log(this.state.index)
  }

  componentDidMount(){
    global.addEventListener('keydown', this.onKeyDown)
  }

  render(){
    return <Flex onKeyDown={this.onKeyDown} column alignItems="stretch" justifyContent="center" className={styles.app} style={{background: '#2d2d2d', color: 'white'}}>
      <Deck active={this.state.index} ref="deck"/>
    </Flex>
  }

  onKeyDown(event){
    console.log('keycode', event.keyCode)
    if (event.keyCode === 37 || event.keyCode === 38 || (event.keyCode === 32 && event.shiftKey)){
      this.goto(-1)
    }

    if (event.keyCode === 39 || event.keyCode === 40 || (event.keyCode === 32 && !event.shiftKey)){
      this.goto(1)
    }
  }

  goto(dir){
    const index = this.state.index + dir

    const bodyActive = document.activeElement == document.body || document.activeElement == document.documentElement || document.activeElement && document.activeElement.tagName == 'A'

    if (!bodyActive){
      console.warn('an element is active', document.activeElement)
      return
    }
    console.log('trying to navigate to slide ', index)

    if (this.isValid(index)){
      window.location.hash = index + ''
      this.setState({
        index
      })
    } else {
      console.log(index, 'is not a valid slide')
    }
  }

  isValid(index){
    return index >= 0 && index < this.refs.deck.getSlideCount()
  }

}

export default App
