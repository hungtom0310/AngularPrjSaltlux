import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public name = 'Hưng';
  public age = 40;
  public traiCay = ['Táo', 'Nho', 'Cam', 'Quýt', 'Ổi'];
  public traiCay2 = [
    { ten: 'Táo', gia: 12000, sale: true },
    { ten: 'Nho', gia: 13000, sale: false },
    { ten: 'Cam', gia: 15000, sale: true },
    { ten: 'Quýt', gia: -1000, sale: true },
    { ten: 'Ổi', gia: 23000, sale: false },
  ];

  constructor() {}

  public ngOnInit(): void {
    console.log('trai cay: ', this.traiCay);
  }

  public resetName(): void {
    console.log('resetName');
    this.name = '';
  }
}
