import * as React from 'react'
import * as styles from './content-layout.module.css'

interface ContentLayoutProps {
  children: React.ReactNode,
}

export const ContentLayout: React.FC<ContentLayoutProps> = ({ children }) => {
  return (
    <div className={styles.layoutContent}>
      {children}
    </div>
  )
}
