import Topbar from './Topbar'
import { marked } from 'marked'
import DOMPurify from 'dompurify'

export default function TextWindow({name, text, handleChange, handleMaximised, handleVisible, isVisible, isMaximised}) {

  const markedText = {
    __html: DOMPurify.sanitize(marked.parse(text))
  };

  const ind = (name === "editor" ? 0 : 1)

  marked.use({
    breaks: true,
    gfm: true
  })

  return (
    <label htmlFor={name} hidden={isVisible}className={name + 'Wrap'}>
      <Topbar name={name} index={ind} handleMaximised={handleMaximised} handleVisible={handleVisible}/>
      {name === "editor" && <textarea id="editor" value={text} onChange={handleChange}/>}
      {name === "preview" && <div id={name} dangerouslySetInnerHTML={markedText}></div>}
      {console.log(document.getElementsByClassName(name + 'Wrap'))}
    </label>
  )
}