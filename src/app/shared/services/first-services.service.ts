import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyWorker } from './../models/worker.model';

@Injectable({
  providedIn: 'root'
})
export class FirstServicesService {
  routeApi = "http://localhost:3000/workers";

  constructor(private http: HttpClient) { }

  getWorkers(): Promise<any> {
    return this.http.get(this.routeApi).toPromise();
  }

  postWorker(data: MyWorker){
    return this.http.post(this.routeApi, data).toPromise();
  }

  deleteWorker(id: number) {
    return this.http.delete(this.routeApi+"/"+id).toPromise();
  }

  editWorker(data: MyWorker) {
    return this.http.put(this.routeApi+"/"+data.id, data).toPromise();
  }

}
