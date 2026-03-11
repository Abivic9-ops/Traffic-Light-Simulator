 Traffic Light Simulation Project
 # Project Overview
The Traffic Light Simulation is a beginner-friendly web development project built using HTML, CSS, and JavaScript. The goal of this project is to simulate the real-world operation of a traffic light system that cycles through **Red → Yellow → Green** automatically.
This project was developed as part of my learning journey in JavaScript programming. It demonstrates how JavaScript can be used to control UI elements dynamically and simulate real-life processes through timed events.
The simulation visually represents the switching of traffic lights with appropriate time intervals, allowing users to see how traffic control systems operate in real life.

#  Objectives of the Project
The main objectives of this project were:
1.To understand JavaScript Basics
2. To practice event handling in JavaScript
3. To learn how timers and intervals work
4. To simulate a real-life system using programming logic
5. To improve on the front-end development skills especially on the CSS aspects.

# Technologies Used
The project was built using the following technologies:
 Technology | Purpose                                 
 HTML       | Structure of the traffic light          
CSS        | Styling and layout of the traffic light 
 JavaScript | Logic controlling the light switching   
 
 # How the Simulation Works
The simulation works by controlling three lights:
 Red Light
 Yellow Light
 Green Light

JavaScript cycles through these lights using timers.

# Light Timing Sequence
| Light  | Duration  |
| ------ | --------- |
| Red    | 3 seconds |
| Yellow | 1 second  |
| Green  | 3 seconds |

The system follows this loop continuously:

Red → Green → Yellow → Red → 
JavaScript updates the active light by adding and removing **CSS classes**.

#  Project Structure
traffic-light-simulation/
 index.html
 style.css
script.js
 README.md

# Explanation

**index.html**
* Contains the structure of the traffic light
* Includes the light containers

**style.css**

* Styles the traffic light
* Controls colors and visual appearance

**script.js**

* Handles the logic of switching lights
* Uses JavaScript timers

#  Installation and Setup
To run this project on your computer:

#  Clone the Repository
git clone https://github.com/your-username/traffic-light-simulation.git

# Navigate to the Project Folder
cd traffic-light-simulation

# Open the Project
Open the `index.html` file in your browser.

You can also run it using **Live Server in VS Code** for better development experience.

#  How to Use the Project

1. Open the project in a web browser.
2. The traffic lights will begin switching automatically.
3. Each light will activate according to its programmed timing.
4. The cycle continues continuously.

# Key JavaScript Concepts Used

This project helped demonstrate several important JavaScript concepts:
 Key JavaScript Concepts Used

This project helped demonstrate several important JavaScript concepts:

1. DOM Manipulation

JavaScript selects elements from the HTML document and updates their classes dynamically.

Example concept used:

document.querySelectorAll()
2. Timers

The project uses timers to control how long each light stays active.

Example:

setTimeout()
3. Arrays

Arrays are used to store the names of the traffic lights and their durations.

Example:

const lights = ['red', 'yellow', 'green'];
4. State Management

The variable currentLight keeps track of which light is active.

#  Problems Encountered During Development

While building this project, several challenges were encountered:

1. Switching Lights Correctly

Initially, multiple lights stayed active at the same time because the program was not removing the previous active class before activating the next light.

Solution:
I used a loop to remove the active class from all lights before activating the next one.

2. Timing Synchronization

It was difficult to control the exact duration of each light when switching.

Solution:
I implemented a duration array that stores the time for each light.

const durations = [3000, 1000, 3000];
3. DOM Selection Issues

Selecting the correct light elements using JavaScript was initially confusing.

Solution:
I used querySelectorAll() with class names corresponding to each light.
4. Understanding JavaScript Logic Flow

As a beginner, understanding how the lights cycle continuously required practice.

# Solution:
Breaking the code into small functions made the logic easier to understand.

# Learning Outcomes

From this project, I learned:
- How to manipulate HTML elements using JavaScript
- How timers work in JavaScript
- How to structure small front-end projects
- How programming logic can simulate real-world systems
- The importance of debugging and testing code

# Author
Victor Mwendwa | Abivic9-ops

Student Developer passionate about learning Full Stack Development and building practical projects using HTML, CSS, and JavaScript.
This project is part of my continuous journey to become a better software developer.

# Support
If you found this project helpful or interesting, feel free to:

* Star the repository
 *Fork the project
* Suggest improvements

#License
This project is open-source and available for learning and educational purposes.
