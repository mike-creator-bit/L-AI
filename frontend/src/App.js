import React, { useState } from 'react';
import './styles/App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    const res = await fetch('http://localhost:5000/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input })
    });
    const data = await res.json();
    setMessages([...messages, { sender: 'You', text: input }, { sender: 'L AI', text: data.reply }]);
    setInput('');
  };

  return (
    <div className='App'>
      <h1>L AI Chat</h1>
      <div className='chat-box'>
        {messages.map((msg, i) => (
          <div key={i}><strong>{msg.sender}:</strong> {msg.text}</div>
        ))}
      </div>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder='Say something...' />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;