import { Component } from '@angular/core';

import { MapViewPage } from '../mapView/mapView.component';
import { ArViewPage } from '../arView/arView.component';
import { ListViewPage } from '../listView/listView.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MapViewPage;
  tab2Root = ArViewPage;
  tab3Root = ListViewPage;

  constructor() {

  }
}
