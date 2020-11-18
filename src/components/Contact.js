import React from "react";
import "./Contact.css";

function Contact(props) {
  return (
    
    <div class="container">
     
        <div className="Contact">
        <p className="avatar">{props.avatar}</p>
        <div>
         <h3 className="name">{props.name}</h3>
         <p className="status">{props.online
             ? <div><div className='status-online'></div>Online</div>
             : <div><div className='status-offline'></div>Offline</div>}</p>
        </div>


        
        </div>
        <br/>

  
   </div>
  );
}

export default Contact;