export default (data, custom) => {
  const metadata = { ...data, ...custom }
  // normilize page url
  metadata.url = metadata.url || metadata.siteUrl

  const markup = { ...metadata, social: undefined, siteUrl: undefined }
  const isArticle = metadata['@type'] === 'Article'

  if (isArticle === false) {
    return [metadata, { isArticle, markup: { ...markup, author: undefined, publisher: undefined } }]
  }

  if (metadata.author) {
    metadata.author['@type'] = 'Person'
  }

  if (metadata.publisher) {
    metadata.publisher['@type'] = 'Organization'
  }

  return [metadata, { isArticle, markup }]
}