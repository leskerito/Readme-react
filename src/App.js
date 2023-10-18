import TextWindow from './TextWindow';
import defaultText from './defaultText';
import { React, useState } from 'react';
import './App.css';

function App() {
  const [editorText, setEditorText] = useState(defaultText);
  const [previewText, setPreviewText] = useState(editorText);

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

export default App;