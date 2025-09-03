import { House, Map } from "lucide-react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Button } from "@mui/material";
import { useState } from "react";

function NavBar({ pagmap, pagprinc, pagsobre }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    // ajuda roooolf
    <nav>
      <div className="bg-emerald-700  h-12 w-screen ">
        <div>
          <div>
            <button
              onClick={() => setIsOpen(true)}
              className="p-3  text-white  hover:bg-emerald-600"
            >
              ☰ Menu
            </button>

            {/* Overlay (bloqueia o conteúdo atrás) */}
            {isOpen && (
              <div
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/50 z-[1000] pointer-events-auto"
              ></div>
            )}

            {/* Sidebar */}
            <aside
              className={`fixed top-0 left-0 h-full w-64 bg-emerald-700 text-white p-4 transform z-50 transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
              style={{ zIndex: 1100 }} // garante que a sidebar fica acima do overlay
            >
              <button
                onClick={() => setIsOpen(false)}
                className="mb-4 text-white hover:text-gray-300"
              >
                ✕
              </button>

              <nav className="flex flex-col gap-4">
                <a href="#" className="hover:bg-emerald-600 p-2 rounded">
                  <button onClick={() => pagprinc()}>Home</button>
                </a>
                <a href="#" className="hover:bg-emerald-600 p-2 rounded">
                  <button onClick={() => pagmap()}>Ecopontos</button>
                </a>
                <a href="#" className="hover:bg-emerald-600 p-2 rounded">
                  <button onClick={() => pagsobre()}>Sobre Nós</button>
                </a>
                <a href="#" className="hover:bg-emerald-600 p-2 rounded">
                  Contato
                </a>
              </nav>
            </aside>
          </div>
        </div>
        {/* <div className="flex flex-row items-center justify-center pt-2 gap-6">
          <Button
            variant="outlined"
            onClick={pagprinc}
            size="small"
            startIcon={<House />}
          >
            Home
          </Button>

          <Button
            variant="outlined"
            onClick={pagmap}
            size="small"
            startIcon={<Map />}
          >
            ecoponto
          </Button>

          <Button variant="outlined" onClick={pagsobre} size="small">
            sobre nos
          </Button>
        </div> */}
      </div>
    </nav>
  );
}

export default NavBar;
