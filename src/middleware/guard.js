export default function({ route, req, res, redirect, store }) {
  const isMobile = ua => {
    const agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
    let flag = false
    for (let v = 0; v < agents.length; v++) {
      if (ua.indexOf(agents[v].toLowerCase()) > 0) {
        flag = true
        break
      }
    }
    return flag
  }
  const ua = process.server ? req.headers['user-agent'].toLowerCase() : navigator.userAgent.toLowerCase()
  store.commit('setUserAgent', ua)
  const isMLink = /^\/m(\/.+)*$/.test(route.path)
  const isMAgent = isMobile(ua)
  if (isMAgent) {
    if (!isMLink && route.path !== '/404') {
      return redirect('/m', route.query)
    }
  } else if (isMLink) {
    return redirect('/', route.query)
  }
}
