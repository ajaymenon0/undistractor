import React from "react";

const Timer = ({ time }) => (
  <section className="timeKeeper">
    <div className="time">{ time }</div>
    <div className="controls">
      <button>START</button>
      <button>STOP</button>
      <button>RESET</button>
    </div>
  </section>
)

export default Timer;