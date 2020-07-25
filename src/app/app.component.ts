import { Component, OnInit } from '@angular/core';
import { Subject, interval, timer, from, of } from 'rxjs';
import { map, delay, bufferTime, switchMap, mergeMap, concatMap } from 'rxjs/operators';
import { icon, latLng, marker, tileLayer, TileLayer, Marker } from 'leaflet';
import { AngularFirestore } from '@angular/fire/firestore';

interface User {
  avatar: string;
  bio: {
    location: {
      lat: number,
      lon: number,
    }
  };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private streetMaps = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  public zoom = 3;
  public center = latLng([ 48.8566969, 2.3514616 ]);
  public layers: (TileLayer | Marker)[] = [ this.streetMaps ];

  constructor(firestore: AngularFirestore) {
    firestore.collection<User>('users').stateChanges([ 'added', 'modified' ])
      .pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as User;
          const id = a.payload.doc.id;
          return { id, ...data };
        })),
        map((users) => users.filter((user) => user.bio.location)),
        mergeMap((user) => from(user)),
        concatMap((user) => of(user).pipe(delay(2000)))
      )
      .subscribe((user) => {
        // compare existing markers against new
        console.log('USER', user);

        const point = marker([ user.bio.location.lat, user.bio.location.lon ], {
          icon: icon({
            iconSize: [ 100, 100 ],
            iconAnchor: [ 13, 0 ],
            iconUrl: user.avatar,
          })
        });
        this.zoom = 7;
        this.center = latLng([ user.bio.location.lat, user.bio.location.lon ]);
        this.layers = [
          ...this.layers,
          point
        ];

      });
  }

  ngOnInit() {

  }
}
