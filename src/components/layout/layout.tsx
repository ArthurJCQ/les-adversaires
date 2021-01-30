import * as React from 'react'import * as styles from './layout.module.css'interface LayoutProps {  children: React.ReactNode,}export const Layout: React.FC<LayoutProps> = ({children}) => {  return (    <div className={styles.layout}>      {children}    </div>  )}