

<!-- Repository Information & Links-->
<br />

![GitHub repo size](https://img.shields.io/github/repo-size/Tsebo200/ChiroHealth)
![GitHub watchers](https://img.shields.io/github/watchers/Tsebo200/ChiroHealth)
![GitHub language count](https://img.shields.io/github/languages/count/Tsebo200/ChiroHealth)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Tsebo200/ChiroHealth)
![Github Language](https://img.shields.io/github/languages/top/Tsebo200/ChiroHealth)
![Github Downloads](https://img.shields.io/github/downloads/Tsebo200/ChiroHealth/total)
<!-- ![Github node Version](https://img.shields.io/node/v/ChiroHealth) -->


<!-- HEADER SECTION -->
<h5 align="center" style="padding:0;margin:0;">Tsebo Ramonyalioa</h5>
<h5 align="center" style="padding:0;margin:0;">200200</h5>
<h6 align="center">DV200 - Term 2 | 2023</h6>
</br>
<p align="center">

  <a href="https://github.com/Tsebo200/ChiroHealth">
    <img src="/Assets/Logo1.svg" align="center" alt="src/Assets/Logo2.svg"" width="140" height="140">
  </a>
  
  <h3 align="center">ChiroHealth</h3>

  <p align="center">
    A react management system app project for a neurologist medical centre<br>
    
   <br />
   <br />
   <a href="https://drive.google.com/file/d/1d61sns_ou6x7PYqPwDxf_UcDtldtHTUC/view?usp=sharing">View Demo</a>
    ·
    <a href="https://github.com/Tsebo200/ChiroHealth/issues">Report Bug</a>
    ·
    <a href="https://github.com/Tsebo200/ChiroHealth/issues">Request Feature</a>
</p>
<!-- TABLE OF CONTENTS -->

## Table of Contents

* [About the Project](#about-the-project)
  * [Project Description](#project-description)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [How to install](#how-to-install)
* [Features and Functionality](#features-and-functionality)
* [Concept Process](#concept-process)
   * [Ideation](#ideation)
   * [Wireframes](#wireframes)
   * [Custom UI](#user-flow)
* [Development Process](#development-process)
   * [Implementation Process](#implementation-process)
        * [Highlights](#highlights)
        * [Challenges](#challenges)
   * [Future Implementation](#peer-reviews)
* [Final Outcome](#final-outcome)
    * [Mockups](#mockups)
    * [Video Demonstration](#video-demonstration)
* [Conclusion](#conclusion)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

<!--PROJECT DESCRIPTION-->


### Project Description

My Project is a budget calculator, that calculates breadwinners earnings. The breadwinner can manage their taxes, monthly expenses as well as their savings. 

### Built With

* [PHP](https://www.php.net/)
* [MYSQL](https://www.mysql.com/)




<!-- GETTING STARTED -->
<!-- Make sure to add appropriate information about what prerequesite technologies the user would need and also the steps to install your project on their own machines -->
## Getting Started

The following instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure that you have the latest version of [NPM](https://www.npmjs.com/) installed on your machine. The [GitHub Desktop](https://desktop.github.com/) program will also be required. 

### How to install

### Installation
Here are a couple of ways to clone this repo:

1. GitHub Desktop </br>
Enter `https://github.com/Tsebo200/ChiroHealth.git` into the URL field and press the `Clone` button.

2. Clone Repository </br>
Run the following in the command-line to clone the project:
   ```sh
   git clone https://github.com/Tsebo200/ChiroHealth.git
   ```
    Open `Software` and select `File | Open...` from the menu. Select cloned directory and press `Open` button

3. Install Dependencies </br>
Run the following in the command-line to install all the required dependencies:
   ```sh
   npm install
   ```

<!-- FEATURES AND FUNCTIONALITY-->
<!-- You can add the links to all of your imagery at the bottom of the file as references -->
## Features and Functionality

<!-- note how you can use your gitHub link. Just make a path to your assets folder -->
### Feature 
In the register page, the user (Receptionist) needs to add all their information and if they did not there will be a modal (the navy labels) that would indicate the input the user left out. This concept is called Authentication.<br>

<!-- ![image1](https://github.com/Tsebo200/ChiroHealth/blob/main/src/Assets/RegisterModal.png) <br><br> -->

 The authentication is displayed in modals (the navy labels). The modals disappear while the user enters their information. <br>

<!-- ![image2](https://github.com/Tsebo200/ChiroHealth/blob/main/src/Assets/RegisterModalTwo.png)<br><br> -->

 The logout feature button is on the navigation bar for the user, as this is a security feature that avoids the user being hacked, making our database vulnerable and the user. When the user clicks on the button they are redirected to the sign in page and their session is cleared from the website.<br>

<!-- ![image3](https://github.com/Tsebo200/ChiroHealth/blob/main/src/Assets/LogOutBtn.png)<br><br> -->

### Functionality 
<!-- A useNavigate hook was utilised so that when the user clicks on the sign in/create account button, they will be redirected to the dashboard and their email address will be added to the local storage. If the user clicked on the create account button their information will be added to the MYSQL database. The opposite will happen whereas if the user tried to redirect to the dashboard without registering or logging in then they will immediately be redirected to the sign in page, a useNavigate and useEffect was utilised to accomplish this function<br><br> -->


<!-- The functionality for the logOut button was a useNavigate and a sessionStorage.clear(). -->
<br><br>

<!-- In the patients page there will be a information about the user from the database, specifically, the same user that is signed into the the website.<br><br> -->
<!-- ![image4](https://github.com/Tsebo200/ChiroHealth/blob/main/src/Assets/ReceptionistInfo.png)<br><br> -->
<!-- CONCEPT PROCESS -->
<!-- Briefly explain your concept ideation process -->
<!-- here you will add things like wireframing, data structure planning, anything that shows your process. You need to include images-->
## Concept Process

The `Conceptual Process` is the set of actions, activities and research that was done when starting this project. As part of my conceptual process I have sketched wireframes in Figma, I looked at Pinterest for inspiration for colours and I also decided to utilise Material UI for most elements. I created an ER Diagram in Figma then I created a database in MYSQL of the ER Diagram.
<br><br>

### Ideation
The style I was going for was a fresh and modern look of websites that would be found on dribble. When I was deciding the type of images I will be utilising, I went for jpegs as that is commonly found on websites, I feel I needed more experience with handling Jpegs as I am used to utilising Svgs and Pngs.
![image5](https://github.com/Tsebo200/ChiroHealth/blob/main/src/Assets/leftImage.png)<br><br>

### Wireframes
This is my first phase
<img src="Assets/Dashboard.png" align="center"><br><br><br>

<img src="Assets/EditPatients.png" align="center"><br><br><br>

### ER Diagram

<img src="Assets/ERDiagram.png" align="center"><br>

### Custom UI
I took inspiration from Material UI
<img src="Assets/inspirationMUI.png" align="center"><br>

<!-- <img src="src/Assets/DashboardBtnImage.png" align="center">
<br>

This is the hover state of my button
<img src="src/Assets/DashboardBtnHoverImage.png" align="center">
<br> -->


<!-- DEVELOPMENT PROCESS -->
## Development Process

The `Development Process` is the technical implementations and functionality done in the frontend and backend of the application. 
In my frontend I implemented a Google Font called Inter, a box shadow on different sections (content-containers), I added Hover States for my buttons.
<br>In my backend I utilised React.js with PHP. I also created a database with MYSQL and used PHP to communicate to the database.

### Implementation Process
<!-- stipulate all of the functionality you included in the project -->
<!-- This is your time to shine, explain the technical nuances of your project, how did you achieve the final outcome!-->

* Utilised React and Material UI for front-end
* Utilised PHP for back-end (communicates with MYSQL)
* Implemented Routing with `React-Router v6`.
* Implemented MYSQL to communicate with the front-end (React - register& login Pages) and back-end (PHP)
* Utilised JSS for editing MUI Elements and Scss for styling other components

#### Highlights
<!-- stipulated the highlight you experienced with the project -->
* I struggled with understanding Mui as it took time to try implement
* I mostly enjoyed making UX decisions and implementing it into the project.
* Learning how to use Sql to edit a database was also interesting

#### Challenges
<!-- stipulated the challenges you faced with the project and why you think you faced it or how you think you'll solve it (if not solved) -->
* It took me a while to understand how PHP communicates to React and MYSQL, thus leading my functions to being incomplete.
* I also had many bugs in my project not knowing how to fix them.


#### Above And Beyond

What aspects of this final build contribute to the `Above And Beyond` Component of your brief?
<!-- what did you learn outside of the classroom and implement into your project-->
* New Library Learnt
* I learnt how to use create relationships such as foreign keys and primary keys in sql and I learnt how to use Material UI as well as editing each component with JSS 
<br>

### Future Implementation
<!-- stipulate functionality and improvements that can be implemented in the future. -->

* I will learn more about how React and PHP communicate to each other in order to make more complex functions.


<!-- MOCKUPS -->
## Final Outcome

### Mockups

<img src="Assets/MockOne.png" align="center"><br><br><br>

<img src="Assets/MockTwo.png" align="center"><br><br><br>

<img src="Assets/MockThree.png" align="center"><br><br><br>

<!-- ![image6](https://github.com/Tsebo200/ChiroHealth/blob/main/src/Assets/MockOne.png)

<br>

![image7](https://github.com/Tsebo200/ChiroHealth/blob/main/src/Assets/MockTwo.png)

<br>

![image8](https://github.com/Tsebo200/ChiroHealth/blob/main/src/Assets/MockThree.png)

<br>

![image9](https://github.com/Tsebo200/ChiroHealth/blob/main/src/Assets/MockFour.png)

<br>

![image10](https://github.com/Tsebo200/ChiroHealth/blob/main/src/Assets/MockFive.png)

<br> -->

<!-- VIDEO DEMONSTRATION -->
### Video Demonstration

To see a run through of the application, click below:

[View Demonstration](https://drive.google.com/file/d/1d61sns_ou6x7PYqPwDxf_UcDtldtHTUC/view?usp=sharing)


See the [open issues](https://github.com/Tsebo200/ChiroHealth/issues) for a list of proposed features (and known issues).

<!-- AUTHORS -->
## Authors

* **Tsebo Ramonyalioa** - [Tsebo200](https://github.com/Tsebo200)

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.\

<!-- LICENSE -->
## Contact

* **Tsebo Ramonyalioa** - [email@address](mailto:tsebo.ramonyalioa.an@gmail.com) - [@instagram_handle](https://www.instagram.com/inspiration__200/) 
* **Project Link** - https://github.com/Tsebo200/ChiroHealth

<!-- ACKNOWLEDGEMENTS -->

<!-- all resources that you used and Acknowledgements here -->



