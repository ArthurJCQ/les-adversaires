const linkResolver = (doc) => {
  if (doc.type === 'page') {
    return `/${doc.uid}`
  }
  return '/'
}

// eslint-disable-next-line no-undef
module.exports = linkResolver
