import * as React from 'react'
import {Hero} from "../hero";
import {Header} from "../header";
import {Article} from "../article";

export const SliceZone = ({ sliceZone }) => {
  const sliceComponents = {
    menu: Header,
    carousel: Hero,
    article: Article,
    article_inverse: Article,
  }

  const sliceZoneContent = sliceZone.map((slice, index) => {
    const SliceComponent = sliceComponents[slice?.slice_type]
    if (SliceComponent) {
      return <SliceComponent slice={slice} key={`slice-${index}`} />
    }
    return null
  })

  return <main className="container">{sliceZoneContent}</main>
}
