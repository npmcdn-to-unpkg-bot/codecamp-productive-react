import { React, Component, PropTypes } from 'Component'
import Icon from 'Icon'

import join from 'join'

import sectionUrl from 'lodash.kebabcase'

import styles from './index.css'

const levelComponents = [1,2,3,4,5,6].map(level => {
  return (props) => {
    return React.createElement('h' + level, props)
  }
})

export default class Section extends Component {

  constructor(props){
    super(props)
    this.state = {
      collapsed: false
    }
  }

  render(){

    const props = this.props

    const { title, level } = props

    const className = join(styles.section, props.className, styles[`level-${level}`])

    const LevelFactory = levelComponents[level - 1]

    const href = '#' + sectionUrl(title)

    const icon = this.state.collapsed?
                  'keyboard_arrow_right':
                  'keyboard_arrow_down'

    const tooltip = this.state.collapsed?
                  'Click to expand':
                  'Click to collapse'

    return <div {...props} title={null} className={className}>
      <LevelFactory>
        {props.collapse !== false && <Icon name={icon} className={styles.toggleIcon} onMouseDown={this.toggle} title={tooltip}/>}
        <a className={styles.anchor} href={href}>{title}</a>
      </LevelFactory>
      {!this.state.collapsed && props.children}
    </div>
  }

  toggle(e){
    e.preventDefault()
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
}

Section.propTypes = {
  level: PropTypes.oneOf([1,2,3,4,5,6])
}
Section.defaultProps = {
  level: 1,
  collapse: true
}
