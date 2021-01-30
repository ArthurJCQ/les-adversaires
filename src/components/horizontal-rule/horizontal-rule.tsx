import * as React from 'react'
import * as styles from './horizontal-rule.module.css'
import {Layout} from "../layout";
import cx from 'classnames'

interface HorizontalRuleProps {
  color?: 'gray' | 'primary',
  shift?: 'right' | 'left',
}

export const HorizontalRule: React.FC<HorizontalRuleProps> = ({ color = 'gray', shift }) => {
  return (
    <Layout>
      <hr className={cx(styles.separator, {
        [styles.separatorGray]: color === 'gray',
        [styles.separatorPrimary]: color === 'primary',
        [styles.separatorLeft]: shift === 'left',
        [styles.separatorRight]: shift === 'right',
      })} />
    </Layout>
  )
}
