import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sm-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number, name: string };
  paramsSubscription: Subscription;
  a: string;
  b: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // ? retrieving query params and fragments
    // console.log('queryParams:', this.route.snapshot.queryParams);
    // console.log('fragment:', this.route.snapshot.fragment);
    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this.a = queryParams['admin'];
      }
    );
    this.route.fragment.subscribe(
      (fragment: string) => {
        this.b = fragment;
      }
    );

    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    // to be able to react to subsequent changes in url (params)
    // from clicking links with [routerLink]
    // observables are a 3rd party package that allow you to work with 
    // asynchronous tasks -> subscribe to some event which might happen in future
    // you might simply use a snapshot if you know your component will 100% of
    // the time be re-created when it is reached
    this.paramsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.user.id = params['id'];
          this.user.name = params['name']
        }
      );
  }

  // note: Angular does this behind the scenes in this case
  // but in case of custom subscriptions, important to unsubscribe!
  ngOnDestroy() {
    console.log('UserComponent ngOnDestroy()');
    this.paramsSubscription.unsubscribe();
  }
}