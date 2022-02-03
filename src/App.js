import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import {ToastContainer,toast} from "react-toastify";
import AllCompanies from './Components/Allcompanies';


function App() {


  // function btnhandle() {
  //   toast.danger("good", {
  //     position: "top-center",
  //   });
  // }
  return (
    <div>
    <Header />
    <ToastContainer />
      <AllCompanies />
        <Footer />
    </div>
  );
}

export default App;
