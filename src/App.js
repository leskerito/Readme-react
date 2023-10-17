import { marked } from 'marked'
import { React, useState } from 'react';
import './App.css';

function App() {

  const [editorText, setEditorText] = useState('');
  const [previewText, setPreviewText] = useState(marked.parse(editorText));

  async function handleEditorChange(e){
    setEditorText(e.target.value);
    setPreviewText(marked.parse(editorText))
  }

  function TextWindow({name, text}) {

    const [isMaximised, setIsMaximised] = useState(false);

    function Topbar({name}){
      return (
        <div className="topbar-wrap">
          <h3>{name}</h3>
        </div>
      )
    }

    return (
      <div className='textwindow-wrap'>
        <Topbar name={name} />
        <textarea disabled={name === "preview"} id={name} onChange={handleEditorChange} value={text}></textarea>
      </div>
    )
  }


  return (
    <div className="App">
      <TextWindow name="editor" text="Hello World" />
      <TextWindow name="preview" text="#Hello World" />
    </div>
  );
}

export default App;
