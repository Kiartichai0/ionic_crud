import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  ListNews: any = [
    {
      name: "OPERATOR BALANCING",
      img: "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5njbiYMWcZreMHWLm9jWY9/9b6055f7a4f2f27a1e83ced84462cf4f/R6_DesignersNotes_Y6S1_1920X1080_Title.png",
      detail:"We started by identifying the 1-shot-DBNO mechanic as one of the main issues. The mechanic was perceived as frustrating and it did not allow us to tweak the weapon power level, so we decided to transform the CSRX 300 into a normal weapon. Now, we can modify the weapon damage and iterate until we find the sweet spot.",
      date:" Date Posted 23/2/2021 " ,
      re:" info ",
      //news:"https://genshin.mihoyo.com/en/news/detail/8683"

    },
    {
      name: "FLORES",
      img: "https://www.windowscentral.com/sites/wpcentral.com/files/styles/large/public/field/image/2021/02/rainbow-six-siege-flores.jpg",
      detail:"Year 6 first season, Operation Crimson Heist, introduces Argentinian attacker Flores, a medium speed attacker with four special drones that come loaded with explosives. Flores gets ten seconds to steer each RCE-Ratero drone into position. Afterwards the drone anchors to its location, becomes bulletproof, and explodes after a couple more seconds. Each explosion appears to have a blast radius similar to that of a nitro cell, but defenders get plenty of warning to vacate the area thanks to an audible siren that rings out when the drone anchors.",
      date:" Date Posted 23/2/2021 " ,
      re:" info ",


    },
    {
      name: " BORDER REWORK ",
      img: "https://www.pcgamesn.com/wp-content/uploads/2021/02/rainbow-six-siege-border-rework-900x506.jpg",
      detail:"Bathroom and Tellers is now a viable objective with a massively expanded Bathroom and less scope for vertical play. Waiting Room now has an interior balcony that connects Break Room to East Stairs. Archive has been opened up, making it much easier to defend against an North Balcony and Vehicle take. There are many more small revisions, but it’s also worth noting that the map is now much tidier with less debris and clutter obscuring lines of sight – hopefully this means no dying to bizarre pixel peeks.",
      date:" Date Posted 23/2/2021 " ,
      re:" info ",
    },
    {
      name:" Comming Soon Events ",
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
