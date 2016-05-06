import { React, Component, PropTypes } from 'Component'

import CodeMirror from 'CodeMirror'

export default class Editor extends Component {

  render(){
    return <CodeMirror
      ref="editor"
      onChange={this.props.onChange}
      defaultValue={this.props.defaultValue}
      options={{
        lineNumbers: true,
        mode: 'jsx',
        extraKeys: {
          Tab(cm) {
            //convert tabs to spaces
            const spaces = Array(cm.getOption("indentUnit") + 1).join(" ");
            cm.replaceSelection(spaces);
          }
        }
      }}
    />
  }

  focus(){
    this.refs.editor.focus()
  }
}

Editor.propTypes = {
  defaultValue: PropTypes.string,
  onChange: PropTypes.func
}
