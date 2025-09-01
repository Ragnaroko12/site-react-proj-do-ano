import { House, Map } from "lucide-react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Button } from "@mui/material";

function NavBar({ pagmap, pagprinc, pagsobre }) {
  return (
    // ajuda roooolf
    <nav>
      <div className="bg-blue-800  h-12 w-screen ">
        <div className="flex flex-row items-center justify-center pt-2 gap-6">
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
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
