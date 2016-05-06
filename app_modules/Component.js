import React, { PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import Component from 'react-class'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import mixin from 'mixin'

Component.React = React

mixin(Component, PureRenderMixin)

export {
  React,
  Component,
  PropTypes,
  findDOMNode
}
