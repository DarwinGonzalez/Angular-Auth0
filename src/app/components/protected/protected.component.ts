import { Component, OnInit } from "@angular/core";
import { AuthService } from "./../../services/auth.service";

@Component({
  selector: "app-protected",
  templateUrl: "./protected.component.html",
  styles: []
})
export class ProtectedComponent implements OnInit {
  public profile: any;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
      console.log(this.profile);
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
        console.log(this.profile);
      });
    }
  }
}
