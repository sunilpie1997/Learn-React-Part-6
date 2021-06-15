import './App.css';
import React from 'react';
import ComponentC from './components/ComponentC';
import ComponentE from './components/ComponentE';

export const userContext=React.createContext();
export const channelContext=React.createContext();

function App() {
  return (

    /* Context */
    <userContext.Provider value={'sunil pie'}>
      <channelContext.Provider value={'learn-react-series'}>
        {
          /* not recommended
          <ComponentC/>
          */

          /* recommended */
          <ComponentE/>
        }
      </channelContext.Provider>

    </userContext.Provider>
   

)}

export default App;
