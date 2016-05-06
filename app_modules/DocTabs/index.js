import { React, Component } from 'Component'
import TabPanel, { TabBody } from 'TabPanel'
import { browserHistory } from 'react-router'
import assign from 'object-assign'

import { Flex, Item } from 'react-flex'

import join from 'join'

import styles from './index.css'

class Docs extends Component {
  render(){
    return <div {...this.props} />
  }
}

Docs.defaultProps = {
  tabTitle: 'API Documentation',
  link: 'api'
}

class Examples extends Component {
  render(){
    return <Flex flex column wrap={false} {...this.props} />
  }
}

Examples.defaultProps = {
  tabTitle: 'Examples',
  link: 'examples'
}

class Videos extends Component {
  render(){
    return <div {...this.props} />
  }
}

Videos.defaultProps = {
  tabTitle: 'Videos',
  link: 'videos'
}

export {
  Docs,
  Examples,
  Videos
}

export default class DocTabs extends Component{

  render(){

    const className = join(styles.docTabs, this.props.className)
    const tab = this.props.params.tab

    const children = React.Children.toArray(this.props.children)
    const active = children.reduce((acc, child, index) => {
      return assign(acc, {
        [child.props.link]: index
      })
    }, {})

    const activeIndex = active[tab] || 0

    return <TabPanel
      flex
      {...this.props}
      activeIndex={activeIndex}
      className={className}
      onActivate={this.onActivate}
    >
      <TabBody column flex renderContent={this.renderContent} children={children} />
    </TabPanel>
  }

  renderContent(content){
    return <Flex flex column wrap={false} alignItems="stretch" className={styles.content}>
      {content}
    </Flex>
  }

  onActivate(index){
    const link = this.props.children[index].props.link
    const path = this.props.location.pathname.split('/').filter(x => !!x)

    if (this.props.params.tab){
      path[path.length - 1] = link
    } else {
      path.push(link)
    }

    browserHistory.push('/' + path.join('/'))
  }
}
