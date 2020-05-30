import Vue from 'vue'

interface Store {
  spotify: {
    id: string
    callback: string
    scopes: string[]
    authorization?: string
  }
}

const store = Vue.observable<Store>({
  spotify: {
    id: 'c98c0dd8395e4bbdb4195e94963aeb23',
    callback: location.origin + location.pathname,
    scopes: ['user-library-read', 'user-top-read'],
    authorization: null,
  },
})

export const getSpotifyId = () => store.spotify.id
export const getSpotifyCallback = () => store.spotify.callback
export const getSpotifyScopes = () => store.spotify.scopes.join(' ')
export const getSpotifyAuthorization = () => store.spotify.authorization

export const setSpotifyAuthorization = (type: string, credentials: string) =>
  store.spotify.authorization = `${type} ${credentials}`
