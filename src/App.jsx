import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import Purchase from "./pages/Purchase";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Navbar />
      {/* <SignUp /> */}
      {/* <Purchase /> */}
      <Product />
      <Footer />{" "}
    </>
  );
}

export default App;
