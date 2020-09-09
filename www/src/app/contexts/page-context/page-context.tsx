import { PageRendererProps } from 'gatsby'
import { createContext, useContext } from 'react'

const PageContext = createContext<PageRendererProps | null>(null)
export default PageContext

export const PageProvider = PageContext.Provider
export const usePage = () => useContext(PageContext)
