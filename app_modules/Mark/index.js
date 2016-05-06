import { React, Component, PropTypes } from 'Component'
import join from 'join'
import trimLines from 'trimLines'

import Html from 'Html'
import marked from 'marked'
import styles from './index.css'

export default class Mark extends Component {

  render(){


    const props = this.props
    const { children } = props

    const className = join(styles.mark, props.className)

    const html = marked(props.trim? trimLines(children).join('\n'): children)

    return <Html {...props} className={className} children={html} />
  }
}

Mark.defaultProps = {
  trim: true
}

Mark.propTypes = {
  trim: PropTypes.bool
}
