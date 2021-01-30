import * as React from 'react'
import * as styles from './footer.module.css'
import {Facebook, Instagram, Twitter} from "@material-ui/icons";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <h4>Mentions légales</h4>
        <span>Les Adversaires</span>
        <p>© 2021 - Made with ❤ by Arty</p>
      </div>
      <div>
        <h4>Nous contacter</h4>
        <a href="mailto:lesadversaires@gmail.com">lesadversaires@gmail.com</a>
        <p className={styles.footer__social}>
          <Facebook />
          <Instagram />
          <Twitter />
        </p>
      </div>
    </footer>
  )
}
