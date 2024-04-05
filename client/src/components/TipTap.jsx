import React, { useEffect, useState,useRef } from 'react';
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Document from '@tiptap/extension-document'
import Dropcursor from '@tiptap/extension-dropcursor'
import Image from '@tiptap/extension-image'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import  Youtube  from "@tiptap/extension-youtube"; 
import Typography from '@tiptap/extension-typography'
import FileHandler from '@tiptap-pro/extension-file-handler'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import html from 'highlight.js/lib/languages/xml'; // or whatever syntax definition files you need
import css from 'highlight.js/lib/languages/css';
import js from 'highlight.js/lib/languages/javascript';
import ts from 'highlight.js/lib/languages/typescript';
import markdown from 'highlight.js/lib/languages/markdown.js'
import cpp from 'highlight.js/lib/languages/cpp.js'
import python from 'highlight.js/lib/languages/python.js'
import java from 'highlight.js/lib/languages/java.js'




import {
  FaBold,
  FaCode,
  FaCodepen,
  FaCodiepie,
  FaHeading,
  FaItalic,
  FaListOl,
  FaListUl,
  FaQuoteLeft,
  FaRedo,
  FaStrikethrough,
  FaUnderline,
  FaUndo,
  FaVideo,
  FaYoutube,
} from "react-icons/fa";



import {common, createLowlight} from 'lowlight'

const lowlight = createLowlight({
  js,
  ts,
  markdown,
  cpp,
  python,
  java,
  html,
  css
});



const MenuBar = ({ editor }) => {
 
const widthRef = useRef(null)
const heightRef = useRef(null)

useEffect(() => {
    if (widthRef.current && heightRef.current) {
      widthRef.current.value = 640
      heightRef.current.value = 480
    }
  }, [widthRef.current, heightRef.current])

  if (!editor) {
    return null;
  }
const addYoutubeVideo = () => {
  const url = prompt('Enter YouTube URL')

  if (url) {
    let width = 640;
    let height = 480;

    if (widthRef.current && widthRef.current.value) {
      const parsedWidth = parseInt(widthRef.current.value, 10);
      if (!isNaN(parsedWidth)) {
        width = Math.max(320, parsedWidth);
      }
    }

    if (heightRef.current && heightRef.current.value) {
      const parsedHeight = parseInt(heightRef.current.value, 10);
      if (!isNaN(parsedHeight)) {
        height = Math.max(180, parsedHeight);
      }
    }

    editor.commands.setYoutubeVideo({
      src: url,
      width,
      height,
    });
  }
};

  return (
    <div className="menuBar">
      <div>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "is_active" : ""}
        >
          <FaBold />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "is_active" : ""}
        >
          <FaItalic />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={editor.isActive("underline") ? "is_active" : ""}
        >
          <FaUnderline />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive("strike") ? "is_active" : ""}
        >
          <FaStrikethrough />
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive("heading", { level: 2 }) ? "is_active" : ""
          }
        >
          <FaHeading />
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            editor.isActive("heading", { level: 3 }) ? "is_active" : ""
          }
        >
          <FaHeading className="heading3" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "is_active" : ""}
        >
          <FaListUl />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive("orderedList") ? "is_active" : ""}
        >
          <FaListOl />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive("blockquote") ? "is_active" : ""}
        >
          <FaQuoteLeft />
        </button>
         <button id="add" onClick={addYoutubeVideo}><FaYoutube/></button>
          <button id="addCodeBlock" onClick={() => editor.chain().focus().toggleCodeBlock().run()}><FaCode/></button>
      </div>
      <div>
        <button onClick={() => editor.chain().focus().undo().run()}>
          <FaUndo />
        </button>
        <button onClick={() => editor.chain().focus().redo().run()}>
          <FaRedo />
        </button>
      </div>
    </div>
  );
};

export const Tiptap = ({ setDescription }) => {
  const [title, setTitle] = useState("");
   const [editorContent, setEditorContent] = useState(""); 

  const editor = useEditor({
    extensions: [
      StarterKit, 
      Underline, 
      Document,
       Paragraph, 
       Text, 
       Image,
       Dropcursor,
        Youtube ,
        Typography,
         CodeBlockLowlight.configure({
                lowlight,
              }),
        FileHandler.configure({
                allowedMimeTypes: ['image/png', 'image/jpeg', 'image/gif', 'image/webp'],
                onDrop: (currentEditor, files, pos) => {
                  files.forEach(file => {
                    const fileReader = new FileReader()
        
                    fileReader.readAsDataURL(file)
                    fileReader.onload = () => {
                      currentEditor.chain().insertContentAt(pos, {
                        type: 'image',
                        attrs: {
                          src: fileReader.result,
                        },
                      }).focus().run()
                    }
                  })
                },
                onPaste: (currentEditor, files, htmlContent) => {
                  files.forEach(file => {
                    if (htmlContent) {
                      // if there is htmlContent, stop manual insertion & let other extensions handle insertion via inputRule
                      // you could extract the pasted file from this url string and upload it to a server for example
                      console.log(htmlContent) // eslint-disable-line no-console
                      return false
                    }
        
                    const fileReader = new FileReader()
        
                    fileReader.readAsDataURL(file)
                    fileReader.onload = () => {
                      currentEditor.chain().insertContentAt(currentEditor.state.selection.anchor, {
                        type: 'image',
                        attrs: {
                          src: fileReader.result,
                        },
                      }).focus().run()
                    }
                  })
                },
              }),
            ],
    content: editorContent,

    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setDescription(html);
    },
  });

  useEffect(() => {
    // Update editor content when title changes
    const content = `<p>${title}</p>`;
    setEditorContent(content);
  }, [title]);

  // useEffect(() => {
  //   const handlePaste = async (event) => {
  //     const items = (event.clipboardData || event.originalEvent.clipboardData).items;
  //     for (const item of items) {
  //       if (item.type.indexOf('image') !== -1) {
  //         const blob = item.getAsFile();
  //         const reader = new FileReader();
  //         reader.onload = () => {
  //           const imageDataUrl = reader.result;
  //           if (editor) {
  //             editor.chain().focus().setImage({ src: imageDataUrl }).run();
  //           }
  //         };
  //         reader.readAsDataURL(blob);
  //       }
  //     }
  //   };

  //   window.addEventListener('paste', handlePaste);

  //   return () => {
  //     window.removeEventListener('paste', handlePaste);
  //   };
  // }, [editor]);


const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      editor.commands.focus();
    }
  };
     
  return (
    <div className="textEditor">
      <MenuBar editor={editor} />
       <input 
                      type="text" 
                      value={title} 
                      onChange={(e) => setTitle(e.target.value)} 
                      placeholder="Title" 
                      className="block w-full p-8 pl-32 mt-4 mb-4 outline-none text-lg font-bold" 
                          style={{ fontFamily: 'Arial', fontSize: '46px', fontWeight: 'bold' }}
                          onKeyDown={handleKeyDown}
                  />
   
            <EditorContent className='pl-32' editor={editor} />
    </div>
  );
};
