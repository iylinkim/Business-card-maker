import styles from "./app.module.css";
import Test from "./components/test/test";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Login from "./components/login/login";

function App() {
  return (
    <div className={styles.container}>
      <script src='https://www.gstatic.com/firebasejs/8.1.2/firebase-app.js'></script>
      <script src='https://www.gstatic.com/firebasejs/8.1.2/firebase-analytics.js'></script>
      <Header />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
