import type { JSX } from "react";
import { useCurrentEditor } from '@tiptap/react';
import {
    FaBold,
    FaItalic,
    FaUnderline,
    FaHighlighter,
    FaStrikethrough,
    FaCodeBranch,
    FaHeading,
    FaListUl,
    FaListOl,
    FaCode,
    FaQuoteLeft,
    FaUndo,
    FaRedo

} from 'react-icons/fa';
import { MdHorizontalRule } from "react-icons/md";
import { VscNewline } from "react-icons/vsc";

const TiptapToolBar = (): JSX.Element | null => {
    const { editor } = useCurrentEditor()

    if (!editor) {
        return null
    }

    return (
        <div className="control-group w-full">
            <div className="button-group w-full flex justify-center gap-5 border-b-2 border-[#7e8182] py-4 px-2">
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    disabled={
                        !editor.can()
                        .chain()
                        .focus()
                        .toggleBold()
                        .run()
                    }
                    className={editor.isActive('bold') ? 'is-active' : ''}
                >
                    <FaBold />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    disabled={
                        !editor.can()
                        .chain()
                        .focus()
                        .toggleItalic()
                        .run()
                    }
                    className={editor.isActive('italic') ? 'is-active' : ''}
                >
                    <FaItalic />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleUnderline().run()}
                    disabled={
                        !editor.can()
                        .chain()
                        .focus()
                        .toggleUnderline()
                        .run()
                    }
                    className={editor.isActive('underline') ? 'is-active' : ''}
                >
                    <FaUnderline />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHighlight().run()}
                    disabled={
                        !editor.can()
                        .chain()
                        .focus()
                        .toggleHighlight()
                        .run()
                    }
                    className={editor.isActive('highlight') ? 'is-active' : ''}
                >
                    <FaHighlighter />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    disabled={
                        !editor.can()
                        .chain()
                        .focus()
                        .toggleStrike()
                        .run()
                    }
                    className={editor.isActive('strike') ? 'is-active' : ''}
                >
                    <FaStrikethrough />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleCode().run()}
                    disabled={
                        !editor.can()
                        .chain()
                        .focus()
                        .toggleCode()
                        .run()
                    }
                    className={editor.isActive('code') ? 'is-active' : ''}
                >
                    <FaCodeBranch />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
                >
                    <FaHeading />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={editor.isActive('bulletList') ? 'is-active' : ''}
                >
                    <FaListUl />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={editor.isActive('orderedList') ? 'is-active' : ''}
                >
                    <FaListOl />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                    className={editor.isActive('codeBlock') ? 'is-active' : ''}
                >
                    <FaCode />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    className={editor.isActive('blockquote') ? 'is-active' : ''}
                >
                    <FaQuoteLeft />
                </button>
                <button 
                    onClick={() => editor.chain().focus().setHorizontalRule().run()}
                >
                    <MdHorizontalRule />
                </button>
                <button 
                    onClick={() => editor.chain().focus().setHardBreak().run()}
                >
                    <VscNewline />
                </button>
                <button
                    onClick={() => editor.chain().focus().undo().run()}
                    disabled={
                        !editor.can()
                        .chain()
                        .focus()
                        .undo()
                        .run()
                    }
                >
                    <FaUndo />
                </button>
                <button
                    onClick={() => editor.chain().focus().redo().run()}
                    disabled={
                        !editor.can()
                        .chain()
                        .focus()
                        .redo()
                        .run()
                    }
                >
                    <FaRedo />
                </button>
                {/* <button
                    onClick={() => editor.chain().focus().setColor('#958DF1').run()}
                    className={editor.isActive('textStyle', { color: '#958DF1' }) ? 'is-active' : ''}
                >
                    Purple
                </button> */}
            </div>
        </div>
    )
}

export default TiptapToolBar;