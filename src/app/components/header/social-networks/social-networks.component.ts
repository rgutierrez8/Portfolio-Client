import { Component, OnInit } from '@angular/core';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social-networks',
  templateUrl: './social-networks.component.html',
  styleUrls: ['./social-networks.component.css']
})
export class SocialNetworksComponent implements OnInit {

  facebook = faFacebook;
  facebookUrl = "https://www.facebook.com";
  linkedin = faLinkedin;
  linkedinUrl = "https://www.linkedin.com/in/rgutierrez8/";
  github = faGithub;
  githubUrl = "https://github.com/rgutierrez8";

  constructor() { }

  ngOnInit(): void {
  }

}
