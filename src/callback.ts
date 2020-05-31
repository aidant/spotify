import { getGlobalProperty, Global } from './utilities/global'

const deferred = getGlobalProperty(Global.ImplicitGrantDeferred, opener)
const state = getGlobalProperty(Global.ImplicitGrantState, opener)

const query = new URLSearchParams(location.search)
const hash = new URLSearchParams(location.hash.substring(1))

if (query.has('error')) {
  deferred.reject(new Error('Login rejected.'))
} else if (state !== hash.get('state')) {
  deferred.reject(new Error('Login failed.'))
} else {
  deferred.resolve(`${hash.get('token_type')} ${hash.get('access_token')}`)
}

close()
