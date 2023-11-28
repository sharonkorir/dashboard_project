
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Product from "./pages/Product";

import Purchase from "./pages/Purchase";
import SignUp from "./pages/SignUp";
import Login from "./pages/login/Login";


function App() {
  return (
    <>

      <Navbar />
      {/* <SignUp /> */}

      {/* <Purchase /> */}
      <Product />

      <Purchase />

      <Footer />{" "}

      <Login />

    </>
  );
}

export default App;
