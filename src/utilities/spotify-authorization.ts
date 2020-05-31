import { setAuthorization } from "../store"

export const getSpotifyAuthenticationUrl = (redirect?: string) => {
  const url = new URL('https://accounts.spotify.com/authorize')
  url.searchParams.set('client_id', 'c98c0dd8395e4bbdb4195e94963aeb23')
  url.searchParams.set('response_type', 'token')
  url.searchParams.set('redirect_uri', location.origin + location.pathname)
  if (redirect) url.searchParams.set('state', redirect)
  url.searchParams.set('scope', 'user-library-read user-top-read')
  return url.href
}

export const parseSpotifyCallback = () => {
  if (/^#\//.test(location.hash)) return
  const hash = new URLSearchParams(location.hash.replace(/^#/, ''))
  location.hash = '#' + (hash.get('state') || '')
  setAuthorization(hash.get('token_type'), hash.get('access_token'))
}
