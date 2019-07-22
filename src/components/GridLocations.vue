<template>
  <div class="my-2">
    <div
      v-if="isLoading"
      class="container"
    >
      <div class="row justify-content-md-center">
        <div class="loader d-flex align-items-center">
          <b-spinner
            variant="dark"
            label="Spinning"
          />
        </div>
      </div>
    </div>
    <b-row v-if="!isLoading">
      <b-col
        v-for="(municipio, id) in paginate.data"
        :key="id"
        white
        xl="4"
        lg="6"
        md="6"
      >
        <b-card
          class="mb-4"
        >
          <b-row align-h="between">
            <b-col cols="9">
              <h5 class="card-title">
                {{ municipio.nome }}
              </h5>
              <h6 class="card-subtitle text-muted mb-2">
                IBGE: {{ municipio.codigo_ibge }}
              </h6>
            </b-col>
            <b-col
              cols="3"
              class="text-right"
            >
              <b-img
                v-b-tooltip.hover=""
                :src="'/img/'+municipio.codigo_uf + '.png'"
                rounded
                thumbnail
                class="p-0"
                :title="municipio.estado"
                width="40px"
                :alt="municipio.estado"
              />
            </b-col>
          </b-row>
          <b-card-text class="mb-1">
            <span>🌐</span> Lat: {{ municipio.latitude }} Lon: {{ municipio.longitude }} <br>
            <span>🌍</span>
            <b-link
              class="card-link align-content-end"
              target="_blank"
              :href="'https://www.google.com.br/maps/place/' + municipio.latitude + ',' + municipio.longitude"
            >
              Mapa
            </b-link>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
    <div
      v-if="!isLoading && municipiosFilteredsCount === 0"
      class="container"
    >
      <div class="row justify-content-md-center">
        <div class="loader d-flex align-items-center">
          <h1 class="text-primary">
            Nada encontrado !
          </h1>
        </div>
      </div>
    </div>
    <div v-if="!isLoading && municipiosFilteredsCount > 0">
      <div class="d-flex mt-2 text-primary justify-content-center">
        páginas: {{ paginate.totalPages }} | municípios: {{ paginate.total }}
      </div>
      <div class="row justify-content-md-center">
        <div class="d-flex align-items-center">
          <b-pagination
            v-model="paginate.currentPage"
            :per-page="paginate.perPage"
            :total-rows="paginate.total"
            class="my-1"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapState } from 'vuex'
const Paginate = require('paginate-array')
export default {
  name: 'GridLocations',
  data () {
    return {
      paginate: {
        data       : [],
        currentPage: 1,
        totalPages : 1,
        total      : 1,
      },
    }
  },
  computed: {
    ...mapGetters(['municipiosFiltereds', 'municipiosFilteredsCount']),
    ...mapState(['isLoading']),
  },
  watch: {
    'isLoading': function (value) {
      if (value === false)
        this.toPage()
    },
    'municipiosFiltereds': function () {
      this.toPage(1)
    },
    'paginate.currentPage': function (page) {
      this.toPage(page)
    },
  },
  mounted () {
    this.bootstrap()
  },
  methods: {
    ...mapActions(['loadMunicipios']),
    bootstrap: function () {
      this.loadMunicipios()
    },
    toPage: function (page = 1) {
      const self    = this
      self.paginate = Paginate(self.municipiosFiltereds, page, 6)
    },
  },
}
</script>
<style>
.loader {
  height: 370px;
}
</style>
