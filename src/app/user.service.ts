import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }
  apiUrl="https://localhost:44348/api/userdata";

  private apiUrl1 = 'https://localhost:44348/api';
 
  verify(userdata:any){
    return this.http.post(this.apiUrl+'/authenticate/',userdata);
  }
  create(user:User): Observable<any> {
  
    return this.http.post<any>(this.apiUrl,user);
  
  }  

  updateUserDetails(id:number, user: any): Observable<any> {

    const updateUrl = `${this.apiUrl}/${id}`; 

    return this.http.put(updateUrl, user);
  }
 
 
  update(user:any, id:number){
    return this.http.put(this.apiUrl+'/'+id,user);
  }
  updateUser(id:number, user: any):Observable<any> {
    return this.http.put(this.apiUrl+'/'+id, user);
  }
  getUser(id:number):Observable<any> {
    return this.http.get(this.apiUrl+'/'+id);
  }
  getUser1(id:number):Observable<any> {
    return this.http.get(this.apiUrl1+'/'+id);
  }
  getuserbyemail(useremail:string):any{
    return this.http.get(this.apiUrl+'/by-email/'+useremail)
  }
  uploadImageAndDetails(data: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl1}/ImageProof`, data);
  }
  
}
