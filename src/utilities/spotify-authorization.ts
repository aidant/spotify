import { Deferred } from "./deferred"
import { deleteGlobalProperty, getGlobalProperty, Global, hasGlobalProperty, setGlobalProperty } from "./global"
import { random } from "./random"

export const getSpotifyAuthenticationUrl = (state: string) => {
  const url = new URL('https://accounts.spotify.com/authorize')
  url.searchParams.set('client_id', 'c98c0dd8395e4bbdb4195e94963aeb23')
  url.searchParams.set('response_type', 'token')
  url.searchParams.set('redirect_uri', location.origin + location.pathname + 'callback')
  url.searchParams.set('state', state)
  url.searchParams.set('scope', 'user-library-read user-top-read')
  return url.href
}

export const getSpotifyAccessToken = async (): Promise<string> => {
  if (hasGlobalProperty(Global.ImplicitGrantDeferred)) {
    return getGlobalProperty(Global.ImplicitGrantDeferred).promise
  }

  const deferred = setGlobalProperty(Global.ImplicitGrantDeferred, new Deferred())
  const state = setGlobalProperty(Global.ImplicitGrantState, random(96))

  const isChildWindowOpen = window.open(
    getSpotifyAuthenticationUrl(state),
    'Login with Spotify',
    'width=600,height=800'
  )
  if (!isChildWindowOpen) deferred.reject(new Error('Please enable pop-up windows.'))

  try {
    return await deferred.promise
  } finally {
    deleteGlobalProperty(Global.ImplicitGrantDeferred)
    deleteGlobalProperty(Global.ImplicitGrantState)
  }
}
