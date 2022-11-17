import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-graph-switcher',
  templateUrl: './graph-switcher.component.html',
  styleUrls: ['./graph-switcher.component.scss']
})
export class GraphSwitcherComponent implements OnInit {

  thenBlock: TemplateRef<any>|null = null;
  show = true;

  @ViewChild('primaryBlock', {static: true}) primaryBlock: TemplateRef<any>|null = null;
  @ViewChild('secondaryBlock', {static: true}) secondaryBlock: TemplateRef<any>|null = null;

  @ViewChild('examplePlot', {static: true}) examplePlot: TemplateRef<any>|null = null;
  @ViewChild('heatmapPlot', {static: true}) heatmapPlot: TemplateRef<any>|null = null;

  switchPrimary() {
    this.thenBlock = this.thenBlock === this.primaryBlock ? this.secondaryBlock : this.primaryBlock;
  }

  showExamplePlot() {
    this.thenBlock = this.examplePlot;
  }

  showHeatmapPlot() {
    this.thenBlock = this.heatmapPlot;
  }

  ngOnInit() {
    this.thenBlock = this.primaryBlock;
  }

}
