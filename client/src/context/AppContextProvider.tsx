import React, { useState } from 'react'
import { blogData } from './assets'
import AppContext, { type AppContextType } from './AppContext'

type Props = {
    children: React.ReactNode
}

const AppContextProvider: React.FC<Props> = ({ children }) => {
    const [showNav, setShowNav] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);
    const [blogContent, setBlogContent] = useState<string>('');
    const [state, setState] = useState<string>('login');
    const [loggedIn, setLoggedIn] = useState<boolean>(true);

    const value: AppContextType = {
        blogData,
        loading,
        setLoading,
        blogContent,
        setBlogContent,
        state,
        setState,
        loggedIn,
        setLoggedIn,
        showNav,
        setShowNav
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
