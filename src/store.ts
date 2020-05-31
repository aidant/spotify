import Vue from 'vue'

interface Store {
  authorization?: string
}

const store = Vue.observable<Store>({
  authorization: null,
})

export const getAuthorization = () => store.authorization
export const isAuthenticated = () => !!store.authorization

export const setAuthorization = (authorization: string) =>
  store.authorization = authorization
