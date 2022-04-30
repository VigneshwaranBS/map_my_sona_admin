import { auth } from "../firebaseConfig";

export const authService = {
  login,
};
async function login(email, password) {
  return await auth
    .signInWithEmailAndPassword(email, password)
    .then((userAuthenticated) => {
      console.log("user logged in", userAuthenticated.user.uid);
      return userAuthenticated.user.uid;
    })
    .catch((error) => {
      console.error("error", error);
      throw error;
    });
}
