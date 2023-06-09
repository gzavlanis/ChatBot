import './App.css';
import { useEffect, useState, useRef } from 'react';
import React from 'react';
import axios from 'axios';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Dna } from 'react-loader-spinner';
import UilAngleRightB from '@iconscout/react-unicons/icons/uil-angle-right-b';
import UilMicrophone from '@iconscout/react-unicons/icons/uil-microphone';
import Navbar from './Navbar';
import Bot from './bot.png';
import User from './user.png';

function App() {
  const [userInput, setUserInput] = useState('');
  const [recording, setRecording] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      msg: "Hello, how can I help you?",
      fromUser: false,
    }
  ])
  const bottomRef = useRef(null);
  
  const themes = {
    primaryColor: "#475569",
    secondaryColor: "#475569",
    primaryFontColor: "white",
    secondaryFontColor: "#2C3333",
    logoColor: "#E7F6F2",
    backgroundColor: "#152238"
  }

  const commands = [
    { command: 'clear', callback: ({ resetTranscript }) => resetTranscript() },
    { command: 'reset', callback: ({ resetTranscript }) => resetTranscript() }
  ]

  const {
    transcript, resetTranscript, browserSupportsSpeechRecognition
  } = useSpeechRecognition({ commands });

  useEffect(() => {
    if (userInput !== '') {
      setLoading(true);
      axios.get(`http://localhost:8000/api/response?message=${userInput}`).then((response) => {
        speechSynthesis.cancel();
        let utterance = new SpeechSynthesisUtterance(response.data);
        speechSynthesis.speak(utterance);
        setUserInput('');
        resetTranscript();
        setMessages([...messages, { msg: response.data, fromUser: false }]);
        setLoading(false);
      }, (error) => {
        console.log(error);
      });
    }
  }, [messages]);

  useEffect(() => {
    setUserInput(transcript);
  }, [transcript]);

  const sendMessage = () => {
    if (userInput !== '') {
      setMessages([...messages, { msg: userInput, fromUser: true }]);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  }

  if (!browserSupportsSpeechRecognition) {
    alert("Browser doesn't support speech recognition.");
  }

  const handleRecording = () => {
    if (recording) SpeechRecognition.stopListening();
    else {
      resetTranscript();
      setUserInput('');
      SpeechRecognition.startListening({ continuous: true });
    }
    setRecording(!recording);
  }

  return(
    <div className = 'min-h-screen bg-grey-100' style = {{ backgroundColor: themes.backgroundColor }}>
      <Navbar/>
      <div className = 'py-32'>
        <div className = 'max-w-2xl mx-auto space-y-12 grid grid-cols-1 overflow-y-auto scroll-smooth scrollbar-hide overflow-x-hidden' style = {{ maxHeight: '30rem' }}>
          {loading &&
            <div className = 'flex justify-center items-center'>
              <Dna visible = {true} height = '100' width = '100' ariaLabel = 'dna-loading' wrapperStyle = {{}} wrapperClass = 'dna-wrapper'/>
            </div>
          }
          <ul>
            {messages && messages.map((message, idx) => {
              return (
                <div key = {idx} className = {`mt-3 shadow-xl ${message.fromUser ? "place-self-end text-right" : "place-self-start text-left"}`}>
                  <div className = 'm-3 p-3 rounded-2xl' style = {{
                    backgroundColor: message.fromUser ? themes.primaryColor: 'white', color : message.fromUser ? themes.primaryFontColor : themes.secondaryFontColor,
                    borderTopLeftRadius: !message.fromUser && 0, borderTopRightRadius: message.fromUser && 0 }}>
                      {message.fromUser ? <img src = {User} alt = "user" width = "25" height = "25" style = {{ float: "left"}}/> : <img src = {Bot} alt = "bot" width = "25" height = "25" style = {{ float: "left" }}/>}
                      <div>
                        <p className = 'break-words text-md mx-2'>&nbsp;&nbsp;{message.fromUser ? message.msg : message.msg}</p>
                      </div>
                    </div>
                </div>
              )
            })}
          </ul>
          <div ref = {bottomRef}/>
        </div>
      </div>

      <div className = {`w-full fixed bottom-0`}>
        <div className = 'justify-end items-center bg-white rounded-xl flex mx-96 my-3 shadow-xl'>
          <input className = 'p-3 bg-white w-full rounded-l-md border-0 outline-none' placeholder = 'Hello!' type = 'text' id = 'message' 
            name = 'message' value = {userInput} onChange = {(e) => setUserInput(e.target.value)} onKeyDown = {handleKeyDown}/>
          <button className = 'bg-white px-4' disabled = {!browserSupportsSpeechRecognition} onClick = {handleRecording}>
            {recording ? <UilMicrophone size = "26" color = "green"/> : <UilMicrophone size = "26" color = "grey"/>}
          </button>
          <button style = {{ backgroundColor: themes.secondaryColor }} className = {`p-4 rounded-r-xl`} onClick = {sendMessage}>
            <UilAngleRightB size = "16" color = "white"/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
