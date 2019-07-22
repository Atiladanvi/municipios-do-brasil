<template>
  <b-form @submit.prevent="">
    <b-input-group>
      <b-input
        id="municipio"
        v-model="term"
        type="text"
        placeholder="Pesquise um município"
      />
    </b-input-group>
  </b-form>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'InputSearchMunicipios',
  data () {
    return { term: '' }
  },
  computed: { ...mapGetters(['municipios']) },
  watch   : {
    term: function (value) {
      const self = this
      this.search({ term: value, in: self.municipios })
    },
  },
  methods: { ...mapActions(['search']) },
}
</script>
