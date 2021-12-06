import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/common/services/product.service';
import { MatTableDataSource} from "@angular/material/table";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  private isLoading = true;
  private data:any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {

    setTimeout(() => {
      this.productService.getProducts().subscribe((data) => {
        console.log('data33333 is', data);
        this.data = data[0];
        // this.gridSystemObj.grid.data = new MatTableDataSource(this.productData);
        this.isLoading = false;
      });
    }, 0);
  }

}
