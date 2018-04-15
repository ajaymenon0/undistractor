import React, { Component } from 'react';

import Header from "./Header";
import Timer from "./Timer";
import { toHHMMSS } from '../util/timeFormat';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currTime: 74
    }
  }
  render() {
    return (
      <div>
        <Header />
        <Timer time={toHHMMSS(this.state.currTime)} />
      </div>
    )
  }
}

export default App;