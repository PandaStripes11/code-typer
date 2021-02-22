# Code Typer #
A new and fun way to type

## About ##
*This website is still in its early stages of development.*
Many changes are intended to come out soon.
This page has been built to turn typing into a game.

Any feature requests or suggestions can be filled out below:    
[https://forms.gle/gDkzVuEwgzB1ypzu8](https://forms.gle/gDkzVuEwgzB1ypzu8)   

Bugs or uninteded behavior in the website can be reported below:   
[https://forms.gle/LLWRW1jeQx9hiq61A](https://forms.gle/LLWRW1jeQx9hiq61A)

## Table of Contents ##
1.  [Introduction](#introduction)
2.  [Development](#development)
3.  [Version](#version)
    1. [Release Notes](#releasenotes)
    2. [Features](#features)
    3. [Bug Fixes](#bugfixes)

## Introduction ##
Typing Master is a typing game created by Donte Truong although credits are also given to Mr. Sedge for the development of this page as well.
This website has been built to bring a new and interesting way to type for the end user.

## Development ##
This website has been developed primarily using Next.js and React.
It is a single page application with Next.js used for server side rendering.
The website is hosted using Vercel.

## Version - v1.2.0 (Data Saving with Cookies)
This new update introduces data saving with cookies so that when the user leaves, their currency and items are saved for the next time they come back.

### Release Notes
A new dependency was added, universal-cookies, in order to use cookie data with react.

### Features
* **Data Saving** - currency and items are saved until the user comes back
    * T-bucks, upgrades, and music purchases are saved
    * Settings are not saved so themes and music will return to their defaults
* **Remove Cookies** - users have the option to remove the cookies stored to reset their progress

### Bug Fixes
* **Default music** - fixed bug where default music would not be auto selected
* **Cookie icon theme** - fixed bug where theme would not change cookies icon


