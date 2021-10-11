import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.sass']
})
export class HeroComponent implements OnInit {
  heroTitle: string;
  heroPText: string;
  heroBtnText: string;
  heroUrl: string;

  constructor() {
    this.heroTitle = "Nassfeld Ski-Resort Hermagor Presseger See";
    this.heroPText = "Winter in the Nassfeld-Pressegger See region is winter for all senses. Winter full of action and pleasure. Full of relaxation and family fun. And that’s no wonder: After all, the World of Mountains & Lakes is one big, glistening canvas for colourful winter adventures.";
    this.heroBtnText = "Learn More";
    this.heroUrl = "https://www.nassfeld.at/en/Winter-World/";


  }

  ngOnInit(): void {
  }

}
