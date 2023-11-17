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
    campus: boolean;
    Atmosphere: boolean;
    Sports: boolean;
    DormRooms: boolean;
  };
  interest: string;
  recommendation: string;
  comments: string;

  constructor() {
    this.likes = {
      students: false,
      location: false,
      campus: false,
      Atmosphere: false,
      Sports: false,
      DormRooms: false
    };
    this.interest = '';
    this.recommendation = 'Very Likely'; // Set a default value
    this.comments = '';
  }
}
