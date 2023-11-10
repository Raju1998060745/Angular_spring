export class Survey {
    firstName: string = '';
    lastName: string = '';
    address: string= '';
    city: string = '';
    state: string = '';
    zip: string = '';
    likes: {
      students: boolean;
      location: boolean;
      // Add other checkboxes here
    };
    interest: string;
    recommendation: string;
    comments: string;
  
    constructor() {
      this.likes = {
        students: false,
        location: false
        // Initialize other checkboxes here
      };
      this.interest = '';
      this.recommendation = 'Very Likely'; // Set a default value
      this.comments = '';
    }
  }
  