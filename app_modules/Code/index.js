import { React, Component, PropTypes } from 'Component'
import join from 'join'

import styles from './index.css'

export default class Code extends Component {

  render(){

    const props = this.props
    const className = join(styles.code, props.className)

    return <code {...props} title={null} className={className} />
  }
}
