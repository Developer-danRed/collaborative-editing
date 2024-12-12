import React, { useState, useEffect } from 'react';
import socket from '../services/socket';
import '../DocumentEditor.css';

const DocumentEditor = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    // Listen for real-time updates
    socket.on('document-updated', (data) => setContent(data));

    return () => {
      socket.off('document-updated');
    };
  }, []);

  const handleChange = (e) => {
    setContent(e.target.value);
    socket.emit('update-document', e.target.value);
  };

  const handleSave = () => {
    console.log('Document saved:', content);
  };

  return (
    <div className="document-editor-container">
      <div className="document-header">
        <h2>Collaborative Document Editor</h2>
        <button className="save-btn" onClick={handleSave()}>
          Save
        </button>
      </div>
      <textarea
        className="document-textarea"
        value={content}
        onChange={handleChange()}
        placeholder="Start typing your document here..."
      ></textarea>
    </div>
  );
};

export default DocumentEditor;
