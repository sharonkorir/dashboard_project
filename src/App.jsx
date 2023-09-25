
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Purchase from "./pages/Purchase";
import SignUp from "./pages/SignUp";
import Login from "./pages/login/Login";


function App() {
  return (
    <>

      <Navbar />
      {/* <SignUp /> */}
      <Purchase />
      <Footer />{" "}

      <Login />

    </>
  );
}

export default App;
