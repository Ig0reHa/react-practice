import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/UI/NavBar/Navbar";
import AppRouter from "./components/AppRouter";

function App() {
   return (
     <BrowserRouter>
       <Navbar />
       <AppRouter/>
     </BrowserRouter>
   )
}

export default App
