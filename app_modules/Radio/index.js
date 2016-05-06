import { React, Component, PropTypes, findDOMNode } from 'Component'
import join from 'join'
import Icon from 'Icon'
import InlineBlock from 'react-inline-block'

import styles from './index.css'

export default class Radio extends Component {

  render(){

    const props = this.props
    const checked = !!props.checked

    const iconName = checked? 'radio_button_checked': 'radio_button_unchecked'

    const iconClassName = join(
      styles.icon,
      props.iconClassName,
      checked? styles.checked: styles.unchecked
    )

    const className = join(
      props.className,
      styles.materialRadio
    )

    return <div {...props}
      styles={className}
      onClick={this.onClick}
      onKeyDown={this.onKeyDown}
      tabIndex={null}
    >
      <Icon
        name={iconName}
        className={iconClassName}
        tabIndex={props.tabIndex}
        role="button"
        ref={icon => this.icon = findDOMNode(icon)}
      />
      <InlineBlock
        onMouseDown={e => {
          e.preventDefault()
          this.icon.focus()
        }}
      >
        {props.label || props.children}
      </InlineBlock>
    </div>
  }

  onClick(event){
    this.props.onClick(event)
    this.toggleValue()
  }

  onKeyDown(event){
    if (event.key === 'Enter' || event.key === ' '){
      event.preventDefault()
      this.toggleValue()
    }

    this.props.onKeyDown(event)
  }

  toggleValue(){
    this.props.onChange(this.props.value)
  }

}

Radio.defaultProps = {
  onClick: () => {},
  onKeyDown: () => {},
  onChange: () => {},
  tabIndex: 0
}

Radio.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  onClick: PropTypes.func,

  checked: PropTypes.bool,
  value: PropTypes.any.isRequired
}
