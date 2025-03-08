import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true, // ✅ Required for Standalone Components
  imports: [RouterOutlet, FormsModule], // ✅ Import FormsModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Helloworld';
  message: string = "Hello from BridgeLabz";
  imageURL: string = "assets/logoBridge.jpg";
  userName: string = ""; 
  errorMessage: string = "";

  // ✅ Function to validate user input
  validateUserName(): void {
    const namePattern = /^[A-Z][a-zA-Z]{2,}$/; // ✅ Must start with a capital letter, min 3 characters
    if (!this.userName.match(namePattern)) {
      this.errorMessage = "Name must start with a capital letter and have at least 3 characters!";
    } else {
      this.errorMessage = "";
    }
  }

  // ✅ Function to open BridgeLabz in a new tab
  openBridgelabzSite(): void {
    window.open("https://www.bridgelabz.com", "_blank");
  }
}
