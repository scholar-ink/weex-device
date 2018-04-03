import { pageRouter } from '../pageRouter'

function push (url) {
  url = getURL(url)
  
  console.log(url)

  const navigator = weex.requireModule('navigator')

  let platform = getOs()

  if (platform === 'web') {
    url = '?page=/dist' + url
  }

  if (navigator) {
    navigator.push({
      'url': url,
      'animated': 'true'
    }, function () {
      console.log('skip complete')
    })
  }
}
function getURL (url) {
  let platform = getOs()

  let bundleUrl = weex.config.bundleUrl
  
  console.log(bundleUrl)

  let mainUrl = pageRouter(url).split('examples')[1]
  
  mainUrl = mainUrl.replace(/\\/g, '/')

  mainUrl = mainUrl.split('.')[0]

  let fullUrl = ''

  if (bundleUrl.lastIndexOf('file://') !== -1) {
    if (platform === 'ios') {
      bundleUrl = bundleUrl.substr(0, bundleUrl.lastIndexOf('bundlejs'))

      fullUrl = bundleUrl + 'bundlejs' + mainUrl + '.js'
    } else if (platform === 'android') {
      bundleUrl = bundleUrl.substr(0, bundleUrl.lastIndexOf('build'))

      fullUrl = bundleUrl + 'dist' + mainUrl + '.js'
    } else {
    }
  } else {
    if (platform === 'web') {
      fullUrl = mainUrl + '.js'
    } else {
      bundleUrl = bundleUrl.substr(0, bundleUrl.lastIndexOf('dist'))

      fullUrl = bundleUrl + 'dist' + mainUrl + '.js'
    }
  }

  return fullUrl
}

function getOs () {
  let platform = weex.config.env ? weex.config.env.platform : weex.config.platform

  return platform.toLowerCase()
}

export default {
  push: push,
  getURL: getURL,
  getOs: getOs
}
