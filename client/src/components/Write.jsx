import React, { useState } from 'react';
import { Slate, Editable, withReact } from 'slate-react';
import { createEditor } from 'slate';

const Write = () => {
  const [initialValue, setInitialValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: 'I am an editor' }],
    },
  ]);

  const editor = withReact(createEditor());

  const handleChange = (newValue) => {
    setInitialValue(newValue);
  };

  return (
    <Slate editor={editor} initialValue={initialValue} onChange={handleChange}>
      <Editable />
    </Slate>
  );
};

export default Write;
