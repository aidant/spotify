import { getSpotifyCallback, getSpotifyId, getSpotifyScopes, setSpotifyAuthorization } from "../store"

export const getSpotifyAuthenticationUrl = () => {
  const url = new URL('https://accounts.spotify.com/authorize')
  url.searchParams.set('client_id', getSpotifyId())
  url.searchParams.set('response_type', 'token')
  url.searchParams.set('redirect_uri', getSpotifyCallback())
  url.searchParams.set('scope', getSpotifyScopes())
  return url.href
}

export const parseSpotifyCallback = (redirect?: string) => {
  if (/^#\//.test(location.hash)) return
  const hash = new URLSearchParams(location.hash.replace(/^#/, ''))
  location.hash = '#' + redirect
  setSpotifyAuthorization(hash.get('token_type'), hash.get('access_token'))
}
