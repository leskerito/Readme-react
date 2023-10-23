import TextWindow from './TextWindow';
import defaultText from './defaultText';
import { React, useState } from 'react';
import './App.css';


function App() {
  const [editorText, setEditorText] = useState(defaultText);
  const [previewText, setPreviewText] = useState(editorText);
  const [whoIsMaximized, setWhoIsMaximized] = useState(-1);
  const [whoIsVisible, setWhoIsVisible] = useState([true, true]);

  function handleEditorChange(event){
    setEditorText(event.target.value)
    setPreviewText(event.target.value)
  }
  
  function handleMaximized(index){
    if(whoIsMaximized !== -1){
      setWhoIsMaximized(-1);
      setWhoIsVisible([true, true]);
      console.log(whoIsMaximized, index)
      return;
    }
    setWhoIsMaximized(index);
    console.log(whoIsMaximized, index)
    return
  }

  return (
    <div className="App" id='App'>
      {whoIsVisible[0] && <TextWindow isvisible={whoIsVisible[0]} ismaximized={whoIsMaximized === 0} handleMaximized={() => handleMaximized(0)} name={whoIsMaximized === 0 ? "editorMax" : "editor"} text={editorText} handleChange={handleEditorChange} /> }
      {whoIsVisible[1] && <TextWindow isvisible={whoIsVisible[1]} ismaximized={whoIsMaximized === 1} handleMaximized={() => handleMaximized(1)} text={previewText} name={whoIsMaximized === 1 ? "previewMax" : "preview"} /> }
    </div>
  );
}

export default App;