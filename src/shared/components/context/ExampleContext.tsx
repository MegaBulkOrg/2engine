/*

import React, { ReactNode } from "react";
import { usePostsData } from "../../hooks/usePostsData";

export interface IPostsContextData {
    id: string
	author: string
	title: string
    postContent: string
	rating: number
	commentsCount: number
	avatar: string
	previewImg: string
	datePostUtc: number
    subredditId: string
}

export const postsContext = React.createContext<IPostsContextData[]>([])

export function PostsContextProvider({children}: {children: ReactNode}) {
    const [postsData] = usePostsData()
    
    return (
        <postsContext.Provider value={postsData}>
            {children}
        </postsContext.Provider>
    )
}

*/