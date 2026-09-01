import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <div className="flex min-h-screen flex-col bg-parchment font-primary text-ink">
          <Navbar />
          <main className="shell w-full flex-1 py-8">
            <Outlet />
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </>
  );
}

export default App;
