import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  public couter = 0;

  constructor() {}

  public binhPhuong(n: number): number {
    return n * n;
  }
  public getCounter(): number {
    return this.couter;
  }
  public setCouter(n: number): void {
    this.couter = n;
  }
  public submitData(data: string): void {
    console.log('Gửi data lên server, Data: ', data);
  }
}
