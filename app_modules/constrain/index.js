import { React, Component } from 'Component'
import assign from 'object-assign'

class Constrainer extends Component {

  render(){

    const props = this.props

    const style = assign({}, {
      maxWidth: props.maxWidth,
      width: '100%',
      position: 'relative',
      margin: '0 auto'
    }, props.style)

    const renderProps = assign({}, props, {
      maxWidth: null,
      style
    })

    if (props.factory){
      const Factory = props.factory

      return <Factory {...renderProps} factory={null} />
    }

    return <div {...renderProps}/>
  }
}

Constrainer.defaultProps = {
  maxWidth: 1000
}

export { Constrainer }

export default (Cmp) => {

  class ConstainedCmp extends Component {
    render(){
      return <Constrainer factory={Cmp} {...this.props} />
    }
  }

  return ConstainedCmp
}
