import Markdown from 'react-markdown';
import { React, useState } from 'react';
import './App.css';

function App() {

  const [editorText, setEditorText] = useState('');

  function TextWindow({name, text}) {

    // const [isMaximised, setIsMaximised] = useState(false);

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
        <textarea 
          disabled={name === "preview"} 
          id={name} 
          onChange={(e) => {
            setEditorText(e.target.value);
            
          }} 
          value={name === 'preview' ? "" : text}>
          {name === "preview" && <Markdown>{editorText}</Markdown>}
        </textarea>
      </div>
    )
  }


  return (
    <div className="App">
      <TextWindow name="editor" text={editorText} />
      <TextWindow name="preview" text="" />
    </div>
  );
}

export default App;
