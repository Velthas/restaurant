# Restaurant

# Live at: https://velthas.github.io/restaurant/

'Restaurant' is a front-end project that allowed me to appreciate the beauty of dynamic table swapping through usage of JavaScript, something I had not attempted before now. 

Perhaps more importantly, this was also my first experience with the most cryptic webpack. Understandably, these tools are difficult to use but I can already see the benefits and hope to make them an important part of my toolset for years to come.

## Functionality

This is meant to be a very simplistic restaurant page with dynamic page swapping that is enabled through event listeners applied to the links on the navbar. The page will default to home.

## WebPack
I thought it would be fitting to briefly go into my experience with webpack as a way of reflecting on what I have learned about it.

First of all, I practiced installing webpack modules and using a .gitignore file to prevent the node_modules folder from being uploaded. As I have learned, having a package.json file present in the folder is enough for npm to be able to install all modules needed (using npm install). 

I then practiced asset management by including a style sheet and multiple images. WebPack does not natively support the inclusion of stylesheets, but it can be done by using the style-loader and css-loader packages and including them in the webpack.config.js file. 

By default, a webpack.config.js file only points to the entry point where the material for bundling is stored and the output point, where the result will be placed once bundling is completed. By adding a module section and then rules under module.exports, we can add the necessary configuration for webpack to process any file we may need, from stylesheets to images and fonts. 

Luckily, images did not require any extra package install as they could be natively handled by webpack. So, instead of specifying a 'use' rule to tell it which package to use to process that type of data, I merely set the asset's 'type' to 'asset/resource' and the problem was solved.

Given that the application needed to empty the outer container and dinamically recreate two more containers for each of the tabs, not being able to have the modules communicate would have caused a great deal of repetition. Luckily, import and export statements allowed me to reuse code I had already written, which really made me realize the module's potential for reuse. 

## Credits
All the icons for the menu portion of this webpage have been taken from flaticon.com. Here is credits to the artists:
+ **cappuccino**: pongsakornRed
+ **frappuccino**: iconixar
+ **smoothie**: AmethysDesign
+ **tea**: freepik
