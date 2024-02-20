# SpinPlay Coding Test React + TypeScript + Vite

SpinPlay Coding Test
Summary
 - Create a bonus game from scratch using javascript and HTML
 - The game should follow the design given below.
 - We recommend using PIXI.js and any other libraries you find useful. Please note your
sources if you borrow any code. The goal of the test is to show us how you approach
implementing a design, so the bulk of the code should be your own.
- You may use the provided art and sound assets. You don’t have to use all the assets.
- Send us a zip file containing your source and a dist folder that we can run on a bare-bones
web server.
## Design
- UI (overlayed on all screens)
- Displays credit balance
## Title Screen
- Title
- Button
- Triggers simple transition to bonus screen
## Bonus Screen
- “PRESS TO SPIN” - displayed at the start
- Wheel has 8 equal-sized slices
- Each slice displays a credit value
- Clicking sound while spinning
- Stopping position determined by a weighted table (see math)
- Win celebration
- Wheel landing sound
- “YOU WON X CREDITS!” is displayed
- Credit Balance in UI rolls up
  ### After celebration
- Simple transition back to the title screen
## Debug Control
- Some way to force the intended wheel stop position while debugging
- You may add extra features to show something you’re good at (eg. coin
particle system, tween animations, build automation, loading config from file, whatever)

Math
Credits Weight
5000 4
200 100
1000 20
400 50
2000 10
200 100
1000 20
400 50


