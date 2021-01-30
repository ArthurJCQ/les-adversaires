import React from 'react'
import { SliceZone } from '../components'
import {graphql} from 'gatsby'
import '../styles/variables.css'
import '../styles/styles.css'
import {Footer} from '../components/footer/footer'
import {Helmet} from 'react-helmet'

// eslint-disable-next-line react/prop-types
const Index = ({ data }) => {
  if (!data) return null
  // eslint-disable-next-line react/prop-types
  const document = data.allPrismicAccueil.edges[0].node.data
  console.log(document)
  return (
    <html lang="fr">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Les Adversaires - Compagnie de théâtre</title>
        <meta name="description" content="Site de la compagnie de théâtre Les Adversaires. Retrouvez toutes les
         informations sur les spectacles, les comédiens de la compagnie, ainsi que les informations de contacts. " />
      </Helmet>
      <SliceZone sliceZone={document.body} />
      <Footer />
    </html>
  )
}

export const query = graphql`
  query AccueilQuery {
    allPrismicAccueil {
      edges {
        node {
          data {
            body {
              ... on PrismicAccueilBodyMenu {
                slice_type
                primary {
                  logo {
                    alt
                    thumbnails
                    url
                  }
                }
                items {
                  menu_link {
                    url
                    uid
                    type
                  }
                }
              }
              ... on PrismicAccueilBodyCarousel {
                slice_type
                items {
                  image {
                    alt
                    thumbnails
                    url
                  }
                }
              }
              ... on PrismicAccueilBodyArticle {
                slice_type
                primary {
                  text {
                    text
                  }
                  title {
                    text
                  }
                  image {
                    url
                  }
                }
              }
              ... on PrismicAccueilBodyArticleInverse {
                id
                slice_type
                primary {
                  text {
                    text
                  }
                  title {
                    text
                  }
                  image {
                    url
                  }
                }
              }
            }
            home_page {
              raw
            }
          }
          last_publication_date
        }
      }
    }
  }

`

export default Index
