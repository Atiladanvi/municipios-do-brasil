import { size } from 'lodash-es'

export default {
  municipiosFilteredsCount: ({ municipiosFiltereds }) => size(municipiosFiltereds),
  municipios              : ({ municipios }) => municipios,
  municipiosFiltereds     : ({ municipiosFiltereds }) => municipiosFiltereds,
}
