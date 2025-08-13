import './App.css';
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <>
      <Toaster />
      <div>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;