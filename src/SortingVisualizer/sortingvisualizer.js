import React from "react";
import "./sortingvisualizer.css";
export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { array: [] };
  }

  componentDidMount() {
    this.arrayReset();
  }

  arrayReset() {
    const array = [];
    for (let i = 0; i < 310; i++) array.push(randomIntFromInterval(5, 730));
    this.setState({ array });
  }

  render() {
    const { array } = this.state;
    return (
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key="{idx}"
            style={{ height: `${value}px` }}
          ></div>
        ))}
      </div>
    );
  }
}

function randomIntFromInterval(f, l) {
  return Math.floor(Math.random() * (l - f + 1) + f);
}
