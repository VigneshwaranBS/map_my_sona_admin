<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="clipped"
      expand-on-hover
      mini-variant
      left
      absolute
      permanent
      dark
      app
      color="blue accent-3"
    >
      <div class="v-navigation-drawer__content">
        <v-list-item color="white" router to="/">
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard </v-icon>
          </v-list-item-icon>

          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item>
        <v-list-item color="white" router to="/addproduct">
          <v-list-item-icon>
            <v-icon>mdi-plus-box-multiple </v-icon>
          </v-list-item-icon>

          <v-list-item-title>Add Products</v-list-item-title>
        </v-list-item>
        <v-list-item color="white" router to="/generateqr">
          <v-list-item-icon>
            <v-icon> mdi-qrcode-plus </v-icon>
          </v-list-item-icon>

          <v-list-item-title>Generate QR code</v-list-item-title>
        </v-list-item>
        <v-list-item color="white" router to="/updatedata">
          <v-list-item-icon>
            <v-icon>mdi-arrow-up-circle-outline </v-icon>
          </v-list-item-icon>

          <v-list-item-title>Update Data</v-list-item-title>
        </v-list-item>
        <v-list-item color="white" router to="/reportandcontact">
          <v-list-item-icon>
            <v-icon>mdi-alert-octagon </v-icon>
          </v-list-item-icon>

          <v-list-item-title>Report and Contact</v-list-item-title>
        </v-list-item>
      </div>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block> Logout </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <!-- Na bar tools -->
    <v-app-bar :clipped-left="clipped" fixed dense app color="blue accent-3">
      <v-toolbar-title v-text="title" class="white--text" />
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      drawer: false,

      title: "Map_My_Sona_Admin",

      dashboard: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.v-navigation-drawer__content::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px #5d5d5d;
  box-shadow: inset 0 0 6px #424242;

  background-color: #5d5d5d;
}
.v-navigation-drawer__content::-webkit-scrollbar {
  width: 0px;
}
.v-navigation-drawer__content::-webkit-scrollbar-thumb {
  -webkit-box-shadow: inset 0 0 6px #424242;
  box-shadow: inset 0 0 6px #424242;
  background-color: #424242;
}
</style>
