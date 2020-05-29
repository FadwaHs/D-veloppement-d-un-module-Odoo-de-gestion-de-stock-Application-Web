import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { RecorderingRulesComponent } from './recordering-rules/recordering-rules.component';
import { InventoryAdjustmentsComponent } from './inventory-adjustments/inventory-adjustments.component';
import { ScarpComponent } from './scarp/scarp.component';
import { RinventoryValuationComponent } from './rinventory-valuation/rinventory-valuation.component';
import { StockMovesComponent } from './stock-moves/stock-moves.component';
import { ProcurementExceptionsComponent } from './procurement-exceptions/procurement-exceptions.component';
import { OverviewComponent } from './overview/overview.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AllTransfersComponent } from './all-transfers/all-transfers.component';
import { RunSchedulersComponent } from './run-schedulers/run-schedulers.component';
import { ReceiptsComponent } from './receipts/receipts.component';
import { CreateReceiptComponent } from './create-receipt/create-receipt.component';
import {CreateproductComponent} from './createproduct/createproduct.component';
import {CreaterulesComponent} from './createrules/createrules.component';
import {SettingsComponent} from './settings/settings.component';
import {WarehousesComponent} from './warehouses/warehouses.component';
import {OperationtypesComponent} from './operationtypes/operationtypes.component';
import {ProductscategorieComponent} from './productscategorie/productscategorie.component';
import {CreatoperationsComponent} from './creatoperations/creatoperations.component';
import {CreatecategorisComponent} from './createcategoris/createcategoris.component';



const routes: Routes = [
  {
    path:'',
    component:OverviewComponent
  },
  { 
        path: 'overview',
        component:OverviewComponent
  },
  {
        path:'statistics',
        component:StatisticsComponent
  }, 
  {
    path:'allTransfers',
    component:AllTransfersComponent
  },
  {
    path:'product',
    component:ProductComponent
  },
  {
    path:'runSchedulers',
    component:RunSchedulersComponent
  },
  {
    path:'reo-rules',
    component:RecorderingRulesComponent
  },
  {
    path:'inventory-adj',
    component:InventoryAdjustmentsComponent
  },
  {
    path:'scrap',
    component:ScarpComponent
  },
  {
    path:'rinventoruValuation',
    component:RinventoryValuationComponent
  },
  {
    path:'stock-moves',
    component:StockMovesComponent
  },
  {
    path:'pro-exce',
    component:ProcurementExceptionsComponent
  },
  {
    path:'receipt',
    component:ReceiptsComponent
  },
  {
    path:'create-receipt',
    component:CreateReceiptComponent
  },
  {
    path:'create-product',
    component: CreateproductComponent
  },
  {
    path: 'create-rules',
    component: CreaterulesComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'warehouses',
    component: WarehousesComponent
  },
  {
    path: 'operationtypes',
    component: OperationtypesComponent
  },
  {
    path: 'productscategorie',
    component: ProductscategorieComponent
  },
  {
    path: 'creatoperations',
    component: CreatoperationsComponent
  },
  {
    path: 'createcategoris',
    component: CreatecategorisComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
