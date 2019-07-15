import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title : "Mon premier post",
      content: "Trabeae in Constantini Cerealis vita sui vicensimo anno cum atque inmaturo Veternensi quoque trabeae nono vicensimo nobilitarunt imperatoris interitu apud.",
      loveIts: 0,
      created_at : new Date()
    },
    {
      title : "Mon deuxieme post",
      content: "Trabeae in Constantini Cerealis vita sui vicensimo anno cum atque inmaturo Veternensi quoque trabeae nono vicensimo nobilitarunt imperatoris interitu apud.",
      loveIts: 0,
      created_at : new Date()
    },
    {
      title : "Un autre post",
      content: "Trabeae in Constantini Cerealis vita sui vicensimo anno cum atque inmaturo Veternensi quoque trabeae nono vicensimo nobilitarunt imperatoris interitu apud.",
      loveIts: 0,
      created_at : new Date()
    }
  ];
  constructor() {}
}
