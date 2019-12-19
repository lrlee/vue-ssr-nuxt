const GuidKey = 'guid'

export function getGuid() {
  return localStorage.getItem(GuidKey)
}

export function setGuid(guid) {
  return localStorage.setItem(GuidKey, guid)
}

export function removeGuid() {
  return localStorage.removeItem(GuidKey)
}
