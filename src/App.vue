<template>
  <div id="app">
    <div class="container">
      <b-row class="mt-3">
        <b-col>
          <panel-location />
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
import PanelLocation from './components/PanelLocations'

export default {
  name      : 'App',
  components: { PanelLocation },
}
</script>
