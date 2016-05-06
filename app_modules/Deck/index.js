import { React, Component } from 'Component'
import { connect } from 'react-redux'
import { Flex, Item } from 'Flex'

import styles from './index.css'

export default class Deck extends Component {
  render(){
    return <Flex flex alignItems="stretch" className={styles.deck}>
      {React.Children.toArray(this.props.children).map((child, index) => {
        return <Flex flex alignItems="stretch" key={index} style={{display: index === this.props.active?'':'none'}}>
          {child}
        </Flex>
      })
    }
    </Flex>
  }
}
