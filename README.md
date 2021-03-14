# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Gerardo Lopez**

Time spent: **5:30** hours spent in total

Link to project: https://glitch.com/~codepath-internship-prework

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [X] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [X] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![Walkthrough](https://cdn.glitch.com/57386c19-ee81-4982-8eee-70b135e87830%2FProjectShowOff.gif?v=1615763009752)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

* https://stackoverflow.com/questions/15505272/javascript-while-mousedown - To play sound continuously on mousedown hold.
* https://www.youtube.com/watch?v=p4OHVJxd2FI - Audio object and methods

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

The biggest challenge I faced in this project was creating a function to play all the sounds in order without overlapping of the random pattern. 
I didn't know how to continuously perform an action if the buttons were held down by the user, which the stack overflow question helped me with, and now I had to figure out how to do it with code.
To solve this, I looked at the code that allowed a button to continuously play a sound if held down and applied the same concept but with code instead of user input. The function I needed was setInterval, which would
keep playing a sound until it was cleared. Then I had to find out how to play all the sounds in a random pattern in order without any overlap. To solve this I used setTimeout, which would play the first sound, wait until it is 
finished, then run the code to play the next and so on for every sound that needed to play in a given round. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

I have quite a bit of experience with web dev. so I don't have a question regarding the project as I can probably explain it line by line. However, I do have a question on how unit tests would be written for this type of project
and if they would be necessary for this as I have not had much experience with them.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

A quick refactor would be nice, I performed one before adding the extra features and reduced my code lines from 137 to 87. I would also add the rest of the optional additional features. I would also display the current round number somewhere. 
If I wanted to go above and beyond I would add user inputs that can change aspects of the game such as the amount of buttons, speed of clues, timer length, change buttons background between colors or images, change layout, etc.



## License

    Copyright Gerardo Lopez

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.