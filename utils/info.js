const Showdown = require('showdown')
const converter = new Showdown.Converter()

const text = `
# Information #
Any additional information, guides, and tutorials about this website can be found here.
Credits, currency system, and more are discussed here.
<br/><br/>
## About ##
*This website is still in its early stages of development.*
Many changes are intended to come out soon.
This page has been built to turn typing into a game.

<br/> 
Any feature requests or suggestions can be filled out below:   
<https://forms.gle/gDkzVuEwgzB1ypzu8>   
<br/>
Bugs or uninteded behavior in the website can be reported below:
<https://forms.gle/LLWRW1jeQx9hiq61A>
<br/><br/><hr/><br/>
## Table of Contents ##
1.  [Introduction](#introduction)
2.  [Development](#development)
3.  [Version](#version)
    1. [Release Notes](#releasenotes)
    2. [Features](#features)
    3. [Bug Fixes](#bugfixes)
4.  [Guides](#guides)
    1. [Typing](#typing)
        1. [As You Type](#asyoutype)
        2. [Finishing the Passage](#finishingthepassage)
    2. [Resetting A Passage](#resettingapassage)
    3. [Customizing](#customizing)
    4. [Shop](#shop)
    5. [Music](#music)
5.  [License](#license)
<br/><br/>
## Introduction ##
Typing Master is a typing game created by Donte Truong although credits are also given to Mr. Sedge for the development of this page as well.
This website has been built to bring a new and interesting way to type for the end user.
<br/><br/>
## Development ##
This website has been developed primarily using Next.js and React.
It is a single page application with Next.js used for server side rendering.
The website is hosted using Vercel.
<br/><br/>
A link to the code for this page can be found below:
<https://github.com/PandaStripes11/code-typer/tree/main>
<br/><br/>
## Version - v1.0.0 
Information about the versions and releases of this project can be found here.
### **Release Notes** ###
This is the first release of Typing Master.
### **Features** ###
*   Shop
    * Multipliers
    * Themes
* Currency
* Custom Passage Options
* Random Passage Generation
* Music
* Timer
### **Bug Fixes** ###
* **WPM Display**: Did not stop when reaching end of passage
<br/><br/><hr/><br/>
# Guides #
Here is a comprehensive tutorial on how to use this page's mechanics
<br/><br/>
## **Typing** ##
This is a guide on how the typing system works.
![Typing Image](https://cdn.discordapp.com/attachments/768855517648912406/812400288899530802/Typing.png)
<br/>
#### **As You Type** ####
*   As you type, there is live accuracy and words per minute display
    ![WPM and Accuracy Display](https://cdn.discordapp.com/attachments/768855517648912406/812401325606174750/unknown.png)   
    <br/>
*   Begin typing in the typing input
    ![Typing Input](https://cdn.discordapp.com/attachments/768855517648912406/812401825029554276/unknown.png)   
    <br/>
*   When you press space in the typing, the input will reset and the passage will read if you have typed the word  correctly or not and move you on to the next word.
    ![Input Reset](https://cdn.discordapp.com/attachments/768855517648912406/812414541920862258/unknown.png)
    <br/><br/>
#### **Finshing the Passage** ####
*   As you get to the end of the passage, the acc and wpm display will stop.
*   You will be given a certain amount of T-bucks based on a few variables.
    *   Passage length
    *   Words per Minute
    *   Accuracy
    *   Symbols (More on this later)
    *   Any store bought multipliers or bonuses
*   The complete formula is listed below
\`\`\`
wpm * (acc / 25 + 1) * (number_of_words / 25) * number_of_symbols
\`\`\`
<br/>
*   **If your accuracy is less than 60%, you will receive no T-bucks**
    *   This is to prevent spamming of the spacebar
*   **If your accuracy is less than 25%, a constant of 100 T-bucks will be deducted minus any multipliers**
<br/><br/>
*   An animation will be displayed in the top right notifying you of any change in T-bucks
*   Your T-bucks will not go below 0
<br/><br/>
### **Resetting a Passage** ###
* Clicking the Redo button will reset the passage with a new randomly generated one
![Redo Button](https://cdn.discordapp.com/attachments/768855517648912406/812420687234596864/unknown.png)
<br/>
* It is possible to customize the random passage generation which will be discussed in the next section
<br/><br/>
### **Customizing** ###
*   Customizability options are available by clicking the **Customize** button in the top right of the typing box.
*   You can customize the type (words, sentences, paragraphs) you want randomized, the amount you want, and any additional symbols
![Customizer](https://cdn.discordapp.com/attachments/768855517648912406/812423250306007092/unknown.png)
<br/>
*   **For each symbol you choose, you get a multiplier on the T-bucks you receive**
<br/><br/>
*   When you click submit, the next time you reset the passage, the random generation will use the options you have set
<br/><br/><hr/><br/>
## Shop ##
* You can purchase music, themes, and upgrades from the shop
    1. Themes - change the color of the page
    2. Upgrades - boost the amount of T-bucks you get
    3. Music - change the music you can play in the top right
<br/><br/><hr/><br/>
## Music ##
*   Music can be played by clicking the speaker icon in the top right
    *   Music options can be changed in the shop
<br/><br/>
*   The music is taken from playlists on Spotify
<br/><br/><hr/>
# License - MIT License#
<br/>
Copyright (c) 2021 Donte Truong
<br/><br/>
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
<br/><br/>
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
<br/><br/>
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`

const html = converter.makeHtml(text)
export {html}