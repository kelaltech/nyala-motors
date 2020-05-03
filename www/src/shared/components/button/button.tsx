import React from 'react'

import './button.scss'

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  /** @default 'default' */
  mode?: 'default' | 'lite' | 'primary' | 'primary-outline'
}

const Button: React.FC<ButtonProps> = ({
  mode = 'default',
  className = '',
  ...inputProps
}) => {
  return (
    <button
      className={`shared-button shared-button-mode-${mode} ${className}`}
      {...inputProps}
    />
  )
}

export default Button
