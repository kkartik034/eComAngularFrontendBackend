import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CategoryService } from '../../../servies/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categories-form',
  imports: [FormsModule,MatInputModule,MatButtonModule],
  templateUrl: './categories-form.component.html',
  styleUrl: './categories-form.component.scss'
})
export class CategoriesFormComponent {
name!:string;
router= inject(Router);
categoryService = inject(CategoryService);
route= inject(ActivatedRoute);
isEdit = false;
id!:string;
ngOnInit(){
  this.id = this.route.snapshot.params["id"];
  
  if(this.id){
    this.isEdit = true;
    this.categoryService.getCategoryById(this.id).subscribe((result:any)=>{
      console.log(result); 
      this.name = result.name;
    })
  }

}
add(){
  console.log(this.name);
  this.categoryService.addCategory(this.name).subscribe((result:any)=>{
    alert("Category added");
    this.router.navigateByUrl("/admin/categories");
  })
}

update(){
  console.log(this.name);
  this.categoryService.updateCategory(this.id,this.name).subscribe((result:any)=>{
    alert('Category updated');
    this.router.navigateByUrl("/admin/categories");
  });
}
}