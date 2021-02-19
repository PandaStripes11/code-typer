const Showdown = require('showdown')
const converter = new Showdown.Converter()

const text = `
# Information
Any additional information, guides, and tutorials about this website can be found here.
Credits, currency system, and more are discussed here.
<br/><br/>
## About
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
## Table of Contents
1. [Introduction](#introduction)
2. [Development](#development)
<br/><br/>
## Introduction
Typing Master is a typing game created by Donte Truong although credits are also given to Mr. Sedge for the development of this page as well.
This website has been built to bring a new and interesting way to type for the end user.
<br/><br/>
## Development
This website has been developed primarily using Next.js and React.
<br/><br/>
`

const html = converter.makeHtml(text)
export {html}