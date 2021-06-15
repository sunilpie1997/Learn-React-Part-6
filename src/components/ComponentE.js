import React,{useContext} from 'react';
import { userContext,channelContext} from '../App';

const ComponentE= () => {

    const user=useContext(userContext);
    const channel=useContext(channelContext);

    return (
  
        <div>user is {user} and channel is {channel}</div>
  
  )}
  
  export default ComponentE;