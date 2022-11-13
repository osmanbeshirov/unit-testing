import React from 'react';
import './App.css';
import Counter from './Components/Counter';
import Todo from './Components/Todo';

import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl'

//surge lib is added to project

//project billd

//this project added to deploy surge


//1. react intl package installed
//2. react intl imports added

const messages = {
  title: 'Merhaba dünya'
}

function App() {
  return (
    <IntlProvider messages={messages} locale="fr" defaultLocale="en">
      <div className="App">
       <FormattedMessage id='title'/>
        {/* <Counter /> */}

        <Todo />
      </div>
    </IntlProvider>
  );
}

export default App;
