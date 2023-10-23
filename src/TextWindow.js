import Topbar from './Topbar'
import { marked } from 'marked'
import DOMPurify from 'dompurify'

export default function TextWindow({name, text, handleChange, handleMaximized, handleVisible, isvisible, isMaximized}) {

  //Adding the parsed text in a sanitized variable
  const markedText = {
    __html: DOMPurify.sanitize(marked.parse(text))
  };

  marked.use({
    breaks: true,
    gfm: true
  })

  return (
    <label htmlFor={name} hidden={isvisible} ismaximized={isMaximized} className={name + 'Wrap'}>
      <Topbar name={name} ismaximized={isMaximized} handleMaximized={handleMaximized} handleVisible={handleVisible}/>
      {name === "editor" && <textarea id="editor" value={text} onChange={handleChange}/>}
      {name === "editorMax" && <textarea id="editor" className='editorMax' value={text} onChange={handleChange}/>}
      {name === "preview" && <div id={name} dangerouslySetInnerHTML={markedText}></div>}
      {name === "previewMax" && <div id={name} className='previewMax' dangerouslySetInnerHTML={markedText}></div>}
    </label>
  )
}