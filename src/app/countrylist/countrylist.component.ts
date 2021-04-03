import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CountrydataserviceService } from '../countrydataservice.service';

@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html',
  styleUrls: ['./countrylist.component.css']
})
export class CountrylistComponent implements OnInit {
   countrylist: any;
   constructor(private http: HttpClient, private serive:CountrydataserviceService) { }

  ngOnInit(): void {
    this.http.get('http://vocab.nic.in/rest.php/country/json')
    .subscribe(Response => {
      this.countrylist=Response;
      console.log(this.countrylist);
    });
  }

  onclicklisting(){
    alert("clicked");
  }

}
