import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AuthLayout(){
    return(
        <>
        <Header />

        <main className="bg-gray-100 py-10">
            <Outlet/>
        </main>

        <Footer />

        </>
    );
}