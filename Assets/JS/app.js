console.log('JavaScript File Attached');

const grid = $('#grid-container');

var projects = [
  {
    Project_Title: 'The Train App',
    Project_Description: 'This application allows you to save information to the firebase database, and calculates the next train arrival for all trains listed.',
    Project_Image: 'Assets/Images/Train-App.png',
    Project_Github_Link: ' https://itsyaboyfish.github.io/The-Train-App/'
  },
  {
    Project_Title: '2',
    Project_Description: '',
    Project_Image: '',
    Project_Github_Link: ''
  },
  {
    Project_Title: '3',
    Project_Description: '',
    Project_Image: '',
    Project_Github_Link: ''
  }
]

for (var i = 0; i < projects.length; i++) {
  console.log(projects[i].Project_Title);
}
