import React from "react";
import { Grid, Paper } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export default class HorizontalTimeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      values: [],
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleForwardClick = this.handleForwardClick.bind(this);
    this.handleBackwardClick = this.handleBackwardClick.bind(this);
  }
  componentDidMount() {
    this.highlightSelectedItem(0);
  }
  handleScroll(event) {
    let horizontalList = document.getElementById("horizontal-list");
    if (event.nativeEvent.wheelDelta > 0) {
      horizontalList.scrollLeft -= 120;
    } else {
      horizontalList.scrollLeft += 120;
    }
  }
  handleBackwardClick() {
    let horizontalList = document.getElementById("horizontal-list");
    horizontalList.scrollLeft += 180;
  }
  handleForwardClick() {
    let horizontalList = document.getElementById("horizontal-list");
    horizontalList.scrollLeft -= 180;
  }

  highlightSelectedItem(id) {
    if (document.querySelector(".selected") !== null) {
      document.querySelector(".selected").classList.remove("selected");
    }
    let selectedItem = document.getElementById(id);
    if (selectedItem !== null) {
      selectedItem.classList.add("selected");
    }
  }

  handleClick(event) {
    this.setState({
      selected: event.target.id,
    });
    this.props.setValue(event.target.id);
    this.highlightSelectedItem(event.target.id);
  }

  renderListItems() {
    if (this.props.values) {
      return this.props.values.map((timeElement, index) => {
        return (
          <li
            key={index}
            className='list-items'
            href='#'
            id={index}
            onClick={this.handleClick}>
            {timeElement}
          </li>
        );
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <IconButton
              className='prvButton iconButton'
              onClick={this.handleForwardClick}>
              <ArrowBackIosIcon />
            </IconButton>
          </Grid>
          <Grid item xs={6}>
            <Paper>
              <div id='menu-outer'>
                <div className='table'>
                  <ul
                    id='horizontal-list'
                    onWheel={this.handleScroll}
                    onTouchMove={this.handleScroll}>
                    {this.renderListItems()}
                  </ul>
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <IconButton
              className='iconButton'
              onClick={this.handleBackwardClick}>
              <ArrowForwardIosIcon />
            </IconButton>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
