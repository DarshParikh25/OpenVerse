import { useContext, type JSX } from 'react'
import { Color } from '@tiptap/extension-color'
import { EditorProvider } from '@tiptap/react'
import { type AnyExtension } from '@tiptap/core'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Highlight from '@tiptap/extension-highlight'
import Placeholder from '@tiptap/extension-placeholder'

import AppContext, { type AppContextType } from '../context/AppContext'
import TiptapToolBar from './TiptapToolBar'

const TiptapEditor = (): JSX.Element => {
    const context: AppContextType | undefined = useContext(AppContext);

    if(!context) {
        return <>Loading...</>
    }

    const { setBlogContent } = context;
    
    const extensions: AnyExtension[] = [
        Color.configure({ types: [TextStyle.name, ListItem.name] }),
        TextStyle,
        StarterKit.configure({
            bulletList: {
                keepMarks: true,
                keepAttributes: false, 
            },
            orderedList: {
                keepMarks: true,
                keepAttributes: false, 
            },
        }),
        Underline,
        Highlight.configure({
            multicolor: true // (default: false) — allow multiple highlight colors
        }),
        Placeholder.configure({
            placeholder: 'Write your blog here...',
            showOnlyWhenEditable: true,  // optional
            showOnlyCurrent: false,      // optional
        })
    ]

    return (
        <EditorProvider 
            slotBefore={<TiptapToolBar />} 
            extensions={extensions} 
            content={{
                type: 'doc',
                content: [{ type: 'paragraph' }]
            }} 
            onUpdate={({ editor }) => {
                const html = editor.getHTML();
                setBlogContent(html);
            }} 
            editorProps={{
                attributes: {
                    class: 'outline-none px-4 py-2 h-[420px] text-black overflow-y-scroll',
                    spellCheck: 'true',
                },
            }}
            editorContainerProps={{
                className: 'text-editor h-[420px] mt-5'
            }}
            autofocus
        >
        </EditorProvider>
    )
}

export default TiptapEditor