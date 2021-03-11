import { crudapi } from './crudapi';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {
  tmpobj: any;

  constructor(private alertCtrl: AlertController ,
    private getcrud: crudapi,
    public activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit() {

    this.getcrud.readData().subscribe(data => {
    this.tmpobj = data.map(e => {
    return {
      id: e.payload.doc["id"],
      isEdit: false,
      name: e.payload.doc.data()['name'.toString()],
      img: e.payload.doc.data()['img'.toString()],
      Skills1: e.payload.doc.data()['Skills1'.toString()],
      Skills2: e.payload.doc.data()['Skills2'.toString()],
      Skills3: e.payload.doc.data()['Skills3'.toString()],
      Detail: e.payload.doc.data()['Detail'.toString()],
  };
 });
  console.log(this.tmpobj);

});

}
}
