import './App.css';
import React from 'react';
import ComponentX from './components/ComponentX';
import ComponentZ from './components/ComponentZ';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import CounterThree from './components/CounterThree';

export const userContext=React.createContext();
export const channelContext=React.createContext();

function App() {

  return (

    // /* Context */
    // <userContext.Provider value={'sunil pie'}>
    //   <channelContext.Provider value={'learn-react-series'}>
    //     {
    //       /* not recommended
    //       <ComponentX/>
    //       */

    //       /* recommended */
    //       <ComponentZ/>
    //     }
    //   </channelContext.Provider>

    // </userContext.Provider>

    /* useReducer */
    <>
    <CounterTwo/>
    <hr/>
    <CounterThree/>
    </>
   

)}

export default App;
