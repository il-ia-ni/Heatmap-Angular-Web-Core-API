import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plotly-heatmap',
  templateUrl: './plotly-heatmap.component.html',
  styleUrls: ['./plotly-heatmap.component.scss']
})
export class PlotlyHeatmapComponent implements OnInit {

  private xTicks: string[] = [];
  private yTicks: string[] = [];
  private zValues: Array<number>[] = [];

  private heatmapLayout = {
    autosize: true,
    title: 'A generated heatmap',
    xaxis: {
      ticks: '',
      side: 'bottom'
    },
    yaxis: {
      ticks: '',
      ticksuffix: ' '
    }
  };

  constructor() { }

  ngOnInit(): void {
    this.generateData();
  }

  public heatmap = {
    data: [
      {
        x: this.xTicks,
        y: this.yTicks,
        z: this.zValues,
        type: 'heatmap',
        hoverongaps: false
      }
    ],
    layout: this.heatmapLayout
  }

  private generateData() {
    let i = 30;
    let length = 50;
    while (i >= 0) {
      let temp: number[] = [];
      for (let j = 0; j <= length; j++) {
        temp.push(Math.ceil(Math.random() * 100));
      }
      this.zValues.push(temp);
      i--;
    }

    while (i < this.zValues.length) {
      this.yTicks[i] = "y" + i;
      i++;
    }

    i = 0;
    while (i < this.zValues[0].length) {
      this.xTicks[i] = "x" + i;
      i++;
    }

  }

}
