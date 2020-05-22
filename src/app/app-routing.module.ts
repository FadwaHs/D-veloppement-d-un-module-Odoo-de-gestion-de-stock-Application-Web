import { NgModule } from '@angular/core';
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
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
