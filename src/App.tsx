import { BrowserRouter, Route, Routes } from "react-router-dom";
import Beranda from "./page/Beranda";
import Competition from "./page/Competition";
import Seminar from "./page/Seminar";
import Workshop from "./page/Workshop";
import Talkshow from "./page/Talkshow";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Register from "./page/Register";
import Login from "./page/Login";

 function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Beranda/>} />
          <Route path="/competition" element={<Competition />} />
          <Route path="/seminar" element={<Seminar />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/talkshow" element={<Talkshow />} />
        </Route>

        <Route element={<AuthLayout/>}>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register/>}/>
        
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
 }

 export default App;