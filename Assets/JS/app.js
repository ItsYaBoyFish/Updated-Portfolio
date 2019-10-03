console.log('JavaScript File Attached');

window.onload = hideInfoPage();

// Global Variables Needed for operations
const grid = $('#grid-container');
const test = $('#test');
const menuIcon = $('#menu-icon');
// Data Object for creating dynamic content. 
var projects = [
  {
    Project_Title: 'The Train App',
    Project_Description: 'This application allows you to save information to the firebase database, and calculates the next train arrival for all trains listed.',
    Project_Image: 'Assets/Images/Train-App.png',
    Project_Github_Link: ' https://itsyaboyfish.github.io/The-Train-App/'
  },
  {
    Project_Title: 'Giftastic',
    Project_Description: 'This project, we were asked to utilize the giphy api. Give the users the ability to search the api by premade buttons or make there own.',
    Project_Image: 'Assets/Images/giftastic.png',
    Project_Github_Link: ''
  },
  {
    Project_Title: 'LifeStyle',
    Project_Description: 'This was our first project. This is an event searcher using the ticketmaster and zomato api. This application also utilizes emailJS for further user interaction.',
    Project_Image: 'Assets/Images/LifeStyle.png',
    Project_Github_Link: ''
  },
  {
    Project_Title: 'Trivia Game',
    Project_Description: 'This was a fun homework assignment. We had to create a timed game that tracked score for correct answers as well as tracked the number of incorrect answers.',
    Project_Image: 'Assets/Images/TriviaGame.png',
    Project_Github_Link: ''
  }
]

//////////////////////////////////////////
//////////// EVENT LISTENERS ////////////
////////////////////////////////////////

$(document).on('click', '#viewProjects', function(e) {
  e.preventDefault();
  hideLandingPage();
  loadInfoPage();
  loadInitialCardInfo();
})

// test.on('click', function(e) {
//   e.preventDefault();
//   loadLandingPage();
//   hideInfoPage();
// })

$(document).on('click', '.menu-icon', function(e) {
  e.preventDefault();
  // Eliminate the old card.
  $(this).parent().parent().attr('style', 'display: none;');
  loadInfoCard();
});

//////////////////////////////////////////
//////// End Of EVENT LISTENERS /////////
////////////////////////////////////////



//////////////////////////////////////////
///////// Function Declarations /////////
////////////////////////////////////////

function loadLandingPage() {
  $('#landingPage').attr('style', 'display: initial;');
}; // End of Function
 
function hideLandingPage() {
  // I need to set the view to render the info page when this is clicked. 

  // I created an element tied to the parent div for the landingPage. 

  var landingPage = $('#landingPage');
  landingPage.attr('style', 'display: none;');
}; // End of Function

function loadInfoPage() {
  $('#infoPage').attr('style', 'display: initial;');
}; // End of Function

function hideInfoPage() {
  $('#infoPage').attr('style', 'display: none;');
}; // End of Function

function loadInitialCardInfo() {
  
 // Clear any elements that already exist inside of the parent element (the grid in this case).

  grid.empty();

  // We will use this function to load the information of cards dynamically. 

  // It will be done with the for loop.

  for (var i = 0; i < projects.length; i++) {

  // Div to represent the card itself. 
  var card = $('<div>');
  // Add the appropriate classes. 
  card.attr('class', 'card');
  card.attr('data-position', i);

  // Creating the image holder 
  var imageHolder = $('<img>');
  // Add the appropriate attributes.
  imageHolder.attr('class', 'img');
  imageHolder.attr('src', projects[i].Project_Image);
  // Another Div to represent the Content at the bottom of the card 
  var cardContentDiv = $('<div>');
  // Add the appropriate classes.
  cardContentDiv.attr('class', 'card-content');

  // Now you need to create the internal portions of the content div above. 
  var title = $('<h3>');
  title.text(projects[i].Project_Title);
  var icon = $('<i>');
  var text = $('<p>');
  // Now add the appropriate classes to these.
  icon.attr('class', 'menu-icon fas fa-ellipsis-h fa-2x');
  text.text(projects[i].Project_Description);

  // Now we need to append everything in the appropriate order. 

  // 1) card
    // 2) img 
    // 2) card-content
        // 3) Project Title
        // 3) Project Menu Icon
        // 3) Project Description

  // Tackle Card Content First
  cardContentDiv.append(title);
  cardContentDiv.append(icon);
  cardContentDiv.append(text);

  // Everything is in line appropriately for the card content block. 

  // Now we append the image. 
  card.append(imageHolder);
  card.append(cardContentDiv);


  // lastly append the newly created card to the grid. Thus displaying it to the end user. 
  grid.append(card);

  } // End of For Loop
 
} // End of Function

function loadInfoCard() {


  for (var i = 0; i < 1; i++) {


  // Create the div first to hold everything

  var card = $('<div>');
  // add the attributes necessary
  card.attr('class', 'infoPressed card');
  
  // Next element needed. This holds the menu.

  var menu = $('<div>');
  menu.attr('class', 'menu');

  // Next create the elements that exist inside of this div. 
  var backArrow = $('<i>');
  backArrow.attr('class', 'back-arrow fas fa-arrow-left fa-large');
  var title = $('<h3>');
  title.text(projects[i].Project_Title);
  
  // append everything that belongs in that div. 

  menu.append(backArrow);
  menu.append(title);

  // Next Div needed. 
  var technologiesUsed = $('<div>');
  technologiesUsed.attr('class', 'technologiesUsed');
  // Next create the elements that exist inside of this div.
  
  var ol = $('<ol>');
  var li1 = $('<li>');
  var icon1 = $('<i>');
  icon1.attr('class', 'fab fa-html5 fa-3x')
  li1.append(icon1);
  var li2 = $('<li>');
  var icon2 = $('<i>');
  icon2.attr('class', 'fab fa-css3-alt fa-3x');
  li2.append(icon2);
  var li3 = $('<li>');
  var icon3 = $('<i>');
  icon3.attr('class', 'fab fa-js-square fa-3x');
  li3.append(icon3);

  ol.append(li1);
  ol.append(li2);
  ol.append(li3);

  technologiesUsed.append(ol);

  // Next div needed for completion
  var descriptionDiv = $('<div>');
  descriptionDiv.attr('class', 'description');

  // Next create the elements needed inside this div.
  var text = $('<p>');
  text.text(projects[i].Project_Description);

  descriptionDiv.append(text);

  // Next div needed for completion
  var footer = $('<div>');
  footer.attr('class', 'infoFooter');
  // Create the elements that will be inside the div.
  var link1 = $('<a>');
  var icon1 = $('<i>');
  link1.attr('href', projects[i].Project_Github_Link);
  icon1.attr('class', 'infoFooter-icon fab fa-github fa-2x');
  
  var link2 = $('<a>');
  var icon2 = $('<i>');
  link2.attr('href', 'https://www.linkedin.com/in/austin-graves-192708170/');
  icon2.attr('class', 'infoFooter-icon fab fa-linkedin fa-2x');


  link1.append(icon1);
  link2.append(icon2);

  footer.append(link1);
  footer.append(link2);

  // Finally append all the necessary divs to display. 
  card.append(menu);
  card.append(technologiesUsed);
  card.append(descriptionDiv);
  card.append(footer);

  grid.prepend(card);
  };





}; // End of Function