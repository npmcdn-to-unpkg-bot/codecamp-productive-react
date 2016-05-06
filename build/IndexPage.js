'use strict';

import assign from 'object-assign';
import React, { Component } from 'react';
import ReactDOM from 'react-dom/server';

var env = require('./env');

// import { render } from '../index'


var gaCode = `
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-73910151-1', 'auto');
  ga('send', 'pageview');
`

const GA_SCRIPT = <script type="text/javascript" dangerouslySetInnerHTML={{__html: gaCode}} />

function toQuery(str, query){
  return str + '?' + query;
}

var IndexPage = class extends Component {

  toQuery(str){
    return str + '?' + this.props.query;
  }

  prefix(str){
    return (this.props.documentRoot || './') + str;
  }

  render(){
    var props = this.props;

    var cssFile = this.prefix(this.toQuery('index.css'));
    var jsFile  = this.prefix(this.toQuery('main.js'));
    var reactFile = this.prefix('react.min.js');
    var reactDOMFile = this.prefix('react-dom.min.js');

    return <html>
      <head>
        <title>{props.title}</title>

        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>
        <meta name="HandheldFriendly" content="True"/>
        <meta name="MobileOptimized" content="320"/>
        <meta http-equiv="cleartype" content="on"/>

        <link rel="stylesheet" type="text/css" href={cssFile} />
        <script type="text/javascript" src={reactFile}></script>
        <script type="text/javascript" src={reactDOMFile}></script>
      </head>
    <body>

    <div id="content">
    </div>

    <script type="text/javascript" src={jsFile}></script>
    {GA_SCRIPT}
    </body>
    </html>;
  }
};


IndexPage.defaultProps = assign({
  query: Date.now(),
  documentRoot: env.PUBLIC_PATH,
  title: 'Productive React'
});

IndexPage.getDoctype = function() {
  return '<!DOCTYPE html>';
};

IndexPage.renderToString = function(props) {
  return IndexPage.getDoctype() +
    React.renderToString(<IndexPage {...props} />);
};

IndexPage.renderToStaticMarkup = function(props) {
  return IndexPage.getDoctype() +
    ReactDOM.renderToStaticMarkup(<IndexPage {...props} />);
};

module.exports = IndexPage;
