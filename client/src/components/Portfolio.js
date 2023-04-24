import React from 'react';

function Portfolio() {
    return(
        <section class="card" id="mc01">
            <aside class="mc-aside" id="a-mc01">
              <div class="middle">
                <div class="inside">
                  <h2>{'>'} 20 PRINT "Portfolio"</h2>
                </div>    
              </div>
            </aside>
            <section id="Portfolio_Carousel" class="text">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="10000">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-name="Social Media Back End | Module 18">
                        <img class="d-block w-100" src="./assets/images/SM_BE_insomia.JPG" alt="Insomnia Routes screenshot"/>
                        <div class="carousel-caption text-center title">
                            A Social Media application backend server written with Node.js, Express, and MongoDB.
                            <br/>
                            <a href="https://github.com/Jacob-Jeffries/social_backend" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                        </div>
                        </div>

                        <div class="carousel-item" data-name="Rate My Pet | Project 2">
                        <img class="d-block w-100" src="./assets/images/Petstar.png" alt="Petstar screenshot"/>
                        <div class="carousel-caption text-center title">
                            <a href="https://murmuring-garden-13240.herokuapp.com/" target="_blank" rel="noopener noreferrer">PetStar</a> a fullstack app using Node.js, Express, Sequelize, MySQL, Handlebars, with user login & authentication, and image upload. Note: due to Heroku's ephemeral data storage, uploaded images are not persistent.
                            <br/>
                            <a href="https://github.com/Jacob-Jeffries/rmp" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                        </div>
                        </div>

                        <div class="carousel-item" data-name="E-commerce Sequelize Backend API | Module 13">
                        <img class="d-block w-100" src="./assets/images/E-Commerce.JPG" alt="E-commerce screenshot"/>
                        <div class="carousel-caption text-center title">
                            This E-commerce backend application is an exercise in using Sequelize as an ORM, and structuring a backend Express server to use Sequelize in standard CRUD routes to a MySQL DB.
                            <br/>
                            <a href="https://github.com/Jacob-Jeffries/m13c" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                        </div>
                        </div>

                        <div class="carousel-item" data-name="Employee Management System  | Module 12">
                        <img class="d-block w-100" src="./assets/images/EMS.JPG" alt="Employee Management System screenshot"/>
                        <div class="carousel-caption text-center title">
                            This employee management system is a CLI application allows a business owner to manage their staff. They can create new roles and departments in the company and then add new employees to those roles, as well as updating existing employee roles. Programmed in Node.js, MySQL, and with command line data entry using the Inquirer package. 
                            <br/>
                            <a href="https://github.com/Jacob-Jeffries/m12c" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                        </div>
                        </div>

                        <div class="carousel-item" data-name="Note Taker App  | Module 11">
                        <img class="d-block w-100" src="./assets/images/noteTaker.png" alt="Note Taker App Screenshot"/>
                        <div class="carousel-caption text-center title">
                            <a href="https://powerful-island-83683.herokuapp.com/" target="_blank" rel="noopener noreferrer">Note Taker</a> is a small application designed to take user input and save it to a local JSON file.
                            <br/>
                            <a href="https://github.com/Jacob-Jeffries/m11c" target="_blank" rel="noopener noreferrer" >GitHub Repo</a>
                        </div>
                        </div>

                        <div class="carousel-item" data-name="Team Builder CLI  | Module 10">
                        <img class="d-block w-100" src="./assets/images/lotr_team.png" alt="Team Builder App Screenshot"/>
                        <div class="carousel-caption text-center title">
                            Team Builder is a CLI application helps to organize a working team. Once organized, the application generates an HTML file that contains the team's contact emails, along with unique attributes for each type of employee (Manager, Engineer, Intern). Written with Node.js, Jest, & Inquirer.
                            <br/>
                            <a href="https://github.com/Jacob-Jeffries/m10c" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                        </div>
                        </div>

                        <div class="carousel-item" data-name="README Builder CLI  | Module 9">
                        <img class="d-block w-100" src="./assets/images/cli_readme.jpg" alt="Team Builder App Screenshot"/>
                        <div class="carousel-caption text-center title">
                            README builder is a node.js - based CLI that takes user input and generates a custom, professional, README.md file. By using this app, you can avoid typing a markdown README file each time you need it.
                            <br/>
                            <a href="https://github.com/Jacob-Jeffries/m9c" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                        </div>
                        </div>

                        <div class="carousel-item" data-name="MiTrip  | Project 1">
                        <img class="d-block w-100" src="./assets/images/MiTrip.png" alt="MiTrip App Screenshot"/>
                        <div class="carousel-caption text-center title">
                            <a href="https://jacob-jeffries.github.io/MiTrip/" target="_blank" rel="noopener noreferrer">MiTrip</a> is a web application intended to provide driving direction within the continental US as well as showing the current weather conditions in both the starting and destination city. Written with HTML, CSS, & Javascript to connect to third party API's. Note: the MapBox API key has been disabled due to costs.
                            <br/>
                            <a href="https://github.com/Jacob-Jeffries/MiTrip" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                        </div>
                        </div>

                        <div class="carousel-item" data-name="Daily Scheduler  | Module 5">
                        <img class="d-block w-100" src="./assets/images/Scheduler.png" alt="Scheduler App Screenshot"/>
                        <div class="carousel-caption text-center title">
                            <a href="https://jacob-jeffries.github.io/m5c/" target="_blank" rel="noopener noreferrer">Daily Scheduler</a> is a small web app meant to organize a daily todo list. Entries can be made by the hour into the text area of each time block, saved, and recalled from local storage upon page reload. This simple app using Dayjs and local storage. Written with HTML, CSS, and JavaScript.
                            <br/>
                            <a href="https://github.com/Jacob-Jeffries/m5c" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                        </div>
                        </div>

                        <div class="carousel-item" data-name="Quiz  | Module 4">
                        <img class="d-block w-100" src="./assets/images/quiz.png" alt="Quiz App Screenshot"/>
                        <div class="carousel-caption text-center title">
                            <a href="https://jacob-jeffries.github.io/m4c/" target="_blank" rel="noopener noreferrer">Timed Quiz</a> is a web app designed to present the user with a short JS code assessment quiz, monitored by a count down timer. Written with HTML, CSS, and JavaScript.
                            <br/>
                            <a href="https://github.com/Jacob-Jeffries/m4c" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                        </div>
                        </div>

                        <div class="carousel-item" data-name="Password Gen  | Module 3"> 
                        <img class="d-block w-100" src="./assets/images/passgen.png" alt="Password Generator App Screenshot"/>
                        <div class="carousel-caption text-center title">
                            <a href="https://jacob-jeffries.github.io/m3c/" target="_blank" rel="noopener noreferrer">Password generator</a> is a simple web application that can generate a random password between 8 & 128 characters that can optionally include lower case letters, upper case letters, numerals, and select special characters. Written with HTML, CSS, and JavaScript - using prompts & alerts as input. 
                            <br/>
                            <a href="https://github.com/Jacob-Jeffries/m3c" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                        </div>
                        </div>

                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span></a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span></a>
                    </div>
                </div>
            </section>
        </section>
    )
};