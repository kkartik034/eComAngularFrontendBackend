import { Component, inject } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { Product } from '../../types/product';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
customerService= inject (CustomerService);
newProducts:Product[]=[];
featuredProducts:Product[] =[];
ngOnInit(){
  this.customerService.getfeaturedProducts().subscribe((result) => {
    this.featuredProducts = result;
    console.log(this.featuredProducts);
  })
  
  this.customerService.getNewProducts().subscribe((result) => {
    this.newProducts = result;
    console.log(this.newProducts);
  })

}
}
