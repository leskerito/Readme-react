# Real-time Markdown Parser in React 

___

## Description

This project was written in the context of the [freeCodeCamp](https://freeCodeCamp.org/) curriculum and is fully written using React. 
It is a real time github-flavored markdown parser. Nothing fancy. 

Don't wanna brag but I wrote this Readme with it, just *__bee-tee-dubs__*

## Requirements

To launch this app properly, you should have a relatively modern browser (Chrome, Edge, Safari, Firefox, Opera...) although most of the CSS and JS used should work with everything. 

A recent version of Nodejs and npm is also required to launch the project (made with version 10.2.0).

## Installation

If all goes according to plan, you just have to run __`npm start`__ in the project directory and everything should just play along.

## Usage

Upon launching the project correctly, you will be faced with two sides.
The left side is the editor and is where you'll be writing down your Markdown. 
By default, it contains some Markdown text as a test but feel free to change it. 

On top, next to the window's titles, you'll see an icon. This icon lets you expand (or minimize) the respective window. More on how that was done in the **How I made it** section. 

## How I made it

#### Languages used:

  - HTML 

 - Javascript (react, JSX)
  
- CSS (Sass recompiled)

The project is centered around two js components, `TextWindow.js` and `Topbar.js`. I'm hoping that their names are pretty self explanatory. 

The subtlety lies in the props and states used. **_still not bragging_**

Both `TextWindow`