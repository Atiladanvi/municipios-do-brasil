
/*
 * Return string normalized (NFD).
 */
const normalizeString = (string) => {
  return string
    .normalize('NFD')
    .replace(/[\u0300-\u036F]/g, '')
    .toLowerCase()
}

export {
  normalizeString,
}
