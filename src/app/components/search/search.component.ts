import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/classes/repository';
import { User } from 'src/app/classes/user';
import { HttpsearchService } from 'src/app/services/httpsearch.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  user!: User;
  repos: Repository|any;
  username:string|any;
  constructor(private httpService:HttpsearchService) { }

  updateProfile(){
    this.httpService.findProfile(this.username)

    this.httpService.getUserDetails()
    this.user = this.httpService.user

    this.httpService.getUserRepos().subscribe(output=>{
      this.repos = output;
    })
  }

  ngOnInit(): void {
  }

}
