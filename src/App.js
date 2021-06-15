import './App.css';
import React,{useReducer} from 'react';
import ComponentX from './components/ComponentX';
import ComponentZ from './components/ComponentZ';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import CounterThree from './components/CounterThree';

import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';


export const userContext=React.createContext();
export const channelContext=React.createContext();

/* useReducer with useContext */
const initialState = 0
const reducer = (state, action) => {
	switch (action) {
		case 'increment':
			return state + 1
		case 'decrement':
			return state - 1
		case 'reset':
			return initialState
		default:
			return state
	}
}

export const CountContext = React.createContext()


function App() {

  const [count, dispatch] = useReducer(reducer, initialState)

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

    /*************************************************************/

    /* useReducer 
    <>
    <CounterTwo/>
    <hr/>
    <CounterThree/>
    </>
    */

    /************************************************************/
    
    /* useReducer with useContext - global state management */
		
    <CountContext.Provider
			value={{ countState: count, countDispatch: dispatch }}
		>
			<div>
				
				count - {count}
			  <ComponentA />
				<ComponentB />
				<ComponentC />
			</div>
		</CountContext.Provider>
	)}

export default App;
