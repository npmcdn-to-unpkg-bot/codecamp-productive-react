import { React, Component } from 'Component'
import { connect } from 'react-redux'
import { Flex, Item } from 'Flex'

import assign from 'object-assign'

import styles from './index.css'

const map = {
  1: '8vh',
  2: '7vh',
  3: '6vh',
  4: '5vh',
  5: '4vh',
  6: '3vh'
}

const DEFAULT = 3

export default class Slide extends Component {

  render(){
    const props = this.props

    const font = {
      fontSize: map[props.fontSize] || map[DEFAULT]
    }

    const titleFontSize = {
      fontSize: map[props.titleFontSize] || map[1]
    }

    return <Flex
      flex
      column
      alignItems="center"
      justifyContent="center"
      {...props}
      title={null}
      style={assign({}, font, props.style)}
      className={styles.slide}
    >
      {props.title != false && <h3 className={styles.title} style={titleFontSize}>{props.title || '\u00a0'}</h3>}
      <Flex
        column
        flex={1}
        alignItems="center"
        justifyContent="center">{props.children}
      </Flex>
    </Flex>
  }
}
