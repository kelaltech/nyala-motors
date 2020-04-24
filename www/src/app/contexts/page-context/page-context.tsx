import { createContext, useContext } from 'react'
import { PageRendererProps } from 'gatsby'

const PageContext = createContext<PageRendererProps | null>(null)
export default PageContext

export const PageProvider = PageContext.Provider
export const usePage = () => useContext(PageContext)
