import React from 'react';
import './App.css';
import Counter from './Components/Counter';
import Todo from './Components/Todo';
import { useState } from 'react'

import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl'

//surge lib is added to project

//project billd

//this project added to deploy surge


//1. react intl package installed
//2. react intl imports added

const messages: any = {

  'tr-TR': {
    title: 'Merhaba dünya',
    description: '3 yeni mesajınız var'
  },
  'en-US': {
    title: 'Hello world',
    description: 'You have 3 unreading messages'
  }
}

function App() {
  const [lang, setLang] = useState('tr-TR')
  return (
    <IntlProvider messages={messages[lang]} locale="fr" defaultLocale="en">
      <div className="App">
        <FormattedMessage id='title' />
        <p>
          <FormattedMessage id='description' />
        </p>

        {/* <Counter /> */}

        <button onClick={() => setLang('tr-TR')}>TR</button>
        <button onClick={() => setLang('en-US')}>EN</button>

        {/* <Todo /> */}
      </div>
    </IntlProvider>
  );
}

export default App;
