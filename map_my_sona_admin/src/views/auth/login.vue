<template>
  <div id="login">
    <v-card
      max-width="344"
      class="card elevation-0"
      :loading="cardLoading"
      :disabled="cardLoading"
    >
      <h3 style="text-align: center" class="mb-2">Map My Sona Admin</h3>
      <v-card-text>
        <lottie-player
          src="https://assets10.lottiefiles.com/datafiles/AtGF4p7zA8LpP2R/data.json"
          background="transparent"
          speed="1"
          style="width: 100%; height: 100%"
          loop
          autoplay
        ></lottie-player>
        <v-text-field placeholder="Enter Email" v-model="email"> </v-text-field>
        <v-text-field
          placeholder="Enter Password"
          v-model="password"
          type="password"
        >
        </v-text-field>
      </v-card-text>
      <v-btn color="black" class="white--text" @click="signin" router to="/"
        >Login</v-btn
      >
    </v-card>
  </div>
</template>

<script>
// import { authService } from "../../services/index";

export default {
  name: "login",
  data() {
    return {
      text: "World is ready",
      email: null,
      password: null,
      cardLoading: false,
    };
  },
  //   methods: {
  //     async signin() {
  //       this.cardLoading = true;
  //       await authService
  //         .login(this.email, this.password)
  //         .then((user) => {
  //           console.log(user);
  //           console.log(this.email);
  //           this.$router.push("/");
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //         });
  //       this.cardLoading = false;
  //     },
  //   },
};
</script>

<style scoped>
#login {
  background-color: #fce4ff;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url("https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204_1280.jpg");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
}
.card {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
}
</style>