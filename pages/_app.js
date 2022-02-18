import Layout from "../components/Layout";
import "../styles/globals.css";
import "../styles/bootstrap/bootstrap.scss";
import "../styles/bootstrap/bootstrap-grid.scss";
import "../styles/style.scss";
import "../styles/fonts/flaticon/font/flaticon.css";
import "../styles/fonts/icomoon/style.css";
// import "../styles/"




function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
