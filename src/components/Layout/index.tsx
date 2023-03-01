import React, { FC, ReactNode } from 'react'
import cn from 'classnames'
import styles from './Layout.module.scss'

type Props = {
  className: string
  children?: ReactNode
}

export const Layout: FC<Props> = ({className, children}) => {
  return (
    <div className={cn(styles.container, className)}>{children}</div>
  )
}
