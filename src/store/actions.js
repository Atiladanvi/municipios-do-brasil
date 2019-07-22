import * as mutations from './mutations.type'
import { normalizeString } from '../support/utils'

const loadMunicipios = ({ commit }) => {
  commit(mutations.setIsLoading, true)
  return fetch('./municipios.json')
    .then((response) => response.json())
    .then((data) => {
      commit(mutations.setError, '')
      commit(mutations.setMunicipios, [...data])
      commit(mutations.setMunicipiosFiltereds, [...data])
      return new Promise((resolve) => {
        setTimeout(() => {
          commit(mutations.setIsLoading, false)
        }, 500)
        resolve()
      })
    })
    .catch((error) => {
      commit(mutations.setError, error.message)
    })
}

const search = ({ commit }, search) => {
  const term                = normalizeString(search.term)
  const municipiosFiltereds = search.in.filter((element) => {
    return normalizeString(element.nome).includes(term.toLowerCase())
  })
  commit(mutations.setMunicipiosFiltereds, municipiosFiltereds)
}

export default { loadMunicipios, search }
