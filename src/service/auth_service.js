import firebase from "firebase";
import firebaseApp from "./firebase";
class AuthService {
  login(providerName) {
    //parameter로 어떤 플랫폼으로 로그인할지 받아오기
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }

  onAuthChange(onUserChanged) {
    firebase.auth().onAuthStateChanged(user => {
      onUserChanged(user); //전달받은 함수에 user전달
    });
  }

  logout() {
    firebase.auth().signOut()//
    .then(() => {
        alert('Logged out');
    });
  }
}

export default AuthService;
