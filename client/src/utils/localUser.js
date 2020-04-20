class LocalUser {
  key

  constructor (key) {
    this.key = key
  }

  getCurrentUser () {
    return JSON.parse(sessionStorage.getItem(this.key))
  }

  setCurrentUser (user) {
    sessionStorage.setItem(this.key, JSON.stringify(user))
  }

  removeCurrentUser () {
    sessionStorage.removeItem(this.key)
  }
}

export default new LocalUser('CURRENT_USER')
