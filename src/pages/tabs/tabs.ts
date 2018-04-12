import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { MatchesPage } from '../matches/matches';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MatchesPage;
  tab3Root = ProfilePage;

  constructor() {

  }
}
