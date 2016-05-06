import { React, Component, PropTypes } from 'Component'
import ReactDOM from 'react-dom'
import join from 'join'
import assign from 'object-assign'
import Icon from 'Icon'
import PreviewResult from 'PreviewResult'

import styles from './index.css'

import CodeFrame from './CodeFrame'

const Frame = require('react-frame-component')

const babel = require('babel-standalone')
const astTypes = require('ast-types')

const transform = (code) => {
  let result = ''

  const requires = []
  let exception

  try {
    result = babel.transform(code, {
      presets: ['es2015', 'react']
    })
  } catch (ex){
    exception = ex.message
  }

  try {
    astTypes.visit(result.ast, {
      visitCallExpression: function(path){

        if (path.value && path.value.callee.name == 'require'){
          requires.push(path.value.arguments[0].value)
        }

        return false
      }
    })
  } catch (ex){
  }

  return {
    code: result.code,
    requires,
    exception
  }
}

import TabPanel from 'react-tab-panel'

const AVAILABLE_MODULES = {
  react: React,
  'react-dom': ReactDOM,
  'react-tab-panel': TabPanel,
  assign
}


var prefix = `
;var MAP = arguments[0];
;var exports = {};
;var React = MAP.react;
;var require = (function(){

  return function(path){
    var res = MAP[path] || window[path]


    if (!res){
      console.warn('Module "' + path + '" not found. Please use one of the following: "' + Object.keys(MAP).join('", "') + '".')
    }

    return res
  }

})();
; var module = {
  exports: null
};
`

var suffix = `
return exports && exports.default
`

export default class Preview extends Component {

  constructor(props){
    super(props)

    this.state = {
    }
  }

  render() {

    const { props } = this
    const { code, requires, exception } = transform(props.src)

    let fn
    let Cmp
    let cmp = null || <div>No preview available</div>

    const available = assign({}, AVAILABLE_MODULES, props.provide)

    try {
      if (!code){
        throw 'err'
      }
      const compiledCode = `${prefix}; ${code}; ${suffix};`
      fn = new Function(compiledCode)

      Cmp = fn(available);
      cmp = <Cmp />
      this.cmp = cmp
    } catch (ex){
      cmp = this.cmp
    }

    const className = join(props.className, styles.preview)

    return <PreviewResult>
      {cmp}
      {exception && <div className={styles.exception}>{exception}</div>}
      {this.renderWarning(available, requires)}
      {this.renderInfo()}
    </PreviewResult>
  }

  renderInfo(){
    return null
    return <div className={styles.info}>
      <Icon name="info_outline" /> Component <b>state</b> is lost on every edit! Use <b><code>export default</code></b> to return the preview component.
    </div>
  }

  renderWarning(available, requires){
    const notFound = requires.filter(req => !available[req])
    let hasCss

    if (notFound.length){
      const list = notFound.map((module, index) => {
        if (module.indexOf('.css') != -1){
          hasCss = true
        }
        return <span key={index}>
          {index? ', ':' '}
          <span className={styles.moduleName}>"{module}"</span>
        </span>
      })

      const cssNotice = hasCss?
        <div><b>CSS files</b> for <code>ZippyUI</code> components are probably already loaded</div>:
        null

      return <div className={styles.warning}>
        The following modules are not found:
        {list}.<br />
        {cssNotice}
        This may not necessarily be a problem with your code, but they are just unavailable in the current example.
      </div>
    }
  }
}

Preview.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string
};
