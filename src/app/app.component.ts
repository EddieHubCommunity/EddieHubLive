import { Component, OnInit } from '@angular/core';
import { from, of, interval } from 'rxjs';
import { map, delay, mergeMap, concatMap, tap } from 'rxjs/operators';
import { icon, latLng, marker, tileLayer, TileLayer, Marker } from 'leaflet';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';

interface User {
  username: string;
  avatar: string;
  roles: string[];
  bio: {
    description: string;
    github: string;
    location: {
      display_name: string;
      address: {
        city: string;
        country: string;
      };
      lat: number,
      lon: number,
    };
  };
  updatedAt: firebase.firestore.Timestamp;
}

interface Event {
  avatar: string;
  username: string;
  type: string;
  createdAt: firebase.firestore.Timestamp;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  private streetMaps = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
  private isActive = false;

  public icons = { regular: 'user' };
  public zoom = 2;
  public center = latLng([ 48.8566969, 2.3514616 ]);
  public layers: (TileLayer | Marker)[] = [ this.streetMaps ];
  public users: User[] = [];
  public eventStream: Event[] = [];

  constructor(angularFirestore: AngularFirestore) {
    angularFirestore
      .collection<Event>('eventStream', (ref) => ref.orderBy('createdAt', 'asc'))
      .stateChanges([ 'added' ])
        .pipe(
          map(actions => actions.map(a => {
            const data = a.payload.doc.data() as Event;
            const id = a.payload.doc.id;
            return { id, ...data };
          })),
          mergeMap((event) => from(event)),
          concatMap((event) => of(event).pipe(delay(500))),
          tap((event) => console.log('EVENT', event))
        )
        .subscribe((event) => this.eventStream.unshift(event));

    angularFirestore.collection<User>('users', (ref) => ref.orderBy('updatedAt', 'asc'))
      .stateChanges([ 'added', 'modified' ])
        .pipe(
          map(actions => actions.map(a => {
            const data = a.payload.doc.data() as User;
            const id = a.payload.doc.id;
            return { id, ...data };
          })),
          map((users) => users.filter((user) => user.bio.location)),
          mergeMap((user) => from(user)),
          concatMap((user) => of(user).pipe(delay(1000)))
        )
        .subscribe((user) => {
          this.isActive = true;
          this.users = this.users.filter((u) => u.username !== user.username);
          this.users.unshift(user);
          console.log('USER', user);

          this.zoom = 7;
          this.center = latLng([ user.bio.location.lat, user.bio.location.lon ]);
          this.layers = [
            this.streetMaps,
            ...this.users.map((u) => marker([ u.bio.location.lat, u.bio.location.lon ], {
              icon: icon({
                iconSize: [ 100, 100],
                iconAnchor: [ 50, 50 ],
                iconUrl: u.avatar || 'https://raw.githubusercontent.com/eddiejaoude/eddiejaoude.github.com/master/img/chibi.png',
              })
            }))
          ];

      });

    interval(5000)
        .subscribe(() => {
          if (!this.isActive) {
            this.zoom = 2;
            this.center = latLng([ 48.8566969, 2.3514616 ]);
            this.layers = [
              this.streetMaps,
              ...this.users.map((u) => marker([ u.bio.location.lat, u.bio.location.lon ], {
                icon: icon({
                  iconSize: [ 30, 30],
                  iconAnchor: [ 50, 50 ],
                  iconUrl: u.avatar || 'https://raw.githubusercontent.com/eddiejaoude/eddiejaoude.github.com/master/img/chibi.png',
                })
              }))
            ];
          }
          this.isActive = false;
        });
  }

  ngOnInit() {

  }
}
