import React from 'react'
import { render } from 'react-dom'
import PromisePoly from 'es6-promise'

PromisePoly.polyfill()

import { addLocaleData, IntlProvider } from 'react-intl'

import Root from 'src/routes'
import locales from 'src/locale'

const locale = process.env.LOCALE || 'ro-RO'

const localeData = {
  locale,
  parentLocale: locale.split('-')[0]
}

if (locale.indexOf('ro') != -1){
  localeData.pluralRuleFunction = (count) => {
    if (count > 1){
      return 'altele'
    }
  }
}

import moment from 'moment'

moment.locale(localeData.parentLocale)

if (!locales[locale]){
  console.error('Unsupported locale')
} else {
  addLocaleData(localeData)
}

console.log('locale ' + locale)

const messages = locales[locale]

render(
  <IntlProvider initialNow={Date.now()} locale={locale} messages={messages}>
    <Root />
  </IntlProvider>,
  document.getElementById('content')
)
