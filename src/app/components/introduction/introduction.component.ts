import { Component } from '@angular/core';
import { faLinkedinIn, faInstagram, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent {

  faLinkedin = faLinkedinIn;
  faGithub = faGithub;
  faWeb = faGlobe;
  faInst = faInstagram;
  faTwit = faTwitter;
}
