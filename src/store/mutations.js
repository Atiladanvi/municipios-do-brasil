import * as types from './mutations.type'

const isSet        = (action) => action === 'set'
const makeMutation = (property) => (state, value) => {
  state[property] = value
}

const mutations = Object.entries(types).reduce((acc, [key, value]) => {
  const [action, property] = value.split('/')

  if (isSet(action))
    acc[value] = makeMutation(property)

  return acc
}, {})

export default {
  ...mutations,
  [types.resetMunicipiosFiltereds]: (state) => {
    state.selecteds = state.municipios
  },
  [types.addMunicipios]: (state, value) => {
    state.municipios = value
  },
  [types.addMunicipiosFiltereds]: (state, value) => {
    state.municipiosFiltereds = value
  },
}
