import { React, Component, PropTypes } from 'Component'
import join from 'join'

export default class CodeFrame extends Component {

  render() {

    const { props } = this
    const { code } = props

    return <div>
      {this.renderScript('react/dist/react.min.js')}
      {this.renderScript('react-dom/dist/react-dom.min.js')}
      <div
        dangerouslySetInnerHTML={{
          __html: `
          <div id="content"></div>
          <script type="text/javascript">
            ReactDOM.render(React.createElement('div','hello react'), document.getElementById('content'))
          </script>
          `
        }}
      />
    </div>
  }

  renderScript(src){
    const url = `https://unpkg.com/${src}`

    return <script key={src} src={url} />
  }
}
