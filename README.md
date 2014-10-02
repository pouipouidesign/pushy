#Pushy

This is a heavily refactored version of Pushy to add destroy capability (useful with breakpoints) and left/right positioning.
Push is a responsive off-canvas navigation menu using CSS transitions. This project was inspired by the off-canvas navigation menu seen on [Medium](https://medium.com/).

[View Demo](http://www.christopheryee.ca/pushy)

##Features

- Uses CSS transitions.
- Smooth performance on mobile devices.
- jQuery animation fallback for IE 9.
- Menu closes when the site overlay is selected.
- It's responsive!

##Requirements

- [jQuery 2.x](http://jquery.com/)

##Install

Download the [packaged source file](https://github.com/pouipouidesign/pushy/archive/master.zip), this includes everything you need to get Pushy running on your site.

1. Add the stylesheet (pushy.css) in your head

OR

1. Import the pushy.scss file in your own, and update variables if needed before compiling


2. Add the JS (pushy.min.js) file in your footer

3. Insert the following markup into your body.

```html
<!-- General Wrapper -->
<div id="wrapper">
    <!-- Main Content Wrapper -->
    <div id="container">
        <!-- Main Header -->
        <header id="header" role="banner">
            <!-- Some classic header content -->
            <section>
                <h1>Logo</h1>
                <p>Tagline</p>
            </section>
            <!-- The nav you need to put in offcanvas (will be moved by script) -->
            <nav role="navigation" class="pushy">
                <ul>
                    <li><a href="#">Item 1</a></li>
                    <li><a href="#">Item 2</a></li>
                </ul>
            </nav>
        </header>
        <!-- Your main content -->
        <section role="main" id="main"></section>
    </div>
</div>
```

4. Instantiate plugin on your element (in page or in your js file)

$(document).ready(function(){
    $('#mainNav').pushy({
        pushySide: 'right'
    });
});

- If you change the width of the ```.pushy``` menu, be sure to update the values in the ```.pushy-left``` or ```.pushy-right``` CSS classes.

```css

body.pushy-right.pushy-active #mainNav, body.pushy-left.pushy-active #mainNav {
    width: 50%; /* Changed the width to 50% */
    max-width: 200px; /* Changed the max-width to 200px */
}
```

## Options

The plugin accepts options, here are the defaults:

```
var defaults = {
    pushySide           : 'left',
    pushyActiveClass    : 'pushy-active',
    containerId         : 'container',
    overlayId           : 'site-overlay',
    pushyBtn            : '<button type="button" class="menu-btn"><i class="icon-menu"></i> <span class="visuallyhidden"></span></button>',
    menuSpeed           : 200,
    init                : true,
    destroy             : false
};
```

## Responsive w/ destroy option

If you use something like [Unison](https://github.com/bjork24/Unison), you can init and destroy the offcanvas according to your breakpoints :

```
// breakpoints
var allBreakpoints = Unison.fetch.all();

Unison.on('usn-small', function() {
    //
    $('#mainNav').pushy({
        pushySide: 'right'
    });
});
Unison.on('usn-medium-up', function() {
    //
    $('#mainNav').pushy({
        pushySide: 'right',
        init: false,
        destroy: true
    });
});
```


##Browser Compatibility

| Desktop       | Mobile                                     |
| ------------- | -------------------------------------------|
| IE 9-11       | Chrome (Android 4.x+)                      |
| Chrome        | Android Browser (Android 4.x+)             |
| Firefox       | Safari (iOS 7)                             |
| Safari (Mac)  | Internet Explorer Mobile (Windows Phone 8) |

##Version History

0.9.3

- Added possibility to init or destroy plugin instance.
- Cleanup/Simplification of JS and CSS code.
- Added right or left position choice.
- Refactored CSS to SCSS.

0.9.2

- Removed modernizr dependency.
- Updated site overlay with color + smoother transition.
- Cleaned up the CSS a bit.
- Dropped support for IE 7 & 8.

0.9.1

- Added support for more menu items (with scroll bar).
- Added the .push CSS class. This adds pushy support to additional HTML elements outside of the container div.
- Fixed menu transition.
- Tested in iOS 7.
- Updated the demo file.

0.9.0

- Added a site overlay when Pushy is toggled
- Fixed horizonal scroll bar issue on mobile devices
- Disabled webkit tap highlight
- Rejiggered the JS file
- Updated to jQuery 1.10.1
- Updated the demo file

0.8.4

- Fixed performance issue with mobile devices
- Updated to jQuery 1.10
- Updated the demo file
- Updated the read me

##Thanks to

- [jQuery](http://jquery.com/)