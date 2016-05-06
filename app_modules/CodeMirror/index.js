import { React, Component, PropTypes } from 'Component'

import CM from 'codemirror/lib/codemirror'

import 'codemirror/lib/codemirror.css';
// import './theme.global.css';
import styles from './index.css'

import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/jsx/jsx'

import join from 'join'

class CodeMirror extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isFocused: false
    }
  }

  componentDidMount () {
    const textareaNode = this.refs.textarea;
    this.codeMirror = CM.fromTextArea(textareaNode, this.props.options);
    this.codeMirror.on('change', this.codemirrorValueChanged);
    this.codeMirror.on('focus', this.focusChanged.bind(this, true));
    this.codeMirror.on('blur', this.focusChanged.bind(this, false));
    this._currentCodemirrorValue = this.props.defaultValue || this.props.value || '';
    this.codeMirror.setValue(this._currentCodemirrorValue);
  }

  componentWillUnmount () {
    // todo: is there a lighter-weight way to remove the cm instance?
    if (this.codeMirror) {
      this.codeMirror.toTextArea();
    }
  }
  componentWillReceiveProps (nextProps) {
    if (this.codeMirror && nextProps.value !== undefined && this._currentCodemirrorValue !== nextProps.value) {
      this.codeMirror.setValue(nextProps.value);
    }
    if (typeof nextProps.options === 'object') {
      for (let optionName in nextProps.options) {
        if (nextProps.options.hasOwnProperty(optionName)) {
          this.codeMirror.setOption(optionName, nextProps.options[optionName]);
        }
      }
    }
  }
  getCodeMirror () {
    return this.codeMirror;
  }

  focus () {
    if (this.codeMirror) {
      this.codeMirror.focus();
    }
  }

  focusChanged (focused) {
    this.setState({
      isFocused: focused,
    });
    this.props.onFocusChange && this.props.onFocusChange(focused);
  }

  codemirrorValueChanged (doc, change) {
    const newValue = doc.getValue();
    this._currentCodemirrorValue = newValue;
    this.props.onChange && this.props.onChange(newValue);
  }

  render () {
    const { props } = this
    const className = join(
      this.state.isFocused ? 'ReactCodeMirror--focused' : null,
      props.className,
      props.height == 'auto'? styles.autoHeight: ''
    )

    return <div {...props} value={null} className={className}>
      <textarea ref="textarea" defaultValue={this.props.value} autoComplete="off" />
    </div>
  }
}

CodeMirror.propTypes = {
  onChange: PropTypes.func,
  onFocusChange: PropTypes.func,
  options: PropTypes.object,
  path: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.any,
}

CodeMirror.defaultProps = {
  height: 'auto'
}

export default CodeMirror
