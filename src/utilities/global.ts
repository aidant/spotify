import { Deferred } from './deferred'

export const enum Global {
  ImplicitGrantDeferred = '__GLOBAL_SPOTIFY_IMPLICIT_GRANT_DEFERRED__',
  ImplicitGrantState = '__GLOBAL_SPOTIFY_IMPLICIT_GRANT_STATE__',
}

interface Globals {
  [Global.ImplicitGrantDeferred]: Deferred<string>
  [Global.ImplicitGrantState]: string
}

export const getGlobalProperty = <T extends keyof Globals>(
  property: T,
  global: any = globalThis
): Globals[T] => global[property]

export const setGlobalProperty = <T extends keyof Globals>(
  property: T,
  value: Globals[T],
  global: any = globalThis
): Globals[T] => global[property] = value

export const hasGlobalProperty = <T extends keyof Globals>(
  property: T,
  global: any = globalThis
) => property in global

export const deleteGlobalProperty = <T extends keyof Globals>(
  property: T,
  global: any = globalThis
) => delete global[property]
