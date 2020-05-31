export const random = (length: number) => {
  const array = new Uint8Array(length / 2)
  crypto.getRandomValues(array)
  return array.reduce((string, number) => string + number.toString(16).padStart(2, '0'), '')
}
