'use client'

import useStore from '@/useStore'
import dynamic from 'next/dynamic'

const Editor = dynamic(() => import('@monaco-editor/react'), { ssr: false })

export function Playground() {
    const { prompt, setPrompt } = useStore()

    return (
        <Editor
            height="50%"
            width="100%"
            defaultLanguage="javascript"
            value={prompt}
            onChange={(value) => value && setPrompt(value)}
        />
    )
}
