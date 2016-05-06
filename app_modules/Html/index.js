import { React, Component, PropTypes } from 'Component'
import join from 'join'

import styles from './index.css'

export default class Html extends Component {

  render(){

    const props = this.props
    const { children } = props

    const className = join(styles.html, props.className)

    return <div {...props} className={className} children={null} dangerouslySetInnerHTML={{__html: children}} />
  }
}
