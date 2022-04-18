import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/classes/repository';
import { User } from 'src/app/classes/user';
import { HttpserviceService } from 'src/app/services/httpservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user!: User;
  repos: Repository|any;
  username:string|any;

  constructor(private httpService:HttpserviceService) {

  }



  ngOnInit() {
   

    this.httpService.getUserDetails()
    this.user = this.httpService.user

    this.httpService.getUserRepos().subscribe(output=>{
      this.repos = output;
    })

  }

}
