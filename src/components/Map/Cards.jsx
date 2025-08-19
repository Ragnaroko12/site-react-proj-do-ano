import { Button } from "@mui/material";

function Cards({ click, setclick, id, nome }) {
  function setclic() {
    setclick(id);
  }
  if (click != id) {
    return (
      <div className="border bg-green-300 mb-1">
        <Button className="w-50 h-20" onClick={setclic}>
          <div>
            <h1 className="bg-red-600">{nome}</h1>
            <h1 className="bg-rose-500">endereçoeeeeeeeeeee</h1>
            <Button>ir para o mapa</Button>
          </div>
        </Button>
      </div>
    );
  } else {
    return (
      <div className="border bg-green-300 mb-1 aumentar">
        <Button className="w-50 h-20" onClick={setclic}>
          <div>
            <h1 className="bg-red-600">{nome}</h1>
            <h1 className="bg-rose-500">endereçoeeeeeeeeeee</h1>
            <Button>ir para o mapa</Button>
          </div>
        </Button>
      </div>
    );
  }
}

export default Cards;
