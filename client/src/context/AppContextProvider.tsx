import React, { useState } from 'react'
import { blogData } from './assets'
import AppContext, { type AppContextType } from './AppContext'

type Props = {
    children: React.ReactNode
}

const AppContextProvider: React.FC<Props> = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [blogContent, setBlogContent] = useState('');

    const value: AppContextType = {
        blogData,
        loading,
        setLoading,
        blogContent,
        setBlogContent
    }

    return (
        <AppContext.Provider 
            value={ value }
        >
            { children }
        </AppContext.Provider>
    )
}

export default AppContextProvider
