import { React, Component } from 'Component'
import { findDOMNode } from 'react-dom'
import { connect } from 'react-redux'
import { Flex, Item } from 'Flex'
import Deck from 'Deck'
import DataGrid from 'DataGrid'

import Icon from 'Icon'

import Snippet from 'Snippet'
import Code from 'Code'

import Slide from 'Slide'

import RadioGroup from 'RadioGroup'

import gridData from './data'

import feedback from 'src/asset/image/feedback.png'
import sponsors from 'src/asset/image/sponsors.png'
import reduxLogo from 'src/asset/image/redux.png'
import reactLogo from 'src/asset/image/react.png'
import routerLogo from 'src/asset/image/router.png'
import zippyLogo from 'src/asset/image/zippy.png'
import cssModulesLogo from 'src/asset/image/cssmodules.png'

export default class extends Component {

  constructor(props){
    super(props)
    this.state = {
      columns: [{name: 'firstName'},{ name: 'lastName'}, { name: 'age', width: 100}]
    }
  }

  handleColumnOrderChange(index, dropIndex){
    const columns = this.state.columns.concat()
    const col = columns[index]
    columns.splice(index, 1) //delete from index, 1 item
    columns.splice(dropIndex, 0, col)
    this.setState({
      columns
    })
  }

  getSlideCount(){
    return findDOMNode(this).childNodes.length
  }

