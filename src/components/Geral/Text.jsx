function Texto(props) {
  const titulo = props.title;
  const text = props.children;
  const position = props.position;

  function position1() {
    return (
      <div className="flex flex-row items-center justify-center w-screen">
        <div className="flex flex-col gap-5 justify-center items-center pl-10">
          <h1 className="Orbitron text-yellow text-4xl">{titulo}</h1>
          <p className="Sans leading-5 text-2xl text-white pl-2">{text}</p>
        </div>
        <div>
          <img src={props.link} alt="" className="max-w-100 h-auto" />
        </div>
      </div>
    );
  }

  function position2() {
    return (
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="Orbitron text-yellow text-4xl">{titulo}</h1>
        <p className="pl-10 Sans text-white text-2xl leading-5">{text}</p>
      </div>
    );
  }
  function position3() {
    return (
      <div className="">
        <div className="ml-40 mr-150  text-center Orbitron text-yellow text-4xl">
          <h1>{titulo}</h1>
        </div>
        <div
          className="
         items-center ml-40 mr-40 grid grid-cols-2 grid-row text-right "
        >
          <div className="">
            <img src={props.link} />
          </div>
          <div className="Sans leading-5 text-2xl text-white">
            <p>{text}</p>
          </div>
        </div>
      </div>
    );
  }

  if (position == 1) {
    return position1();
  } else if (position == 2) {
    return position2();
  } else {
    return position3();
  }
}

export default Texto;
