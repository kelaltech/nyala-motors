import React from 'react'

import './input.scss'

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  /** @default 'M' */
  mode?: 'M' | 'L'
}

const Input: React.FC<InputProps> = ({
  mode = 'M',
  className = '',
  ...inputProps
}) => {
  return (
    <input
      className={`shared-input shared-input-mode-${mode} ${className}`}
      {...inputProps}
    />
  )
}

export default Input
