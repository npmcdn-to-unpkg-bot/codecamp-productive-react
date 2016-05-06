import assign from 'object-assign';
import { React, PropTypes, Component } from 'Component';

const emptyFn = () => {};

import styles from './index.css'

export default class Icon extends Component {

  render(){
    var props = this.props;

    //prepare style
    var sizeStyle = {};

    if (props.size){
      sizeStyle.fontSize = props.size;
    }
    if (props.color){
      sizeStyle.color = props.color;
    }

    var style = assign({}, sizeStyle, props.style);

    //prepare className
    var className = styles.materialIcons + ' material-icons ' + (props.className || '');
    if (props.disabled){
      className += ' ' + styles.disabled;
    }

    return <i {...props} style={style} className={className} onClick={props.disabled? emptyFn: props.onClick}>
      {props.name || props.children}
    </i>;
  }
}

Icon.defaultProps = {
  dark: true
};

Icon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool
};
