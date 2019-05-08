import React, { Component } from "react";
import store, { addRow, changeColor } from "../store";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleRow = this.handleRow.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleRow() {
    store.dispatch(addRow());
  }

  handleColorChange(event) {
    store.dispatch(changeColor(event.target.value));
  }

  render() {
    return (
      <div id="pixelate">
        <h1>Pixelate</h1>
        <div>
          <button type="button" id="add-row" onClick={this.handleRow}>
            Add a row
          </button>
          <select onChange={this.handleColorChange}>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="indigo">Indigo</option>
            <option value="violet">Violet</option>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="brown">Brown</option>
          </select>
        </div>
        <table>
          <tbody>
            {this.state.grid.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j} className={cell} />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
