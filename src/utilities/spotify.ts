import { getSpotifyAuthorization } from '../store'

const request = async (path: string) => {
  const url = 'https://api.spotify.com/v1' + path
  const authorization = getSpotifyAuthorization()
  const response = await fetch(url, { headers: { authorization } })
  if (!response.ok) throw new Error()
  const json = await response.json()
  return json
}

export const getProfile = async () => request('/me')
