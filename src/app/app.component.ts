import { Component, ElementRef, AfterViewInit, OnInit, NgZone, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable,BehaviorSubject } from 'rxjs/Rx';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/filter';

import { useAnimation, transition, trigger, group, query } from '@angular/animations';

import { duration, slide, slideStagger, to, from, fadeIn, go } from './shared/animations';

import { RouteCommsService } from './shared/route-comms.service';

import { CanvasGrid } from '../assets/jr_grid/canvasGrid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimation', [
      transition(':enter', []),
      transition('home=>*', group([
        query(':enter', useAnimation(slide, {params: { from: go.down }}), { optional: true }),
        query(':leave', useAnimation(slide, {params: { to: go.left }}), { optional: true })
      ])),
      transition('*=>home', group([
        query(':enter', useAnimation(slide, {params: { from: go.left }}), { optional: true }),
        query(':leave', useAnimation(slide, {params: { to: go.right }}), { optional: true })
      ])),
      transition('about<=>folio', group([
        query(':enter', useAnimation(slide, {params: { from: go.down }}), { optional: true }),
        query(':leave', useAnimation(slide, {params: { to: go.up }}), { optional: true })
      ])),
    ]),
    trigger('nav', [
      transition(':enter', fadeIn),
      transition(':leave', useAnimation(slide, to.left)),
      transition('*=>*', group([
        query('a:leave', useAnimation(slideStagger, to.left), { optional: true }),
        query('a:enter', useAnimation(slideStagger, from.left), { optional: true }),
      ])),
    ]),
  ]
})

export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild('routesContainer') container: ElementRef;
  @ViewChild('routerOutlet') outlet: RouterOutlet;

  pageSub: BehaviorSubject<string>;
  pageRef$: Observable<string>;

  appState;

  scrollPos: Number;
  grid: CanvasGrid;
  // particle js
  myStyle: object = {};
    myParams: object = {};
    width: number = 100;
    height: number = 100;
  constructor(
    private routerComms: RouteCommsService,
    private ngZone: NgZone,
  ) {

    this.pageSub = new BehaviorSubject<string>('');
    this.pageRef$ = this.pageSub.asObservable();

    this.appState = {
      page: '',
      isMobile: false,
      menuOpen: false,
    };

  }

  toggleSidebar() {
    console.log('toggle sidebar called');
    
    this.appState.menuOpen = !this.appState.menuOpen;
  }
  //called when find it is mobile
  closeSidebar() {
    console.log('close sidebar called');

    this.appState.menuOpen = false;
  }

  sidebarVisible() {
    console.log('sidebar visible called');
    
    const state = this.appState;
    return !state.isMobile || state.menuOpen;
  }

  siteNavVisible() {
    console.log('sitenav visible called');

    const state = this.appState;
    return state.isMobile || state.page !== 'home';
  }

  contactNavVisible() {
    console.log('contact visible called');

    const state = this.appState;
    return !state.isMobile || state.page === 'home';
  }

  updateRoute(outlet) {
    console.log('update route called');

    const ref = outlet.activatedRouteData.anim;
    this.pageSub.next(ref);
    this.closeSidebar();
    // console.log(outlet);
    
    
  }

   // inspired by https://twitter.com/johnlindquist/status/735172526083440642?lang=en
   // todo bonus = set this up as service? not needed but better organised
  scrollTo(to) {
    const from = this.container.nativeElement.scrollTop;
    // console.log( this.container.nativeElement.scrollTop); //0 at starting
    
    const multiplier = .2;

    if (Math.abs(from - to) < 1) {
      return false;
    }

    const lerp = (start, finish) => ((1 - multiplier) * start) + (multiplier * finish);
    this.scrollPos = lerp(from, to);

    requestAnimationFrame(() => this.scrollTo(to));
  }

  ngOnInit() {
    
    
    this.grid = new CanvasGrid({ target: 'jr_grid' });
    console.log(this.grid.build().play());
    
    this.ngZone.runOutsideAngular(() => this.grid.build().play());

    this.routerComms.listDimensions$.subscribe(dims => {
      this.appState.isMobile = (dims.query === 'mobile');
      // currently not pausing grid on mobile, will check performance later
      this.grid.build().play();
      this.closeSidebar();
    });
    // particlesJS.load('particles-js', 'particles.json', null);

    this.routerComms.scrollSetTo$.subscribe(pos => this.scrollTo(pos));

    this.pageRef$.subscribe((pg) => this.appState.page = pg);
// particlejs
//     this.myStyle = {
//       'position': 'fixed',
//       'width': '50%',
//       'height': '50%',
//       'z-index': -1,
//       'top': 0,
//       'left': 0,
//       'right': 0,
//       'bottom': 0,
//   };

//   this.myParams = {
//     particles: {
//         number: {
//             value: 50,
//         },
//         color: {
//             value: '#ff0000'
//         },
//         shape: {
//             type: 'circle',
//         },
// }
// };
  }


  ngAfterViewInit() {

    const container = this.container.nativeElement;
    // console.log(container);
    


    Observable.fromEvent(window, 'resize')
      .debounceTime(500)
      .subscribe(() => this.routerComms.updateDims()); // this will update the dimentions


    Observable.fromEvent(container, 'scroll')
      // only actively watching if on folio pages
      .filter(() => this.appState.page === 'folio')
      .debounceTime(150)
      .subscribe(() => this.routerComms.updateScrollPos(container.scrollTop));

  }

  
}
