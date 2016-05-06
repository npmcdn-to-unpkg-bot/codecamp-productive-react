import { React, Component } from 'Component'
import { findDOMNode } from 'react-dom'
import { connect } from 'react-redux'
import { Flex, Item } from 'Flex'
import Deck from 'Deck'

import Snippet from 'Snippet'
import Code from 'Snippet/Code'

import Slide from 'Slide'

import RadioGroup from 'RadioGroup'

import reduxLogo from 'src/asset/image/redux.png'
import routerLogo from 'src/asset/image/router.png'
import zippyLogo from 'src/asset/image/zippy.png'
import cssModulesLogo from 'src/asset/image/cssmodules.png'

export default class extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }

  getSlideCount(){
    return findDOMNode(this).childNodes.length
  }

  render(){
    return <Deck {...this.props} >

      <Slide title={false}>
        <div style={{textAlign: 'center', fontSize: '13vh'}}>
          Being productive with React<br />— after the hype
        </div>
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
      <span style={{textAlign: 'center', padding: '0px 20vw'}}>
        There's a rich & growing community with
        solutions for basically any problem
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

    </Deck>
  }
}
