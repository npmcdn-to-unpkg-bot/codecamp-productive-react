import { React, Component } from 'Component'
import Combo, { List as L } from 'react-combo'

import 'react-combo/index.css'
import styles from './index.css'
import join from 'join'

export default class C extends Component {
  render(){

    const className = join(this.props.className, this.props.dark? styles.dark: styles.light)

    return <Combo {...this.props} className={className}/>
  }
}

export const List = L
