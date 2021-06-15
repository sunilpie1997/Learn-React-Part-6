import React from 'react';
import { userContext,channelContext} from '../App';

const ComponentX= () => {

    return (
  
    <div>
      <userContext.Consumer>
          {
              user=>{
                  return (
                      <channelContext.Consumer>
                          {
                              channel=>{
                                  return (
                                      <div>user is {user} and channel is {channel}</div>
                                  )
                              }
                          }
                      </channelContext.Consumer>
                  )
              } 
          }
  
      </userContext.Consumer>
    </div>
  
  )}
  
  export default ComponentX;