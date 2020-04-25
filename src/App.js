import React from "react";
import "./App.css";
import data from "./data.json";
import TextBox from "./TextBox";
import HorizontalTimeLine from "./HorizontalTimeLine";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      previous: 0,
      data: data,
      timeArray: [],
    };
    this.setValue = this.setValue.bind(this);
  }
  componentWillMount() {
    this.sortData();
  }
  setValue(id) {
    this.setState({
      value: id,
    });
  }
  sortData() {
    // sort the array from less to highest
    data.sort(function (a, b) {
      return a.timestamp - b.timestamp;
    });
    let convertedTimeArray = [];
    // Iterate through data array
    data.forEach((el) => {
      // assign the converted timestamp to the variable
      let covertedString = this.convertToYMD(el.timestamp);
      // push the variable to
      convertedTimeArray.push(covertedString);
    });
    this.setState({
      timeArray: convertedTimeArray,
    });
  }

  convertToYMD(data, string) {
    let unix_timestamp = data;
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(unix_timestamp);
    // Day part from the timestamp
    var Day = date.getDate();
    // Month part from the timestamp
    var Month = date.getMonth() + 1;
    // Year part from the timestamp
    var Year = date.getFullYear();
    // Return the correct date format
    return Day + "-" + Month + "-" + Year;
  }

  render() {
    return (
      <div>
        <HorizontalTimeLine
          index={this.state.value}
          values={this.state.timeArray}
          setValue={this.setValue}
        />
        <div className='text-center'>
          <TextBox id={this.state.value} data={this.state.data} />
        </div>
      </div>
    );
  }
}
