import { createContext } from 'react'

export type socialsType = {
    twitter: string | null,
    github: string | null,
    linkedin: string | null
}

export type authorType = {
    name: string,
    avatar: string | undefined,
    bio: string | undefined,
    social: socialsType
}

export type blogType = {
    id: number,
    title: string,
    slug: string,
    author: authorType,
    publishedAt: string,
    updatedAt: string | null,
    category: string,
    tags: string[],
    readTime: string,
    featured: boolean,
    thumbnail: string,
    excerpt: string,
    content: string,
    likes: number | null,
    views: number | null,
    comments: number | null,
    status: string
}

export type AppContextType = {
    blogData: blogType[],
    loading: boolean,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    blogContent: string,
    setBlogContent: React.Dispatch<React.SetStateAction<string>>,
    state: string,
    setState: React.Dispatch<React.SetStateAction<string>>
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export default AppContext
