import { React, Component, PropTypes } from 'Component'
import debounce from 'lodash.debounce'

import PreviewResult from 'PreviewResult'

import Loader from 'react-dots-loader'
import 'react-dots-loader/index.css'

import Editor from './Editor'
import Code from './Code'
import Buttons from './Buttons'

import join from 'join'
import trimLines from 'trimLines'

import styles from './index.css'

const preventDefault = (e) => e.preventDefault()

let Preview

class PreviewComponent extends Component {

  componentWillMount(){
    if (!Preview){
      require.ensure([], (require) => {
        Preview = require('Preview').default
        this.setState({})
      })
    }
  }

  render(){
    return Preview?
      <Preview {...this.props} />:
      <PreviewResult><Loader size={10}/></PreviewResult>
  }
}

export default class Snippet extends Component {

  constructor(props){
    super(props)

    this.state = {
      edit: props.edit,
      preview: props.preview,
      code: this.props.source || this.props.children
    }

    this.onCodeChange = debounce(this.onCodeChange, 500)
  }

  render() {
    const { props } = this

    const className = join(
      props.className,
      styles.snippet
    )

    const code = trimLines(this.state.code).join('\n')

    const editable = !props.editable?
                      false:
                      (props.lang === 'jsx' || props.lang == 'js' || props.lang == 'javascript')

    return <div {...props} className={className} source={null}>

      {this.rendeDescription()}

      {editable && <Buttons
          defaultEdit={this.state.edit}
          defaultPreview={this.state.preview}
          description={props.description}
          togglePreview={this.togglePreview}
          toggleEdit={this.toggleEdit}
        />
      }

      {!this.state.edit && <Code lang={this.props.lang}>{code}</Code>}
      {this.state.edit && <Editor ref="editor" onChange={this.onCodeChange} defaultValue={code} />}
      {this.state.preview && this.renderPreview(code)}
    </div>
  }

  renderPreview(code){
    return <PreviewComponent src={code} provide={this.props.provide}/>
  }

  onCodeChange(code){

    this.editCode = code

    if (this.state.preview){
      this.setState({
        code
      })
    }
  }

  toggleEdit(){
    const edit = !this.state.edit

    const newState = {
      edit
    }

    if (!edit){
      newState.code = this.editCode
    }

    this.setState(newState, () => {
      if (edit){
        this.refs.editor.focus()
      }
    })
  }

  togglePreview(){
    this.setState({
      preview: !this.state.preview
    })
  }

  rendeDescription(){
    if (this.props.description){
      return <div className={styles.description}>{this.props.description}</div>
    }
  }
}

Snippet.propTypes = {
  lang: PropTypes.string,
  preview: PropTypes.bool,
  editable: PropTypes.bool,

  source: PropTypes.string,
  children: PropTypes.string,

  style: PropTypes.object,
  className: PropTypes.string
};

Snippet.defaultProps = {
  lang: "jsx",
  source: "",
  editable: true
}
