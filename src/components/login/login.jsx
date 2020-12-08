import React, {useEffect} from "react";
import {useHistory} from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import Home from "../home/home";
import styles from "./login.module.css";

const Login = ({authService}) => {
  const history = useHistory();
  const goToMaker = userId => {
    history.push({
      pathname: "/maker",
      state: {id: userId},
    });
    // 여러 정보 전달할 때 object로 전달 (pathname과 userId 전달해줌)
  };
  const onLogin = event => {
    authService //
      .login(event.currentTarget.textContent)
      .then(data => goToMaker(data.user.uid));
  };
  
  useEffect(() => {
    authService//
    .onAuthChange(user => {
      user && goToMaker(user.uid);
    });
  });
 
  return (
    <section className={styles.login}>
      <Header />
      <section className={styles.login_inner}>
        <h1 className={styles.login_title}>LOGIN</h1>
        <ul>
          <li>
            <button className={styles.login_btn} onClick={onLogin}>
              Google
            </button>
          </li>
          <li>
            <button className={styles.login_btn} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
