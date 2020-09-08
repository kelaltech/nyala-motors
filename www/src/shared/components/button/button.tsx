import React from 'react'

import Anchor, { AnchorProps } from '../anchor/anchor'
import './button.scss'

type ButtonProps = Partial<AnchorProps> &
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & {
    to?: string
    /** @default 'default' */
    mode?: 'default' | 'lite' | 'primary' | 'primary-outline'
  }

const Button: React.FC<ButtonProps> = ({
  to,
  mode = 'default',
  className = '',
  ...otherProps
}) => {
  return to ? (
    <Anchor
      to={to}
      {...otherProps}
      className={`shared-button shared-button-mode-${mode} ${className}`}
    />
  ) : (
    <button
      {...otherProps}
      className={`shared-button shared-button-mode-${mode} ${className}`}
    />
  )
}

export default Button
