import React from 'react';
import DialogItem from './Items/DialogItem';
import s from './Dialogs.module.css';
import Message from './Items/Message';


const Dialogs = (props) => {

    let dialogElements = 
    props.dData.map ( d => <DialogItem name ={d.name} id={d.id} /> );

    let messageElements = 
    props.mData.map ( m => <Message message ={m.message} id={m.id} /> );

    return <div className={s.inner}>
      <div>
        {dialogElements}
      </div>
      <div>
      {messageElements}
      </div>
    </div>
}

export default Dialogs;