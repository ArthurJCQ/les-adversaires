import * as React from 'react'
import * as styles from './article.module.css'
import {HorizontalRule} from "../horizontal-rule";
import {Layout} from "../layout";
import cx from 'classnames'

interface ArticleProps {
  slice: any,
}

export const Article: React.FC<ArticleProps> = ({ slice }) => {
  console.log(slice)
  return (
    <section className={cx(
      styles.article, {
        [styles['articleAlteredBackground']]: slice.slice_type === 'article_inverse'
      }
    )}>
      <h1>{slice.primary.title.text}</h1>
        { slice.slice_type === 'article_inverse' ? (
          <>
          <HorizontalRule color="primary" shift="left" />
          <div className={styles['article__body']}>
            <div className={styles['article__bodyItem']}>
              <img className={styles.article__image} src={slice.primary.image?.url} alt="article_image" />
            </div>
            <div className={styles['article__bodyItem']}>
              <p>{slice.primary.text.text}</p>
            </div>
          </div>
          </>
        ) : (
          <>
          <HorizontalRule color="primary" shift="right" />
          <div className={styles['article__body']}>
            <div className={styles['article__bodyItem']}>
              <p>{slice.primary.text.text}</p>
            </div>
            <div className={styles['article__bodyItem']}>
              <img className={styles.article__image} src={slice.primary.image?.url} alt="article_image" />
            </div>
          </div>
          </>
        )}
    </section>
  )
}
