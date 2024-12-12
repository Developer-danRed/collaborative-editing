import React from 'react';
import DocumentEditor from './components/DocumentEditor';
import Chat from './components/Chat';
import './App.css';

function App() {
  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      <div style={{ flex: 3 }}>
        <h2>Document Editor</h2>
        <DocumentEditor />
      </div>
      <div style={{ flex: 1 }}>
        <h2>Chat</h2>
        <Chat />
      </div>
    </div>
  );
}

export default App;
