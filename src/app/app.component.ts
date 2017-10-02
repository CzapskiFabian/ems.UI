import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(private http: Http) {
  }

  public ngOnInit(): void {
    this.getServers()
    .subscribe(
        (servers: any[]) => console.log(servers),
        (error) => console.log(error)
      );
    console.log(this.getServers());
  }

  getServers() {
    return this.http.get('http://localhost:56750/api/values')
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      )
      .catch(
        (error: Response) => {
          console.log(error);
          return Observable.throw('Something went wrong');
        }
      );
  }
}
