import { marked } from 'marked'
import defaultText from './defaultText';
import { React, useState } from 'react';
import './App.css';

function App() {
  const [editorText, setEditorText] = useState(defaultText);
  const [previewText, setPreviewText] = useState("");

  function handleEditorChange(event){
    setEditorText(event.target.value)
    setPreviewText(event.target.value)
  }

    // const [isMaximised, setIsMaximised] = useState(false);

  return (
    <div className="App">
      <TextWindow name="editor" text={editorText} handleChange={handleEditorChange} />
      <TextWindow text={previewText} name="preview" />
    </div>
  );
}

function TextWindow({name, text, handleChange}) {
  if(name === "editor"){ 
    return (<div className='editorWrap'>
        <Topbar name={name} />
        <textarea 
        value={text} 
        onChange={handleChange}>
        </textarea>
      </div>
    )
  } else {
    return (
        <div className='previewWrap'>
      <Topbar name={name} />
      marked.parse(text)
  </div>
    )
  }
}

function Topbar ({name}){
  return (
    <div className='topbar-wrap'>
      <h3>
        {name}
      </h3>
    </div>
  )
}


export default App;