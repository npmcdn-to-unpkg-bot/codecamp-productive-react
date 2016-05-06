
# Being productive with React - after the hype


## Why considering React?

 * facebook.com
 * messenger.com
 * mobile.twitter.com
 * developer.apple.com/account - certificates management
 * netflix
 * airbnb.com
 * uber.com
 * Firefox Dev tools & debugger

and the list of big names can go on.

You are in good company!

## Why considering React?

 * it's out of the hype - already a proven technology
 * stable: 0.14.8 -> 15.0.0
 * promotes a functional paradigm & good coding standards - function/component composition, pure functions
 * backed by the bright engineers at FB
 * enables you to be a mobile dev - learn once, write anywhere - ReactNative
 * not bloated - no MVC, no two-way binding - just the VIEW layer
 * inspired a whole community
  - Flux & Redux
  - CSSModules
  - InlineStyles - have all the power of JS for styling
  - React-Router
  - ReactHotLoader
  - ReactNative - iOS Android MS Universal
  - ClojureScript OM
  - popularized one-way databinding for UIs - Angular/Ember borrowed good ideas from this
  - React-like libraries: Preact, VirtualDOM, Deku
  - React DevTools
 * enables componentization & easy sharing of components
 * it's more than a library - a way of thinking about UIs

## Minimal API

import React from 'react'
import ReactDOM from 'react-dom'

function App(props){
  return <div>
    Hello {props.name}!
  </div>
}

ReactDOM.render(<App name="JS" />, document.getElementById('content'))

You can be productive with React in less than a week.

## Rich community

- with a lot of ready made components

## Productivity killers

 * manual page-reloads
 * losing app state
 * late error detection at runtime
 * leaky & inconsistent styling
 * inheritance hierarchies for components
 * template languages & context switching
 * two-way data-bindings & data dependencies
 * data changing over time - the root of all UI bugs
 * imperative UIs & app complexity
 * testing UIs is hard

## React & ecosystem solutions

 * page-reloads - webpack with change detection & page reload. WebpackDevServer serves the resulting bundle from memory
 * losing app state - even with page reloads, you lose the app state.
 Solved by react-hot-loader - only re-renders the component that has changed.
 * most of the errors are reported at compile/build time by tooling - forgotten closing tags/parens/etc
 * leaky & inconsistent styling - css is global. The React community has 2 alternatives:
  1. inline styling - have the full power of js - access to sizes/variables/etc
  2. CSS Modules - generate unique class names, guaranteed not to leak your styles down the hierarchy
 React promotes componentization - style it once and use it anywhere

 * inheritance hierarchies - React promotes the GOF principle "favor composition over inheritance". You never extend other components - you just compose them like legos

 * template languages & context switching

 React is JS - you have the full power of the language at your fingertips. No need to learn yet another language/abstraction. No need to switch context between your js & your view code. It's all there and it composes nicely.

 Map an array of names to a list of <li> tags? names.map(name => <li>{name}</li>)

 * two-way databinding & data dependencies
 * changing data

 React has adopted a one-way data-flow via Flux & Redux.

 Redux is a very simple library - a way of thinking about data - you never mutate existing data - you just render a modified clone. - Immutable data structures have emerged - ImmutableJS/Mori/etc
 User actions are handled by pure functions. Based on the action and the prev app state, they return a new app state.

 React apps are a function of the app state. INPUT: app state. OUTPUT: pixels.
 This makes it possible to create app snapshots/recreate app state/undo-redo for free/timetravel debugger/etc

 Additionally, immutable data structures are a nice way to have a performance boost for your React app.

 * imperative UIs & app complexity

 React simplifies UI development a lot. no longer you need to write imperative code to handle state transition.

 Transitioning from A to B in imperative code is easy. But try adding another 3 or 4 states and implement transition between all of them. That's a nightmare.

 Instead, declarative code is a piece of cake, each state is rendered when appropriate. No need to manage state transition.

 RE-render anything!!!
 Web UIs were easy 15 years ago. Data was always up-to-date from server. Then around 2005 AJAX came in and suddenly keeping UI in sync was a big problem.
 React promotes the simplified model that we had 15 years ago. On every data change, conceptually it re-renders the whole app so it always shows live data.

 * testing UIs

 - is hard
 - in React, it's probably easier than most other libraries/frameworks
 - testing playgrounds, with all possible props/states of a component
 - React TestUtils go a long way


## React Native

 * enables JS devs to be first-class citizens in mobile app development
 * Angular 2 with ReactNative rendering

## React as a rendering target

 * for mobile/native via ReactNative & angular2 & ReactNative for OSX
 * for the DOM with ReactDOM
 * for blessed - terminal/text UI
 * for canvas/webgl

React took inspiration from video games development = repaint the whole scene on every refresh.

React created a revolution in web UIs & UIs in general. It's not new concepts, but just old concepts brought into the limelight in a very well articulated way.

