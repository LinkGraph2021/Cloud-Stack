'use client'
// components/QuillEditor.js
import React, { useEffect, useRef } from 'react';
import Quill from 'quill';

const QuillEditor = ({ defaultValue, onChange, idM, placeH }: any) => {
    const editorRef = useRef<Quill | null>(null); // Ref for Quill instance
    const containerRef = useRef<HTMLDivElement>(null); // Ref for container element

    if (typeof document !== 'undefined') {
        useEffect(() => {
            if (containerRef.current && !editorRef.current) {
                const options = {
                    placeholder: placeH,
                    theme: 'snow'
                };
                editorRef.current = new Quill(containerRef.current, options);

                editorRef.current.on('text-change', () => {
                    onChange && onChange(editorRef.current?.root.innerHTML); // Use optional chaining
                });

                if (placeH) {
                    editorRef.current.root.innerHTML = placeH;
                }
            }
        }, []);
    }

    return (
        <div>
            <div ref={containerRef} id={`${idM}`}></div>
        </div>
    );
};

export default QuillEditor;
