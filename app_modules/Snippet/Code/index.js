import { React, Component, PropTypes, findDOMNode } from 'Component'

import prism from 'prism'
import 'prism/index.global.css'

import join from 'join'
import styles from './index.css'

export default class Code extends Component {

  createMarkup(code) {
    return {
      __html: code.replace(/</g, '&lt;').replace(/>/g, '&gt;')
    }
  }

  componentDidMount() {
    this.highlight()
  }

  componentDidUpdate(prevProps){
    if (this.props.children != prevProps.children){
      this.highlight()
    }
  }

  highlight(){
    global.Prism && global.Prism.highlightElement(findDOMNode(this.refs.code))
  }

  render(){

    const { props } = this
    const code = props.children

    return <pre {...props} className={join(styles.pre, props.className)}>
      <code
        ref="code"
        className={`language-${props.lang}`}
        dangerouslySetInnerHTML={this.createMarkup(code)}
      />
    </pre>
  }
}

Code.propTypes = {
  lang: PropTypes.string,
  children: PropTypes.string.isRequired,

  className: PropTypes.string
}

Code.defaultProps = {
  lang: 'jsx'
}
