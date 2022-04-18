import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod'
import { User } from '../classes/user';
import { Repository } from '../classes/repository';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

 username:string|any;
 user:User;
 repos:Repository;

 private apiKey:string 

  constructor(private http:HttpClient) {
    this.repos = new Repository("","","");
    this.user = new User("","","",0,0);
    this.username = "CodeRichBob";
    this.apiKey = environment.apiUrl
  }


  getUserDetails(){
    interface ApiResponse{
      name:string;
      description:string;
      avatar_url:string;
      html_url:string;
      followers:number;
      following:number
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>("https://api.github.com/users/" + this.username + "?access_token=" + this.apiKey).toPromise().then(output=>{
        this.user.name = output.name
        this.user.avatar_url = output.avatar_url
        this.user.html_url = output.html_url
        this.user.followers = output.followers
        this.user.following = output.following

        resolve(output)
      },
      err =>{

        reject(err)

      })
    })
    return promise
  }

  getUserRepos(){
    interface ApiResponse{
      name:string;
      description:string;
      html_url:string;
    }
    return  this.http.get<ApiResponse>("https://api.github.com/users/" + this.username + "/repos?access_token=" + this.apiKey)

  }

}
