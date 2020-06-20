import React, { useRef } from 'react'
import { FaRegCopy } from 'react-icons/fa'
import ReactTooltip from 'react-tooltip'

type CopyToClipboardProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  value: string
}

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({
  value,
  ...spanProps
}) => {
  const tipRef = useRef<HTMLSpanElement>()
  return (
    <>
      <button
        className="react-share__ShareButton margin-horizontal-normal font-L middle"
        style={{
          cursor: `pointer`,
          background: `transparent none`,
          border: 0,
          padding: 0,
          font: `inherit`,
          color: `inherit`,
        }}
        title="Copy link to clipboard"
        onClick={(e) => {
          e.preventDefault()
          const el = document.createElement(`textarea`)
          el.value = value
          document.body.appendChild(el)
          el.select()
          document.execCommand(`copy`)
          document.body.removeChild(el)
          ReactTooltip.show(tipRef?.current as any)
        }}
        {...spanProps}
      >
        <FaRegCopy />
      </button>
      <span ref={tipRef as any} data-tip="Copied!" />
      <ReactTooltip
        type="success"
        place="bottom"
        effect="solid"
        event="click"
        eventOff="click"
        delayHide={1400}
      />
    </>
  )
}

export default CopyToClipboard
