<template>
  <b-card
    bg-variant="light"
    text-variant="black"
    header-tag="header"
    footer-tag="footer"
  >
    <b-card-text class="text-left">
      <b-row class="justify-content-md-center my-3">
        <b-col
          lg="5"
          md="12"
          sm="12"
        >
          <input-search-location />
        </b-col>
      </b-row>
      <grid-location />
    </b-card-text>
  </b-card>
</template>
<script>
import GridLocation from './GridLocations'
import InputSearchLocation from './InputSearchLocation'
export default {
  name      : 'PanelLocation',
  components: {
    InputSearchLocation,
    GridLocation,
  },
}
</script>
