import Vue from 'vue'

interface Store {
  authorization?: string
}

const store = Vue.observable<Store>({
  authorization: null,
})

export const getAuthorization = () => store.authorization
export const isAuthenticated = () => !!store.authorization

export const setAuthorization = (type: string, credentials: string) =>
  store.authorization = `${type} ${credentials}`
