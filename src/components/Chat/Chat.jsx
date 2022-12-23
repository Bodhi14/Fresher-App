import React from "react";
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import './chat.css';

const Chat = (props) => {
  return (
    <div className="chat">
     <Fab className="float-button" style={{ marginRight: 10 }} color="secondary" size="mid">
        <AddIcon />
     </Fab>
      
    </div>
  )
}


export default Chat;