import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service/auth.service';
import { OrderService } from '../services/order-service/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  orderedList: any;
  user = {
  fullName: localStorage.getItem('firstName') + " " + localStorage.getItem('lastName'),
  bio: 'Hi there! Glad to have you here. Feel free to explore my profile.',
  avatarUrl: 'https://i.pravatar.cc/150?img=3'
};


  constructor(
    private orderService: OrderService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.orderService.getOrderListBYUserId(this.authService.userId).subscribe((data: any) => {
      this.orderedList = data;
    });
  }

  viewProductList(productList: any) {
    this.router.navigate(['/dashboard/ordered-product-dispaly'], { state: { products: productList } });
  }
}
