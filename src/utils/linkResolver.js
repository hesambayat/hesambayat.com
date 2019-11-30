export default doc => {
  switch (doc.type) {
    case 'category':
      return `/category/${doc.uid}`
    case 'post':
    case 'page':
      return `/${doc.uid}`

    default:
      return '/'
  }
}