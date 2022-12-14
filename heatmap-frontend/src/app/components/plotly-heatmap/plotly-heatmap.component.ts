import { Component, OnInit } from '@angular/core';
import { WebApiFetchRandomService } from 'src/app/services/web-api-fetch-random.service';

@Component({
  selector: 'app-plotly-heatmap',
  templateUrl: './plotly-heatmap.component.html',
  styleUrls: ['./plotly-heatmap.component.scss']
})
export class PlotlyHeatmapComponent implements OnInit {

  private xTicks: string[] = [];
  private yTicks: string[] = [];
  private zValues!: Array<Array<number>>;

  private customScheme = [
    ['0.0', 'rgb(255,200,0)'],
    ['0.25', 'rgb(180,150,60)'],
    ['0.55', 'rgb(120,100,120)'],
    ['0.75', 'rgb(60,50,180)'],
    ['1.0', 'rgb(0,0,255)']
  ];

  public colorSchemes = ['YlOrRd', 'YlGnBu', 'RdBu', 'Portland', 'Jet', 'Picnic', 'Hot', 'Greys', 'Greens', 'Electric', 'Earth', 'Bluered', 'Blackbody']; // possible schemes @ https://plotly.com/javascript/colorscales/
  public selectedScheme = this.colorSchemes[4];

  public ttlRandomEntities = 0;
  public ttlRandomEntitySize = 0;
  public ttlRandomSignals = this.ttlRandomEntities * this.ttlRandomEntitySize;

  public heatmapLayout = {
    autosize: true,
    height: 800,
    title: 'A generated heatmap with scheme: ' + this.selectedScheme,
    xaxis: {
      ticks: '',
      side: 'bottom'
    },
    yaxis: {
      ticks: '',
      ticksuffix: ' '
    },
  };

  public heatmap = {
    data: [
      {
        x: this.xTicks,
        y: this.yTicks,
        z: this.zValues,
        type: 'heatmap',
        hoverongaps: false,
        colorscale: this.customScheme  // OR this.customScheme! Cannot combine setting a string-named predefined color scheme AND an array with a custom scheme!
      }
    ],
    layout: this.heatmapLayout,
    updateOnDataChange: true,
    updateOnLayoutChange: true
  }

  constructor(public randomWebApiService: WebApiFetchRandomService) { }

  ngOnInit(): void {
    // this.generateData();
    this.getData();
  }

  getData(): void {
    this.randomWebApiService.getRandomData()
      .subscribe(result => {
        this.heatmap.data[0].z = result;

        this.heatmap.data[0].x = this.heatmap.data[0].x.slice(0, result[0].length);
        this.heatmap.data[0].y = this.heatmap.data[0].y.slice(0, result.length);

        this.ttlRandomEntities = this.heatmap.data[0].z.length;
        this.ttlRandomEntitySize = this.heatmap.data[0].z[0].length;
        this.ttlRandomSignals = this.ttlRandomEntities * this.ttlRandomEntitySize;

        // this.heatmap.data[0].colorscale = this.selectedScheme;  // Comment out if heatmap.data.colorscale is set to this.customScheme arr!
        this.heatmap.layout.title = 'A generated heatmap with scheme: ' + this.selectedScheme;

        let i = 0;
        while (i < result.length) {
          this.heatmap.data[0].y[i] = "y" + i;
          i++;
        }

        i = 0;
        while (i < result[0].length) {
          this.heatmap.data[0].x[i] = "x" + i;
        i++;
        }

        // console.log("Web Api returned totally " + this.ttlRandomSignals + " random values:\n" + this.ttlRandomEntities + " instances with " + this.ttlRandomEntitySize + " signals each");
      });
  }

  // private generateData() {
  //   let i = 30;
  //   let length = 50;
  //   while (i >= 0) {
  //     let temp: number[] = [];
  //     for (let j = 0; j <= length; j++) {
  //       temp.push(Math.ceil(Math.random() * 100));
  //     }
  //     this.zValues.push(temp);
  //     i--;
  //   }

  //   while (i < this.zValues.length) {
  //     this.yTicks[i] = "y" + i;
  //     i++;
  //   }

  //   i = 0;
  //   while (i < this.zValues[0].length) {
  //     this.xTicks[i] = "x" + i;
  //     i++;
  //   }

  // }

}
