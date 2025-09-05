import { Button } from "@mui/material";

function Cards({
  click,
  setclick,
  id,
  nome,
  cord,
  posição,
  setposição,
  mapRef,
}) {
  function ecoponto() {
    var set = cord;
    setposição(set);
    mapRef.current.flyTo(posição, 100);
  }
  function setclic() {
    ecoponto();
    setclick(id);
  }
  if (click != id) {
    return (
      <div className="border oco rounded-sm bg-emerald-800 mb-1">
        <Button className="w-90 h-20" onClick={setclic}>
          <div>
            <h1 className="text-white font-medium Orbitron">{nome}</h1>
            <Button>ir para o mapa</Button>
          </div>
        </Button>
      </div>
    );
  } else {
    return (
      <div className="border rounded-sm oco bg-emerald-800 mb-1 aumentar ">
        <div className="w-90 h-20 flex flex-col items-center justify-center">
          <h1 className="text-white font-medium Orbitron">{nome}</h1>
          <Button>ir para o mapa</Button>
        </div>
      </div>
    );
  }
}

export default Cards;
