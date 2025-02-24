import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FormBuilder ,  FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-admin',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  productForm : FormGroup;

  constructor(private productService : ProductService, private fb : FormBuilder) {
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      price : [0, [Validators.required, Validators.min(1)]],
      description: ['', Validators.required],
      image: ['', Validators.required],
      category: ['', Validators.required]
    })
  }


  submit(): void {
    if (this.productForm.valid) {
      const formData = new FormData();
      Object.keys(this.productForm.controls).forEach((key) => {
        formData.append(key, this.productForm.get(key)?.value);
      });

      this.productService.addProduct(this.productForm.value).subscribe(() => {
        alert('Product was added successfully!');
        this.productForm.reset();
      });
    }
  }
}
