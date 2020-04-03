import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { ChestsComponent } from './components/chests/chests.component';
import { RunesComponent } from './components/runes/runes.component';
import { RewardsComponent } from './components/rewards/rewards.component';
import { AddNewItemButtonComponent } from './components/add-new-item-button/add-new-item-button.component';
import { ItemPreviewComponent } from './components/item-preview/item-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    EquipmentComponent,
    ChestsComponent,
    RunesComponent,
    RewardsComponent,
    AddNewItemButtonComponent,
    ItemPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
