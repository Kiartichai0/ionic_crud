import { crudapi } from './crudapi';
import { Component, OnInit } from '@angular/core';
import { AlertController, IonicRouteStrategy } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tmpcountrylist: any;

  countrylist = [
    {countryname: 'Childe', 
      countrypic: 'https://img.game8.co/3295009/47a42db3c2736ef309028ccbd3cfb5cf.png/show',
      capital: 'Bangkok'} 
    ];
  constructor(private alertCtrl: AlertController, 
    private getcrud: crudapi) { }


  ngOnInit() {
    
      this.getcrud.readData().subscribe(data => {
      this.tmpcountrylist = data.map(e => {
      return {
        id: e.payload.doc.id, 
        isEdit: false,
        mycountryname: e.payload.doc.data()['countryname'.toString()],
        myflag: e.payload.doc.data()['flag'.toString()],
        mycapital: e.payload.doc.data()['capital'.toString()],
        mypop: e.payload.doc.data()['pop'.toString()]
    };
   });
    console.log(this.tmpcountrylist);
  });
  
}

  async presentConfirm(tmpitem: any) {
    let alert = this.alertCtrl.create({
      //title: 'Confirm purchase',
      message: 'Do you want to delete ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Deleted');
            
            //this.deleteCountryItem(tmpitem);
            this.getcrud.delData(tmpitem.id); //del rowfrom DB
          }
        }
      ]
    });
    (await alert).present();
  }

  
  deleteCountryItem(tmpitem: any){
      for (let i=0; i< this.countrylist.length; i++){
          if (this.countrylist[i] == tmpitem) //found
              this.countrylist.splice(i,1);
      }//for 
  }//method

  // === EDIT ==========================================

  async presentPrompt(tmpitem: any) {
    let tmpcountry = {};

    let alert = this.alertCtrl.create({
      //title: 'Login',
      inputs: [
        {
          name: 'incountryname',
          placeholder: 'Character name',
          value: tmpitem.mycountryname
        },
        {
          name: 'inflag',
          placeholder: 'img',
          value: tmpitem.myflag
        },
        {
          name: 'incapital',
          placeholder: 'Role',
          value: tmpitem.mycapital
        },
        {
          name: 'inpop',
          placeholder: 'detail',
          value: tmpitem.mypop
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Update',
          handler: data => {
            if (data.incountryname == '' || data.inflag == ''|| 
                data.incapital == '' || data.inpop == '' )
                 //show toast 
                 return false;
            else { //update here
                tmpcountry['countryname'] = data.incountryname;
                tmpcountry['capital'] = data.incapital;
                tmpcountry['flag'] = data.inflag;
                tmpcountry['pop'] = data.inpop;
                this.getcrud.updateData(tmpitem.id, tmpcountry);

            }//else
          }//handler
        }//update
      ]
    });
    (await alert).present();
  }

  // === ADD ===========================================

  async presentPromptADD() {
    let alert = this.alertCtrl.create({
      //title: 'Login',
      inputs: [
        {
          name: 'incountryname',
          placeholder: 'Character Name'
          
        },
        {
          name: 'inflag',
          placeholder: 'img'
          
        },
        {
          name: 'incapital',
          placeholder: 'Role'
        },
        {
          name: 'inpop',
          placeholder: 'detail'
        }

      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'ADD',
          handler: data => {
            let tmpobj =  //db : inputform
              {countryname: data.incountryname, 
               capital: data.incapital, 
               flag: data.inflag, 
               pop: data.inpop
              };
              this.getcrud.createData(tmpobj);
          }//handler

        }//update
      ]
    });
    (await alert).present();
  }

}// class