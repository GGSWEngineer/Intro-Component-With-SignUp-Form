# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Links

- Solution URL: https://github.com/GGSWEngineer/Pod-Request-Access-Landing-Page
- Live Site URL: https://ggswengineer.github.io/Pod-Request-Access-Landing-Page/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

- how to add a background image to an already existing background-color consistently, check code below, knowing this patternw ill speed up the process in future projects

.container {
  width: 375px;
  height: 1000px;
  margin: auto;
  position: relative;
  background-color: var(--bg-color); /* Set your desired background color */
  color: #fff; 
  padding: 5.5rem 1.5rem 4.25rem;
}

.container::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: url("images/bg-intro-mobile.png") center center/cover; /* Set the path to your faint image */
  opacity: 0.75; 
}


### Continued development

- using the mix-blend-mode to get the image just the right shade is still an issue that takes me a while to fix(and still couldn't get it exactly right for this project)
- continuing to get better at Javascript and implementing it with my HTML and CSS, every project I get a bit more comfortable and understand it a bit more

## Author

- Frontend Mentor - [@GGSWEngineer](https://www.frontendmentor.io/profile/GGSWEngineer)
- LinkedIn - [Gerardo Garcia](www.linkedin.com/in/gerardo-garcia-19a794275)
