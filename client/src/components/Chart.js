import React, { Component } from "react"
import CanvasJSReact, {CanvasJS, CanvasJSChart} from "canvasjs-react-charts"

class Chart extends Component {
  options() {
    return {
      animationEnabled: true,
      theme: "light2",
      title:{
        text: "Gender Guesses"
      },
      axisX: {
        title: "Gender",
        reversed: true,
      },
      axisY: {
        title: "Number Of Votes",
        includeZero: true,
        labelFormatter: this.addSymbols
      },
      data: [{
        type: "bar",
        dataPoints: [
          { y:  this.props.boys, label: "Boy" },
          { y:  this.props.girls, label: "Girl" },
        ]
      }]
  }
  }

  render() {
		return (
      <div>
        <CanvasJSChart options={this.options()} boys={this.props.boys}/>
      </div>
		);
	}

	addSymbols(e){
		var suffixes = ["", "K", "M", "B"];
		var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
		if(order > suffixes.length - 1)
			order = suffixes.length - 1;
		var suffix = suffixes[order];
		return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
	}
}

export default Chart
