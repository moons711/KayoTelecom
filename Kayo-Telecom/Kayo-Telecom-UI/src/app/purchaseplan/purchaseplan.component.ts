import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plan } from '../model/plan.model';
import { PlanService } from '../services/plan.service';
import { SubscriptionService } from '../services/subscription.service';


@Component({
  selector: 'app-purchaseplan',
  templateUrl: './purchaseplan.component.html',
  styleUrls: ['./purchaseplan.component.css']
})
export class PurchaseplanComponent implements OnInit {

  planList: Plan[] = [];

  constructor(private planService:PlanService,private subscriptionService:SubscriptionService, private router: Router) { }

  ngOnInit(): void {
    document.body.style.background = "#f4faff";
    this.planService.findAll().subscribe(data => {
      this.planList = data;
    })
  }

  addPlanToUser(planID:number): void {
    if(localStorage.getItem('loggedOn') == 'true') {
      var userID = localStorage.getItem('userID') || 0;
      this.subscriptionService.save(+userID,planID).subscribe( res => {
        this.router.navigateByUrl('/myaccount');
      });
    } else {
      this.router.navigateByUrl('/login');
    }
  }
}
