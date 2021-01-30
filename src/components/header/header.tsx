import * as React from "react";
import * as styles from './header.module.css'
import {Menu} from "@material-ui/icons";
import {useState} from "react";
import cx from 'classnames'

interface HeaderProps {
  slice: any,
}

export const Header: React.FC<HeaderProps> = ({ slice }) => {
  const [mobileMenu, setMobileMenu] = useState(false)

  const switchMobileMenu = (e) => {
    e.preventDefault()
    setMobileMenu(!mobileMenu)
  }

  return (
    <header className={styles.header}>
      <div className={styles.header__mobileMenu}>
        <div className={styles.header__logo__container}>
          <img className={styles.header__logo} src={slice?.primary.logo.url} alt="logo_image" />
        </div>
        <div className={styles['header__icon']} onClick={switchMobileMenu} >
          <Menu fontSize="large"/>
        </div>
      </div>
      <ul className={cx(
        {
          [styles['header__menu']]: !mobileMenu,
          [styles['header__menu--active']]: mobileMenu,
        })
        }>
        <div className={cx(
          {
            [styles.header__items]: true,
          }
          )}>
          { slice?.items.map((menuLink) => {
            console.log(menuLink)
            return (
              <li key={menuLink.menu_link.type} className={cx(
                {
                  [styles['header__items__item']]: !mobileMenu,
                  [styles['header__items__itemActive']]: mobileMenu,
                }
              )}>
                <a href="#">{menuLink.menu_link.type.charAt(0).toUpperCase() + menuLink.menu_link.type.slice(1)}</a>
              </li>
            )
          })}
        </div>
      </ul>
    </header>
  )
}
