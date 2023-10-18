import TextWindow from './TextWindow';
import defaultText from './defaultText';
import { React, useState } from 'react';
import './App.css';


function App() {
  const [editorText, setEditorText] = useState(defaultText);
  const [previewText, setPreviewText] = useState(editorText);
  const [whoIsMaximised, setWhoIsMaximised] = useState(-1);
  const [whoIsVisible, setWhoIsVisible] = useState([true, true]);

  function handleEditorChange(event){
    setEditorText(event.target.value)
    setPreviewText(event.target.value)
  }

  function handleVisible(index){
    
  }

  function handleMaximised(index){
    switch (index){
      case 0:
        setWhoIsMaximised(0)
        break;
      case 1:
        setWhoIsMaximised(1)
        break;
      default:
        setWhoIsMaximised(-1)
        break;
    }
  }

  return (
    <div className="App">
      <TextWindow isVisible={true} isMaximised={false} handleVisible={handleVisible} handleMaximised={handleMaximised} name="editor" text={editorText} handleChange={handleEditorChange} />
      <TextWindow isVisible={true} isMaximised={false} handleVisible={handleVisible} handleMaximised={handleMaximised} text={previewText} name="preview" />
    </div>
  );
}

export default App;