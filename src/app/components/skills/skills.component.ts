import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
  
export class SkillsComponent implements OnInit {

  constructor() { 
    let averageText = document.getElementById("average")?.textContent?.split("%")[0];
    const average = (Number(averageText) * 180) / 100;
    document.getElementById("fill")?.style.setProperty("--var-degree", `${average}deg`);
    document.getElementById("fill2")?.style.setProperty("--var-degree", `${average}deg`);
  }

  ngOnInit(): void {
    let averageText = document.getElementById("average")?.textContent?.split("%")[0];
    const average = (Number(averageText) * 180) / 100;
    document.getElementById("fill")?.style.setProperty("--var-degree", `${average}deg`);
    document.getElementById("fill2")?.style.setProperty("--var-degree", `${average}deg`);
  }

}
