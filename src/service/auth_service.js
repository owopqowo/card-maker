import {auth, githubProvider, googleProvider} from "./firebase";

class AuthService {
  login(providerName) {
    const authProvider = this.getProvider(providerName);
    return auth.signInWithPopup(authProvider);
  }

  logout() {
    auth.signOut();
  }

  onAuthChange(onUserChanged) {
    auth.onAuthStateChanged((user) => {
      onUserChanged(user)
    })
  }

  getProvider(providerName) {
    switch (providerName) {
      case 'Google' :
        return googleProvider;
      case 'Github' :
        return githubProvider;
      default:
        throw new Error(`not supported provider : ${providerName}`);
    }
  }
}

export default AuthService;