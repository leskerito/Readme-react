import Topbar from './Topbar'
import { marked } from 'marked'
import DOMPurify from 'dompurify'

export default function TextWindow({name, text, handleChange}) {


  marked.use({
    breaks: true,
    gfm: true
  })

    if(name === "editor"){ 
      return (<div className='editorWrap'>
          <Topbar name={name} />
          <textarea
          id={name} 
          value={text} 
          onChange={handleChange}>
          </textarea>
        </div>
      )
    } else {
      return (
          <div className='previewWrap'>
        <Topbar name={name} />
        <div id={name} dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(marked.parse(text))} }>
        </div>
    </div>
      )
    }
  }