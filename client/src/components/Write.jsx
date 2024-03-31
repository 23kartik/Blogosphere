import React,{useState} from 'react'
import { Tiptap } from './TipTap'

import Details from './Details';

const Write = () => {
    const [description, setDescription] = useState("");
  return (
    <>
     <Tiptap setDescription={setDescription} />
    {/* <Details description={description} /> */}
    </>
 
  )
}

export default Write