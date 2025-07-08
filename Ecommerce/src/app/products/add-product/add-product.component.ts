import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../services/product-service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  product: any;
  productForm!: FormGroup;
  selectedFile: File | null = null;
  previewUrl: string | ArrayBuffer | null = null;

  constructor(private productService: ProductService,
    private fb: FormBuilder,
    private route: Router) { }

  ngOnInit(): void {
    // Initialize the form with empty/default values first
    this.productForm = this.fb.group({
      id: [{ value: '', disabled: true }],
      title: ['', [Validators.required, Validators.maxLength(100)]],
      description: ['', Validators.required],
      category: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      stock: [0, [Validators.required, Validators.min(0)]],
      quantity: [1, [Validators.required, Validators.min(1)]],
      thumbnail: [{ value: '', disabled: true }],  // disable thumbnail input if needed
    });

  }



  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }



  onSubmit() {
    if (this.productForm.valid) {
      if (this.productForm.invalid) return;

  const formData = new FormData();
  formData.append('title', this.productForm.get('title')?.value);
  formData.append('description', this.productForm.get('description')?.value);
  formData.append('category', this.productForm.get('category')?.value);
  formData.append('price', this.productForm.get('price')?.value);
  formData.append('stock', this.productForm.get('stock')?.value);
  formData.append('quantity', this.productForm.get('quantity')?.value);

  if (this.selectedFile) {
    formData.append('thumbnailImage', this.selectedFile);
  }
      this.productService.addProduct(formData).subscribe(() => {
        this.productService.triggerRefresh();
        this.route.navigate(['/dashboard/products']);
      })

    }
  }

}
