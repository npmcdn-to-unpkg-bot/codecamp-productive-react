import { React, Component, PropTypes } from 'Component'

import assign from 'object-assign'
import ReactRadio from 'react-radio'
import Radio from 'Radio'
import join from 'join'

import styles from './index.css'

export default class RadioGroup extends Component {

  constructor(props){
    super(props)

    this.state = {
      value: props.defaultValue
    }
  }

  render(){

    const props = this.props
    const style = assign({}, props.style)

    return <ReactRadio
      {...props}
      value={props.value != null? props.value: this.state.value}
      style={style}
      className={join(styles.radio, props.column? styles.column: '')}
      labelStyle={{marginRight: 10}}
      renderRadio={this.renderRadio}
    />
  }

  renderRadio(props){
    return <Radio
      {...props}
      value={props.value}
      label={props.label}
      checked={props.checked}
      onChange={this.onChange}
    />
  }

  onChange(value){
    if (this.props.value == null){
      this.setState({
        value
      })
    }

    this.props.onChange(value)
  }

}

RadioGroup.defaultProps = {
  onClick: () => {},
  onKeyDown: () => {},
  onChange: () => {}
}

RadioGroup.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func
}
