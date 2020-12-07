import firebase from 'firebase';
class AuthService{
    login(providerName){
        //parameter로 어떤 플랫폼으로 로그인할지 받아오기
        const authProvider = new firebase.auth.[`${providerName}AuthProvider`]();
        return firebase.auth().signInWithPopup(authProvider);
    }
}

export default AuthService;