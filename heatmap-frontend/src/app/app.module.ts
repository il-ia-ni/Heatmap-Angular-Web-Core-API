import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';
import { PlotlyExampleComponent } from './components/plotly-example/plotly-example.component';
import { GraphSwitcherComponent } from './components/graph-switcher/graph-switcher.component';
import { PlotlyHeatmapComponent } from './components/plotly-heatmap/plotly-heatmap.component';

PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [
    AppComponent,
    PlotlyExampleComponent,
    GraphSwitcherComponent,
    PlotlyHeatmapComponent
  ],
  imports: [
    BrowserModule,
    PlotlyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
