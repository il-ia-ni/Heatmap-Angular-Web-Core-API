import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plotly-example',
  templateUrl: './plotly-example.component.html',
  styleUrls: ['./plotly-example.component.scss'],
})
export class PlotlyExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public graph = {
    data: [
        { x: [1, 2, 3], y: [2, 6, 3], type: 'scatter', mode: 'lines+points', marker: {color: 'red'} },
        { x: [1, 2, 3], y: [2, 5, 3], type: 'bar' },
    ],
    layout: {autosize: true, title: 'A Fancy Plot'}
  };

  public heatmap = {
    data: [
      {
        z: [
          [1, 20, 30, 15, 60, 17, 45], [20, 1, 60, 15, 33, 55], [30, 60, 1, 17, 25, 45, 10], [1, 20, 30, 15, 60, 17, 45]
        ],
        type: 'heatmap'
      }
    ],
    layout: {autosize: true, title: 'A simple heatmap'}
  }

  public heatmapCat = {
    data: [
      {
        z: [[1, null, 30, 50, 1], [20, 1, 60, 80, 30], [30, 60, 1, -10, 20]],
        x: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        y: ['Morning', 'Afternoon', 'Evening'],
        type: 'heatmap',
        hoverongaps: false
      }
    ],
    layout: {autosize: true, title: 'A categorized heatmap'}
  }

}
