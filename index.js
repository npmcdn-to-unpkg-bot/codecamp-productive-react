import React from 'react'
import { render as ReactDOMRender } from 'react-dom'
import PromisePoly from 'es6-promise'
import assign from 'object-assign'

Object.assign = Object.assign || assign

PromisePoly.polyfill()

import Root from 'src'

// const locale = process.env.LOCALE || 'en-US'

// const localeData = {
//   locale,
//   parentLocale: locale.split('-')[0]
// }

// if (locale.indexOf('ro') != -1){
//   localeData.pluralRuleFunction = (count) => {
//     if (count > 1){
//       return 'altele'
//     }
//   }
// }

// import moment from 'moment'

// moment.locale(localeData.parentLocale)

// if (!locales[locale]){
//   console.error('Unsupported locale')
// } else {
//   addLocaleData(localeData)
// }

// const messages = locales[locale]

export const render = () => {
  return <Root />
}

ReactDOMRender(
  render(),
  document.getElementById('content')
)