  render(){
    return <Deck {...this.props} >

      <Slide title={false} style={{background: 'white'}}>
        <img src={sponsors} />
      </Slide>

      <Slide title={false}>
        <pre lang="shell">
{`
$ whoami

{
  fullName: 'Radu Brehar',

  company: 'co-founder & CTO ZippyUI',

  'twitter & github': '@radubrehar',

  interest: 'UI components'
}
`}
            </pre>
      </Slide>

      <Slide title={false}>
        <div style={{textAlign: 'center', fontSize: '13vh'}}>
          Being productive with React<br />— after the hype
        </div>

        <img src={reactLogo} />
      </Slide>

      <Slide title="Why React?">

        <ul>
          <li>facebook.com</li>
          <li>messenger.com</li>
          <li>mobile.twitter.com</li>
          <li>netflix</li>
          <li>airbnb.com</li>
        </ul>

        ...

      </Slide>

      <Slide title="Why React?">

        <ul>
          <li>uber.com</li>
          <li>Firefox Dev Tools & debugger</li>
          <li>developer.apple.com/account <br />- certificate management</li>
          <li> ... lots more</li>
        </ul>

        <span>You're in good company</span>
      </Slide>

      <Slide title="Why React?">
        <ul>
          <li>it's out of the <i>hype</i> — already proven!</li>
          <li>stable: 0.14.8 -> 15.0.2 - major version</li>
          <li>pure & composable functions/components</li>
          <li>backed by FB</li>
          <li><span style={{textDecoration: 'line-through'}}>M</span><span style={{color: 'magenta'}}>V</span><span style={{textDecoration: 'line-through'}}>C</span> — just the VIEW layer</li>
        </ul>
      </Slide>

      <Slide title="Inspired a WHOLE community!">
        <ul>
          <li>Flux & Redux</li>
          <li>CSSModules vs inline-styling</li>
          <li>React-Router</li>
          <li>ReactHotLoader</li>
          <li>ReactNative — iOS, Android & MS Universal</li>
          <li>Other React alternatives: <br />Preact, VirtualDOM, Deku...</li>
        </ul>
      </Slide>

      <Slide title="Inspired a WHOLE community!">
        Reusable & shareable components

        <ul>
          <li>http://www.material-ui.com/</li>
          <li>https://reactcommunity.org/ - rackt</li>
          <li>http://zippyui.com/ - ZippyUI</li>
          <li>http://reapp.io/ - Reapp</li>
        </ul>

        & plenty of others<br />
      </Slide>

      <Slide title="React Components">
        <div style={{color: 'black', fontSize: '4vh'}}>
          <DataGrid
            rowHeight={50}
            idProperty="id"
            style={{minHeight: 300, maxHeight: '70vh', background: 'white', minWidth: 600}}
            columns={this.state.columns}
            onColumnOrderChange={this.handleColumnOrderChange}
            data={gridData}
          />

        </div>
      </Slide>
      <Slide title="React Components">
        <div style={{color: 'black', fontSize: '3vh'}}>
          <Snippet>{`
            import MonthView from 'react-date-picker'
            export default () => {
              return <MonthView
                defaultRange={[]}
                style={{background: 'white'}}
              />
            }
            `}
          </Snippet>
        </div>
      </Slide>



      <Slide title="Intro to React">
        <ul>
          <li>Minimal API footprint:</li>
          <ul>
            <li>ReactDOM.render - entry point</li>
            <li>components as classes or functions</li>
          </ul>

          <li>That's all to get you started!</li>
        </ul>
      </Slide>

      <Slide title="Intro to React" style={{fontSize: 30}}>
        <Snippet style={{color: 'black'}}>
          {`
            import React from 'react'
            import { render } from 'react-dom'

            function Hello(props){
              return <div>Hello {props.name}</div>
            }

            //render(<Hello name="js"/>, document.getElementById("content"))
            export default () => <Hello name="js"/>
          `}
          </Snippet>

          <span style={{fontSize:'8vh'}}><b>YOU</b> can be productive in React in {'<='} a week</span>
      </Slide>

      <Slide title="Intro to React">
      <span style={{textAlign: 'center'}}>
        There's a rich & growing community with solutions for basically any problem
      </span>

        <ul>
          <li>data-flow <img style={{maxHeight: 120, verticalAlign: 'middle'}} src={reduxLogo} /></li>
          <li>routing <img style={{maxHeight: 100, verticalAlign: 'middle'}} src={routerLogo} /></li>
          <li>UI components <img style={{maxHeight: 120, verticalAlign: 'middle'}} src={zippyLogo} /></li>
          <li>styling/theming  <img style={{background:'white', maxHeight: 110, verticalAlign: 'middle'}} src={cssModulesLogo} /></li>
          <li>SEO & server rendering</li>
          <li>performance</li>
        </ul>
      </Slide>

      <Slide title="Productivity killers">
        <ul>
        <li>manual page-reloads & losing app state</li>
        <li>late error detection at runtime</li>
        <li>leaky & inconsistent styling</li>
        <li>inheritance hierarchies</li>
        <li>template languages & context switching</li>
        </ul>
      </Slide>

      <Slide title="Productivity killers">
        <ul>
        <li>two-way data-bindings & data dependencies</li>
        <li>data changing over time - root of all UI bugs</li>
        <li>imperative UIs & app complexity</li>
        <li>
          testing UIs
          <RadioGroup defaultValue="" items={[
            'hard',
            'easy'
          ]} onChange={(value)=> {this.setState({testing: value=='hard'?'Correct!!!':'Are you sure???'}); }}/>
          {this.state.testing}
        </li>
        </ul>

        <div style={{fontSize:'20vh'}}>... ?</div>
      </Slide>

      <Slide title="React & eco-system solutions">
        <ul>
          <li>WebpackDevServer - reloads & serve from memory</li>
          <li>ReactHotLoader - for hot reload + keep UI state</li>
          <li>syntax errors - even unclosed tags - reported at build</li>
        </ul>
      </Slide>

      <Slide title="React & eco-system solutions">
        Styling:
        <ul>
          <li>CSSModules - local css
            <ul>
              <li>the same familiar css</li>
              <li>auto-generated classnames</li>
            </ul>
          </li>
          <li>
            inline-styling solutions
            <ul>
              <li>full power of JS</li>
              <li>dynamic styling</li>
            </ul>
          </li>
        </ul>
      </Slide>

      <Slide title="React & eco-system solutions">
        <ul >
          <li>React JSX: no new templating language to learn</li>
          <li>no context switching</li>
        </ul>
        <Snippet style={{fontSize: 30, color: 'black'}}>{`
          export default () => {
            const names = ['A','B','C'].map(name => <li>{name}!!</li>)
            return <ul>
              {names}
            </ul>
          }
        `}
        </Snippet>
      </Slide>

      <Slide title="React & eco-system solutions">
        <img style={{maxHeight: 250, verticalAlign:'middle'}} src={reduxLogo} />
        <ul>
          <li><b>1</b> way flow!!! & Apps are <Code style={{color:'black'}}>(state) => UI</Code></li>
          <ul>
            <li>app snapshots for free</li>
            <li>undo-redo for free</li>
            <li>timetravel</li>
          </ul>
          <li>immutable data libs are popular</li>
          <li>GraphQL as alternative to REST</li>
        </ul>
      </Slide>

      <Slide title="React & eco-system solutions">
        Imperative UIs & app complexity?
        <ul>
          <li>Try transitioning between states A,B,C,D in imperative UIs!</li>
          <li>React UIs are declarative</li>
          <li>RE-render anything - data is in sync!</li>
          <li>Just like web UIs 20 years ago!</li>
        </ul>
      </Slide>

      <Slide title={false} style={{fontSize: 25, color: 'black'}}>
        <Snippet codeStyle={{maxHeight: '50vh'}}>{`
          const Todos = React.createClass({
            getInitialState(){
              return { todos: [], text: ''}
            },
            updateText(event){
              this.setState({ text: event.target.value })
            },
            onKeyDown(event){
              if (event.key ==='Enter' && this.state.text){
                this.setState({
                  warn: false,
                  text: '',
                  todos: this.state.todos.concat(this.state.text)
                })
              }
            },
            render(){
              return <div>
                <h4>Adding "{this.state.text}"</h4>
                Text: <input
                  onKeyDown={this.onKeyDown}
                  value={this.state.text}
                  onChange={this.updateText}
                />
                <ul>
                  {this.state.todos.map(todo => <li>{todo}</li>)}
                </ul>
              </div>
            }
          })
          export default () => <Todos />
        `}
        </Snippet>
      </Slide>

      <Slide title="React & eco-system solutions">
        Testing UIs

        <ul>
          <li>Difficult enough</li>
          <li>in React probably easier than alternatives</li>
          <li>testing playgrounds - with all possible props/states of a component</li>
          <li>React TestUtils go a long way!</li>
        </ul>
      </Slide>

      <Slide title="Native Development">
        ReactNative
        <ul>
          <li>JS devs are now first-class citizens in mobile</li>
          <li>learn once, write anywhere</li>
          <li>Angular2 with ReactNative rendering</li>
          <li>Netflix uses React for TV UIs</li>
        </ul>
      </Slide>

      <Slide title="React rendering targets">
        <ul>
          <li>mobile/native for iOS, Android, MS Universal Platform, OSX</li>
          <li>the DOM with ReactDOM</li>
          <li>terminal/text UI - react-blessed</li>
          <li>canvas/webgl</li>
          <li>...the list is open!</li>
        </ul>
      </Slide>

      <Slide title="React revolution">
        <ul>
         <li>Ideas are not new - borrowed from game dev</li>
         <li>React made us rethink the way we build UIs</li>
         <li>2-10x productivity/cost effectiveness/quicker time-to-market</li>
        </ul>
      </Slide>

      <Slide title="Thanks!">
        Go build something amazing with React!
        <br />
        <Icon style={{fontSize:'10vh'}} name="favorite" />
        <br />
        Or say hello to <a style={{display: 'inline', color: 'white'}}href="mailto:hello@zippyui.com">hello@zippyui.com</a> & build open-source React components with us!
      </Slide>

      <Slide title="Thanks!">
        <span style={{fontSize:'30vh'}}>Q&A?</span>
      </Slide>

      <Slide title="Thanks!">
        Sources at <a href="http://github.com/zippyui/codecamp-productive-react" target="_blank" style={{color: 'white'}}>github.com/zippyui/codecamp-productive-react</a>
        <br />
        Presentation at <a href="http://codecamp.surge.sh" target="_blank" style={{color: 'white'}}>codecamp.surge.sh</a>
      </Slide>

      <Slide title={false} style={{background: 'white'}}>
        <a target="_blank" href="http://cluj.codecamp.ro/feedback.html"><img src={feedback} /></a>
      </Slide>

    </Deck>
  }
}
