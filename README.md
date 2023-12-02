# rock-paper-scissors

## The Odin Project - JS Foundation Project

VIEW LIVE [HERE](https://studiodamiro.github.io/rock-paper-scissors)

In compliance with the Odin Project JS foundation course. Took roughly 3 days to complete. _Completed March 24 2023._

__Day 1:__ Design game interface using Figma. Prepared initial files _(HTML file, css, js, SVG assets, environmental setup)_

__Day 2:__ Work with layout, struggled with CSS and device a plan to execute mechanics of the game

__Day 3:__ Struggled with JS. Finalize files.

</br>

## Screeshot

![rock paper scissor]( https://github.com/hello-damiro/rock-paper-scissors/blob/main/assets/screenshot.png)

</br>

## Game scenarios

 | AI \ P1 | rock    | paper   | scissor
 | ------- | ------- | ------- | -------
 | rock    | draw    | p1 wins | AI wins
 | paper   | AI wins | draw    | p1 wins
 | scissor | p1 wins | AI wins | draw

</br>

## Pseudo code

```javascript
while true
  Show prompt
  Read user input from console
  If input is a valid move ("r", "p", "s")
  Choose the AI move at random
  Compare the player move with the AI move
  Show the result
else if input is "q"
  Quit the program
else
  Invalid input
```
