import * as React from 'react'
import Carousel from "react-material-ui-carousel";
import * as styles from './hero.module.css'
import {HeroItem} from "./hero-item";
import {HorizontalRule} from "../horizontal-rule";
import {Layout} from "../layout";

interface HeroProps {
  slice: any,
}

export const Hero: React.FC<HeroProps> = ({ slice }) => {
  return (
    <section className={styles.hero}>
      <Carousel animation="slide">
        {
          slice.items.map( (image, i) =>
            <HeroItem
              key={i}
              image={image.image.url}
              title={image.imagealt}
            />
          )}
      </Carousel>
    </section>
  )
}
