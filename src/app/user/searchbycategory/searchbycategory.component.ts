import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BackEndServiceService } from 'src/app/back-end-service.service';

@Component({
  selector: 'app-searchbycategory',
  templateUrl: './searchbycategory.component.html',
  styleUrls: ['./searchbycategory.component.scss']
})
export class SearchbycategoryComponent {
  constructor(private backendService: BackEndServiceService, private fb: FormBuilder) { }
  
    Dataarray: any[] = [];
    Category:any[]=[];
    categorylist: any[] = [];  
    a:any;
  
    SearchGroup = this.fb.group({
    categoryName: [''],
    description:['']
  
    });
  
    ngOnInit() {     
      this.getCategory();
    }
  
    onChange() {        
      console.log(this.SearchGroup.value.categoryName);
      for (let index = 0; index < this.categorylist.length; index++) {
        if (this.SearchGroup.value.categoryName === this.categorylist[index].categoryName) {
          console.log(this.categorylist[index])
          this.Dataarray.push(this.categorylist[index]);
          this.backendService.getcategorysearch().subscribe((result) => {
          this.categorylist=result;});
           
        }
        console.log(this.Dataarray);
         
      }  
    }  
    getCategory() {
      // this.backendService.GetCategorySearchData().subscribe((result) => {
      //   this.categorylist = result;
      //   console.log(result);
      // });
      this.backendService.getcategorysearchdata().subscribe((result) => {
        this.categorylist=result;}); 
      console.log(this.categorylist);
      //this.backendService.getcategorydata().subscribe((result) => {
      //this.categorylist=result;});   
    }

}
