import { React, Component, PropTypes } from 'Component'
import join from 'join'
import assign from 'object-assign'
import styles from './index.css'

export default class PreviewResult extends Component {

  render() {

    const { props } = this
    const className = join(props.className, styles.preview)

    return <div {...props} className={className} src={null}>
      <div className={styles.header}>Preview result</div>
      {props.children}
    </div>
  }
}
