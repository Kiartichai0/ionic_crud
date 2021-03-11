import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';

@Component({
  selector: 'app-ch',
  templateUrl: './ch.page.html',
  styleUrls: ['./ch.page.scss'],
})
export class ChPage implements OnInit {
  ListMov: any = [
    {
      name: "Jager",
      img: "https://media.altchar.com/prod/images/940_530/gm-997a1f1a-314c-4b30-b175-c84b172571d2-jager.jpeg",
      cap:"Marius 'Jäger' Streicher (pronounced Yay-ger)",
      pop:" 416-C Carbine - Assault Rifle " ,
      re:" Anchor ",

    },
    {
      name: "Ash",
      img: "https://cdn1.dotesports.com/wp-content/uploads/2020/11/17123119/Screenshot-2020-11-17-113101.jpg",
      cap:"Eliza 'Ash' Cohen is an Attacking Operator featured in Tom Clancy's Rainbow Six Siege. She is the leader of Forward Operations in Rainbow..",
      pop:" R4-C - Assault Rifle " ,
      re:" Flanker ",


    },
    {
      name: " Rook ",
      img: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/rainbow-six/4/4f/R6S_Rook.jpg?width=1280",
      cap:"Julien 'Rook' Nizan is a Defending Operator featured in Tom Clancy's Rainbow Six Siege.",
      pop:" P90 - Submachine Gun " ,
      re:" Supporter ",


    },
    {
      name: "Caveira",
      img: "https://www.pcgamesn.com/wp-content/uploads/2019/01/caveira-580x334.jpg",
      cap:"Taina 'Caveira' Pereira is a Defending Operator featured in Tom Clancy's Rainbow Six Siege. She was introduced in the Operation Skull Rain expansion alongside Capitão.",
      pop:" M12 - Submachine Gun " ,
      re:" Roamer ",


    },
    {
      name: "Doc",
      img: "data:image/jpeg;base64,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",
      cap:"Gustave 'Doc' Kateb is a Defending Operator featured in Tom Clancy's Rainbow Six Siege.",
      pop:" MP5 - Submachine Gun " ,
      re:" Supporter ",


    },
    {
      name: "Flores",
      img: "https://cdn.mos.cms.futurecdn.net/yi26LqbTf465dfgSewByY3-1200-80.jpg",
      cap:"Comming Soon",
      //pop:" Animetion " ,
      //re:"Review: 7.5",


    },
  
  ]
  constructor(public activatedRoute : ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

}
