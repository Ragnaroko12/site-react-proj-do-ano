import position from "./Map";

function Map() {
  return (
    <div>
      <div>
        <div style={{ height: "100vh", width: "100vw" }}>
          <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={true}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href='https://openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
            />
            <Marker position={position}>
              <Popup>Aqui é Bauru!</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default Map;
