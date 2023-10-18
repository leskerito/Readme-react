import React from 'react'
import Topbar from './Topbar'
import { marked } from 'marked'
import DOMPurify from 'dompurify'

export default function TextWindow({name, text, handleChange}) {

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
        <div id={name} dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(marked.parse(text.replace('n')))} }>
        </div>
    </div>
      )
    }
  }