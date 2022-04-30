<template>
  <div class="container ma-12">
    <div class="left">
      <v-card width="400">
        <v-card-title>Enter Unique ID</v-card-title>
        <v-card-text>
          <v-text-field
            label="Enter Unique ID"
            v-model="getuniqueid"
            filled
          ></v-text-field>
          <!-- <qrcode-vue :value="getuniqueid" :size="300" level="H" /> -->
          <vue-qrcode v-bind:value="qrValue" />
          <v-btn color="primary" type="submit" class="mt-4">
            Generate QR Code
          </v-btn>
        </v-card-text>
      </v-card>
    </div>
    <div class="right">
      <v-card width="400">
        <v-card-title> Generated QR </v-card-title>
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="150"
          max-width="250"
          src="https://picsum.photos/id/11/500/300"
          class="ml-12"
        ></v-img>

        <v-btn color="primary" type="submit" class="ml-12 mt-8 mb-4">
          Save QR Code
        </v-btn>
      </v-card>
    </div>
  </div>
</template>

<script>
// import QrcodeVue from "qrcode.vue";
import VueQrcode from "vue-qrcode";
export default {
  // components: {

  //   QrcodeVue,
  // },
  components: {
    VueQrcode,
  },
  data() {
    return {
      qrValue: "My secret value",
    };
  },
};
</script>

<style lang="scss" scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  display: flex;
  justify-content: space-around;
}
@media (max-width: 600px) {
  .container {
    display: flex;
    flex-direction: column;
  }
  .right {
    margin-top: 15px;
  }
}
</style>