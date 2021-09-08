import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { ApiService } from 'src/app/Service/api.service';
import { ProductModel } from "../Modal/product.modal";
@Component({
  selector: 'app-productadd',
  templateUrl: './productadd.component.html',
  styleUrls: ['./productadd.component.css']
})
export class ProductaddComponent implements OnInit {

  formValue !: FormGroup;
  // product model obect cretes for the bind your data with your fields
  productobj : ProductModel = new ProductModel();

  // we need to store the data in object when we get back from server also
  // we used this in our templete
  data : any

  //Boolean values for scripting
  showadd !: boolean;
  showupdate !: boolean;
  constructor(private formbuilder: FormBuilder,
    private api : ApiService ) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      productName : [''],
      productDescription : [''],
      productRate : [''],
      productQuantity : ['']
    })
    this.getProductDetails();
  }


  postproduct(){
    this.productobj.productName = this.formValue.value.productName;
    this.productobj.productDescription = this.formValue.value.productDescription;
    this.productobj.productRate = this.formValue.value.productRate;
    this.productobj.productQuantity = this.formValue.value.productQuantity;

    this.api.postProduct(this.productobj)
    .subscribe(res=>{
      console.log(res);
      alert("Data Added Successfully");
      //once click on alert toggle it will be goes to the home page using this script.
      let rem = document.getElementById('cancel')
      rem?.click();
      this.formValue.reset();
      //Refresh the page once again after that you will be get new entry from your records
      this.getProductDetails();
    },
    err=>{
      alert("Something Wnt Wrong");
    })
  }

  // Get All Product Here
  getProductDetails(){
    this.api.getProduct()
    .subscribe(res=>{
      this.data=res;
    },
    err=>{
      alert("Something Went Wrong!!!!!!!!!!");
    })
  }

  //Edit the product
  editProduct(dd : any){
    this.showadd=false;
    this.showupdate=true;
    this.productobj.id=dd.id;
    this.formValue.controls['productName'].setValue(dd.productName);
    this.formValue.controls['productDescription'].setValue(dd.productDescription);
    this.formValue.controls['productRate'].setValue(dd.productRate);
    this.formValue.controls['productQuantity'].setValue(dd.productQuantity);
  }

  deleteProducts(dd : any){
    this.api.deleteProduct(dd.id)
    .subscribe(res=>{
      alert("Product Deleted Successfully");
      this.getProductDetails();
    })
  }

  //Update Product details
  updateProduct(){
    this.productobj.productName = this.formValue.value.productName;
    this.productobj.productDescription = this.formValue.value.productDescription;
    this.productobj.productRate = this.formValue.value.productRate;
    this.productobj.productQuantity = this.formValue.value.productQuantity;

    this.api.updateProduct(this.productobj,this.productobj.id)
    .subscribe(res=>{
      alert("Data Updated Successfully");
      //Close the form
      let rem = document.getElementById('cancel')
      rem?.click();
      this.formValue.reset();
      this.getProductDetails();
    })
  }

  clickaddProduct(){
    this.formValue.reset();
    this.showadd=true;
    this.showupdate=false;
  }
}
