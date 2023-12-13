import { Component } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { Service } from 'src/app/app.service';


@Component({
  selector: 'demo-app',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css'],
  providers: [Service],
})
export class FirstPageComponent {
  // dataSource: DataSource;

  collapsed = false;

  contentReady = (e:any) => {
    if (!this.collapsed) {
      this.collapsed = true;
      e.component.expandRow(['EnviroCare']);
    }
  };


  customizeTooltip = (pointsInfo: { originalValue: string; }) => ({ text: `${parseInt(pointsInfo.originalValue)}%` });

  // constructor(service: Service) {
  //   this.dataSource = service.getDataSource();
  // }
}


