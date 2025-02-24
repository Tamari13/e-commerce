import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-error',
  imports: [CommonModule, RouterModule],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent implements OnInit {

  errorCode: string = '404';
  errorMessage: string = 'Page Not Found';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.errorCode = data['errorCode'] || '404';
      this.errorMessage = data['errorMessage'] || 'Page Not Found';
    });
  }

}
