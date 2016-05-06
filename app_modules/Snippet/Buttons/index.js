import { React, Component, PropTypes } from 'Component'

import join from 'join'

import styles from './index.css'

const preventDefault = (e) => e.preventDefault()

export default class Buttons extends Component {

  constructor(props){
    super(props)

    this.state = {
      edit: props.defaultEdit,
      preview: props.defaultPreview
    }
  }

  renderButton(props, index){
    return <div
      {...props}
      toggle={null}
      className={join(styles.button, props.toggle? styles.toggle: '')}
      onMouseDown={preventDefault}
      onMouseEnter={this.onButtonEnter.bind(this, index)}
      onMouseLeave={this.onButtonLeave.bind(this, index)}
    />
  }

  onButtonEnter(index){
    this.setState({
      hoverIndex: index
    })
  }

  onButtonLeave(){
    this.setState({
      hoverIndex: -1
    })
  }

  render(){
    const { props } = this

    const className = join(
      props.className,
      styles.buttons,
      props.description?
        styles.withDescription: ''
    )

    const buttons = [
      'renderEditButton',
      'renderPreviewButton'
    ]

    return <div
      {...props}
      className={className}
      children={buttons.map((b, index) => {

        const separatorClassName = join(
          styles.separator,

          this.state.hoverIndex === index ||
          this.state.hoverIndex === index - 1?
            styles.over:
            ''
        )

        return [
          index?
            <div className={separatorClassName} />:
            null
          ,
          this[b](index)
        ]}
      )}
    />
  }

  renderPreviewButton(index){
    return this.renderButton({
      toggle: this.state.preview,
      children: this.state.preview? 'Hide Preview': 'Show Preview',
      onClick: this.togglePreview
    }, index)
  }

  renderEditButton(index){
    return this.renderButton({
      toggle: this.state.edit,
      onClick: this.toggleEdit,
      children: this.state.edit?
              'Close editor':
              'Click to edit'
    }, index)
  }

  togglePreview(){
    this.setState({
      preview: !this.state.preview
    })

    this.props.togglePreview && this.props.togglePreview()
  }

  toggleEdit(){
    this.setState({
      edit: !this.state.edit
    })
    this.props.toggleEdit && this.props.toggleEdit()
  }
}

Buttons.propTypes = {
  toggleEdit: PropTypes.func,
  togglePreview: PropTypes.func,

  defaultEdit: PropTypes.bool,
  defaultPreview: PropTypes.bool,

  style: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string
}

