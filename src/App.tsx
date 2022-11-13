import React from 'react';
import './App.css';
import Counter from './Components/Counter';
import Todo from './Components/Todo';
import { useState, useEffect } from 'react'

import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl'

//surge lib is added to project

//project billd

//this project added to deploy surge


//1. react intl package installed
//2. react intl imports added

const messages: any = {

  'tr-TR': {
    title: 'Merhaba dünya',
    description: '{count} yeni mesajınız var'
  },
  'en-US': {
    title: 'Hello world',
    description: 'You have {count} unreading messages'
  }
}

function App() {

  const isLocale = localStorage.getItem("locale")

  const defaultLocale = isLocale ? isLocale : navigator.language;

  const [locale, setLocale] = useState(defaultLocale)



  useEffect(() => {
    localStorage.setItem('locale', locale)
  }, [locale])


  return (
    <IntlProvider messages={messages[locale]} locale={locale} >
      <div className="App">
        <FormattedMessage id='title' />
        <p>
          <FormattedMessage id='description' values={{count: 5}}/>
        </p>

        {/* <Counter /> */}

        <button onClick={() => setLocale('tr-TR')}>TR</button>
        <button onClick={() => setLocale('en-US')}>EN</button>

        {/* <Todo /> */}
      </div>
    </IntlProvider>
  );
}

export default App;
