<template>
  <v-footer tag="footer" app absolute>
    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }} —
      <strong>Leonardo Sanchez</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: "App-Footer"
};
</script>