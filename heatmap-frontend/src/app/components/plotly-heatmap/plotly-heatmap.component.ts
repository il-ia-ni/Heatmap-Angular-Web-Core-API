import { outputAst } from '@angular/compiler';
import { Component, OnInit, Output } from '@angular/core';
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

  public ttlRandomEntities = 0;
  public ttlRandomEntitySize = 0;
  public ttlRandomSignals = this.ttlRandomEntities * this.ttlRandomEntitySize;

  public heatmapLayout = {
    autosize: true,
    height: 800,
    title: 'A generated heatmap',
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
        colorscale: 'Portland'  // possible schemes: YlOrRd, YlGnBu, RdBu, Portland, Picnic, Jet, Hot, Greys, Greens, Electric, Earth, Bluered, Blackbody. See @ https://plotly.com/javascript/colorscales/
      }
    ],
    layout: this.heatmapLayout
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
