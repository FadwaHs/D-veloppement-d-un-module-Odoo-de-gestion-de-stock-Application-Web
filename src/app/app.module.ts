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
import {MatDialogModule} from '@angular/material/dialog';
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
import { CreateReceiptComponent } from './create-receipt/create-receipt.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { CreaterulesComponent } from './createrules/createrules.component';
import { CreatecompanyComponent } from './createcompany/createcompany.component';
import { SettingsComponent } from './settings/settings.component';
import { WarehousesComponent } from './warehouses/warehouses.component';
import { OperationtypesComponent } from './operationtypes/operationtypes.component';
import { ProductscategorieComponent } from './productscategorie/productscategorie.component';
import { CreatoperationsComponent } from './creatoperations/creatoperations.component';
import { CreatecategorisComponent } from './createcategoris/createcategoris.component';
import { ProductMoveComponent } from './product-move/product-move.component';
import { CreateContactPopUpComponent } from './create-receipt/create-contact-pop-up/create-contact-pop-up.component';
import { CreateTransfersComponent } from './create-transfers/create-transfers.component';
import { CreateInventoryAdjustmentsComponent } from './create-inventory-adjustments/create-inventory-adjustments.component';
import { PopupstockmovesComponent } from './popupstockmoves/popupstockmoves.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateScarpComponent } from './create-scarp/create-scarp.component';
import { OvreviewDashboardComponent } from './ovreview-dashboard/ovreview-dashboard.component';


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
    ReceiptsComponent,
    CreateReceiptComponent,
    CreateproductComponent,
    CreaterulesComponent,
    CreatecompanyComponent,
    SettingsComponent,
    WarehousesComponent,
    OperationtypesComponent,
    ProductscategorieComponent,
    CreatoperationsComponent,
    CreatecategorisComponent,
    ProductMoveComponent,
    CreateContactPopUpComponent,
    CreateTransfersComponent,
    CreateInventoryAdjustmentsComponent,
    PopupstockmovesComponent,
    CreateScarpComponent,
    OvreviewDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CreatecompanyComponent,PopupstockmovesComponent] 
})
export class AppModule { }
