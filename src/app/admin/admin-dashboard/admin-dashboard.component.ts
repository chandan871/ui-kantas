import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private  router: Router, private ngxLoader: NgxUiLoaderService) { this.router.navigateByUrl('/admin/profile');
  }

  ngOnInit() {
    this.ngxLoader.start();
    setTimeout(() => {
      this.ngxLoader.stop(); // stop foreground spinner of the master loader with 'default' taskId
    }, 1000);
  }

}
