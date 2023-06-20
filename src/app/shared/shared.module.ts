import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';

@NgModule({
  declarations: [HomePageComponent, LoadingSpinnerComponent, SearchBoxComponent, SideBarComponent],
  imports: [CommonModule, RouterModule],
  exports: [HomePageComponent, LoadingSpinnerComponent, SearchBoxComponent, SideBarComponent],
})
export class SharedModule {}
