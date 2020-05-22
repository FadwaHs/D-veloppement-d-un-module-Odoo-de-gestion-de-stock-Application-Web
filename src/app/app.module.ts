import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AllTransfersComponent } from './all-transfers/all-transfers.component';
import { ProductComponent } from './product/product.component';
import { RecorderingRulesComponent } from './recordering-rules/recordering-rules.component';
import { InventoryAdjustmentsComponent } from './inventory-adjustments/inventory-adjustments.component';
import { ScarpComponent } from './scarp/scarp.component';
import { RunSchedulersComponent } from './run-schedulers/run-schedulers.component';
import { RinventoryValuationComponent } from './rinventory-valuation/rinventory-valuation.component';
import { StockMovesComponent } from './stock-moves/stock-moves.component';
import { ProcurementExceptionsComponent } from './procurement-exceptions/procurement-exceptions.component';
import { ReceiptsComponent } from './receipts/receipts.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AllTransfersComponent,
    ProductComponent,
    RecorderingRulesComponent,
    InventoryAdjustmentsComponent,
    ScarpComponent,
    RunSchedulersComponent,
    RinventoryValuationComponent,
    StockMovesComponent,
    ProcurementExceptionsComponent,
    ReceiptsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
