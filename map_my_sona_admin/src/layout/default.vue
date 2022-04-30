<template>
  <v-app>
    <navbar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import navbar from "@/components/navbar";

export default {
  name: "defaultLayout",
  components: {
    navbar,
  },
};
</script>

<style>
</style>