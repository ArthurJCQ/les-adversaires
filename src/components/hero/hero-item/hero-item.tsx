import * as React from "react";
import {CardMedia} from "@material-ui/core";
import * as styles from './hero-item.module.css'

interface HeroItemProps {
  image: string,
  title: string,
}

export const HeroItem: React.FC<HeroItemProps> = ({ image, title }) => {
  return (
    <CardMedia
      className={styles.heroItem}
      image={image}
      title={title}
    />
  )
}
