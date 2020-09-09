import { useIntl } from 'gatsby-plugin-intl'

const useLang = () => {
  const intl = useIntl()
  return (id: string | TemplateStringsArray, options: any = {}) => {
    return intl.formatMessage({ ...options, id })
  }
}

export default useLang
