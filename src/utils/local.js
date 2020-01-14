const GuidKey = 'guid'
const IPKey = 'ip'

export function getGuid() {
  return localStorage.getItem(GuidKey)
}

export function setGuid(guid) {
  return localStorage.setItem(GuidKey, guid)
}

export function removeGuid() {
  return localStorage.removeItem(GuidKey)
}

export function getIP() {
  return localStorage.getItem(IPKey)
}

export function setIP(ip) {
  return localStorage.setItem(IPKey, ip)
}

export function removeIP() {
  return localStorage.removeItem(IPKey)
}
