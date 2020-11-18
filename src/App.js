import Contact from "./components/Contact";
import React from "react";
import './App.css';

const name = "Ruby Sanchez";
const isOnline = true;
const avatar = (
  <img
    src="https://randomuser.me/api/portraits/women/88.jpg"
    alt="Ruby Harvey"
    className="avatar"
  />
);



function App() {
  return (
    <div className="App">
     
     <Contact avatar={avatar} name={name} online={isOnline} />
        
     
    </div>
  );
}

export default App;
