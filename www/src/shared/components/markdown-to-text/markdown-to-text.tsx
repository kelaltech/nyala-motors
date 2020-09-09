import Markdown from 'markdown-to-jsx'
import React from 'react'

function filterOutMd(str: string): string {
  return str
    .replace(/\[object Object\]/g, '')
    .replace(/#/g, '')
    .replace(/---/g, '')
}

type PlainProps = React.PropsWithChildren<{}> & {}

const Plain: React.FC<PlainProps> = ({ children }) => {
  if (Array.isArray(children)) {
    return (
      <>
        {children.map((child, i) => (
          <Plain key={i} children={child} />
        ))}
      </>
    )
  }
  if (['object'].includes(typeof children)) {
    return <Plain children={(children as any)?.props?.children || []} />
  }

  if (['bigint', 'boolean', 'number', 'string'].includes(typeof children)) {
    return <>{filterOutMd(children?.toString() || '')}</>
  }

  return <></>
}

type MarkdownToTextProps = {
  [key: string]: any
  children: string
}

const MarkdownToText: React.FC<MarkdownToTextProps> = ({
  options,
  ...props
}) => {
  return (
    <Markdown
      {...props}
      options={{
        ...options,
        overrides: {
          h1: { component: Plain },
          h2: { component: Plain },
          h3: { component: Plain },
          h4: { component: Plain },
          h5: { component: Plain },
          h6: { component: Plain },
          p: { component: Plain },
          article: { component: Plain },
          main: { component: Plain },
          section: { component: Plain },
          br: { component: Plain },
          strong: { component: Plain },
          i: { component: Plain },
          img: { component: Plain },
          hr: { component: Plain },
          code: { component: Plain },
          pre: { component: Plain },
          kbd: { component: Plain },
          ul: { component: Plain },
          ol: { component: Plain },
          li: { component: Plain },
          input: { component: Plain },
          button: { component: Plain },
          texarea: { component: Plain },
          form: { component: Plain },
          div: { component: Plain },
          em: { component: Plain },
          span: { component: Plain },
          table: { component: Plain },
          tr: { component: Plain },
          tbody: { component: Plain },
          thead: { component: Plain },
          td: { component: Plain },
          th: { component: Plain },
          tfoot: { component: Plain },
          a: { component: Plain },
          del: { component: Plain },
          footer: { component: Plain },
          header: { component: Plain },
          sub: { component: Plain },
          sup: { component: Plain },
          ...options?.overrides,
        },
      }}
    />
  )
}

export default MarkdownToText
