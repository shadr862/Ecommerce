import { Component, inject, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth-service/auth.service';
import { SearchService } from '../services/search-service/search.service';



@Component({
  selector: 'app-app-nav',
  templateUrl: './app-nav.component.html',
  styleUrl: './app-nav.component.css',
  imports: [
    RouterOutlet,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,

  ]
})
export class AppNavComponent implements OnInit {

  searchfilter = new FormControl('');
  isCollapsed = false;
  showAllCategories = false;
  showDashboard = false;
  showProducts=false;
  isAdmin=false;
  isLoggedIn=false;
  firstName ='';
  userId='';

  categories = [
    { name: 'Beauty', link: '/dashboard/category/beauty-products' },
    { name: 'Clothing', link: '/dashboard/category/clothings-products' },
    { name: 'Groceries', link: '/dashboard/category/groceries-products' },
    { name: 'Furniture', link: '/dashboard/category/furniture-products' },
    { name: 'Fragrances', link: '/dashboard/category/fragrances-products' },
    { name: 'Others', link: '/dashboard/category/electronics-and-jewelry-products' }
  ];


  private breakpointObserver = inject(BreakpointObserver);

  constructor(private router: Router,
    public authService: AuthService,
    private SearchService: SearchService) { }

  ngOnInit(): void {

    this.isLoggedIn=localStorage.getItem('isLoggedIn')==='true';
    this.isAdmin=localStorage.getItem('isAdmin')==='true';
    this.firstName=localStorage.getItem('firstName')!
    this.userId=localStorage.getItem('userId')!
    this.searchfilter.valueChanges.subscribe(value => {
      this.SearchService.setSearch(value || '');
      this.router.navigate(['/dashboard/search']);
    });
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );



  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }

  // Toggle function
  toggleAllCategories(): void {
    this.showAllCategories = !this.showAllCategories;
  }
  toggleAllDashboard(): void {
    this.showDashboard = !this.showDashboard;
  }
  toggleAllProducts()
  {
    this.showProducts=!this.showProducts;
  }

  logout() {
    this.authService.clearUser();
    localStorage.clear();
    this.isAdmin=false;
    this.isLoggedIn=false;
    this.firstName='';
    this.router.navigate(['/products']);
  }



}
