import { React, Component, PropTypes } from 'Component'
import join from 'join'
import styles from './index.css'

const aliases = {
  children: 'description'
}

const titles = {
  name: 'Name',
  type: 'Type',
  default: 'Default',
  oneOf: 'One of',
  value: 'Value',
  description: 'Description'
}

const renderers = {
  name(value) {
    return <code>{value}</code>
  },
  type(value) {
    let type = value

    if (!Array.isArray(type)) {
      type = [type]
    }

    return <div>
      {type
        .map((t, i) => <code key={"code-"+i}>{t}</code>)
        .map((t, i) => [i? <span key={'separator' + i} className={styles.typeSeparator}>|</span>: null, t])
      }
    </div>
  },
  default(value){
    if (typeof value == 'string'){
      value = '"' + value + '"'
    }

    return value
  },
  value(value){
    if (typeof value == 'string'){
      value = '"' + value + '"'
    }

    return <code>{value}</code>
  },
  oneOf(value) {
    let type = value

    if (!Array.isArray(type)) {
      type = [type]
    }

    return <div>
      {type
        .map((t, i) => {
          if (typeof t == 'string'){
            t = '"' + t + '"'
          }

          return <code key={"code-"+i}>{t}</code>
        })
        .map((t, i) => [i? <span key={'separator' + i} className={styles.valueSeparator}>|</span>: null, t])
      }
    </div>
  }
}

const order = [
  'name',
  'value',
  'type',
  'default',
  'oneOf',
  'description'
]

export default class PropTable extends Component {

  render(){

    const props = this.props
    const className = join(styles.propTable, props.className, props.name? styles.withName: '')

    const children = React.Children.toArray(props.children)
                  .filter(c => c && c.props && c.props.isProp)

    const columns = Object.keys(children[0].props)
      .map(propName => aliases[propName] || propName)

    const displayColumns = order.filter(name => columns.indexOf(name) != -1)

    const rows = children.map(this.renderRow.bind(this, displayColumns))

    return <div {...props} name={null} className={className}>
      {props.name && this.renderName()}
      <table>
        <thead>
          <tr>
            {displayColumns.map(this.renderHeader)}
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  }

  renderName(){
    return <div className={styles.name}>"{this.props.name}"</div>
  }

  renderHeader(colName){
    return <th key={colName} className={styles[colName]}>{titles[colName]}</th>
  }

  renderRow(columns, child, index){
    const props = child.props

    return <tr key={index}>
      {columns.map(c => this.renderCell(c, props))}
    </tr>
  }

  renderCell(colName, props){
    const value = props[colName == 'description'? 'children': colName]
    const children = renderers[colName]?
                      renderers[colName](value):
                      value

    return <td key={colName} className={styles[colName]}>{children}</td>
  }
}

PropTable.defaultProps = {
}

PropTable.propTypes = {
}

class Prop extends Component {

}

Prop.defaultProps = {
  isProp: true
}

export { Prop }
