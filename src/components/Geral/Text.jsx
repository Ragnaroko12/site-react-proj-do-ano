function Texto(props) {
  const titulo = props.title;
  const text = props.children;
  const position = props.position;

  function position1() {
    return (
      <div className="bg-blue">
        <div className="ml-40 mr-150 mt-10 text-center Orbitron text-yellow text-[30px]">
          <h1>{titulo}</h1>
        </div>
        <div className=" items-center ml-40 mr-40 grid grid-cols-2 grid-row text-center ">
          <div className="Sans leading-5 text-[20px] text-white">
            <p>{text}</p>
          </div>
          <div className="">
            <img src={props.link} />
          </div>
        </div>
      </div>
    );
  }

  function position2() {
    return (
      <div className="bg-blue">
        <div className="ml-40 mr-150 mt-10 text-center Orbitron text-yellow text-[30px]">
          <h1>{titulo}</h1>
        </div>
        <div
          className="
         items-center ml-40 mr-40 text-left "
        >
          <div className="Sans leading-5 text-[20px] text-white">
            <p>{text}</p>
          </div>
        </div>
      </div>
    );
  }
  function position3() {
    return (
      <div className="bg-blue">
        <div className="ml-40 mr-150 mt-10 text-center Orbitron text-yellow text-[30px]">
          <h1>{titulo}</h1>
        </div>
        <div
          className="
         items-center ml-40 mr-40 grid grid-cols-2 grid-row text-right "
        >
          <div className="">
            <img src={props.link} />
          </div>
          <div className="Sans leading-5 text-[20px] text-white">
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
