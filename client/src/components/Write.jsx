import React, { useState } from 'react';
import { Tiptap } from './TipTap';
import Details from './Details';

const Write = () => {
    const [description, setDescription] = useState(""); // State for the description

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-3/4 h-full   rounded-lg ">
                <Tiptap setDescription={setDescription} />
            </div>
        </div>
    );
};

export default Write;
