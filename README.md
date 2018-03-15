## Download

**[CustomizeMyBird for Thunderbird 52-61+](https://github.com/Aris-t2/CustomizeMyBird/releases)**  

## Want to support this project?

**[[ Paypal Me ]](https://www.paypal.me/tkpay)**  

## CustomizeMyBird 2.0 offers Thunderbird features known from
- previous CustomizeMyBird versions 1.0-1.2
- <a href=https://addons.mozilla.org/addon/noiascrollbars/>NewScrollbar add-on</a> (most already present in v1.2)
- <a href=https://addons.mozilla.org/addon/cstbb/>Classic Toolbar Buttons add-on</a> 
- <a href=https://addons.mozilla.org/addon/noiabuttons/>NoiaButtons add-on</a> 
- <a href=https://addons.mozilla.org/addon/amversionnumber/>Add-ons Manager - Version Number add-on</a>

## Features (2.0+)
- Tabs: switch between default tabs and classic squared tabs (+ Aero blue colors)
- Tabs: custom height
- Tabs: custom border roundness
- Tabs toolbar: hide Lightning buttons
- Tabs and tab toolbar buttons: switch positions (Windows/Linux)
- Main menubar: above/below tabs toolbar (Windows/Linux)
- Main menubar: compact view (Windows/Linux)
- Mein menubar: Aero blue colors
- Main toolbar: compact view
- Toolbars: default colors / Aero blue colors
- Statusbar: hide status bar
- Quick-filter-bar: move below mail list (if visible)
- Attachments: move above mail content (if visible)
- Attachments: move button to start position (if visible)
- Main menu button alternative appearance: customizable colors, text, icons
- Add-ons Manager: alternative appearance (+ Aero blue colors)
- Add-ons Manager: compact view
- Add-ons Manager: show version number
- Toolbar buttons appearance known from 'Classic Toolbar Buttons'/'NoiaButtons' add-ons
  - classic appearance for menubar, tabs toolbar and main toolbars
  - custom border roundness for buttons on menubar, tabs toolbar and main toolbars
  - custom minimum height and width for buttons on menubar and main toolbars
  - custom icons: Thunderbird 1-3, macOS, dark, bright, Noia large/medium/small/tiny
  - icons: reduce icon size on hover
- Scrollbar settings
  - hide scrollbars / scrollbar buttons
  - custom size
  - custom opacity
  - background color/gradient
  - thumb color/gradient/roundness/border
  - button color/gradient/roundness

## Compatibility
- compatible to Lightning
- compatible to Windows, Linux, macOS
- compatible to light and dark lw-themes (aka Personas)
- <b>not compatible to complete themes</b> (add-ons options page only shows a note in that case, but nothing to select)

## AMO (addons.mozilla.org)
AMO stopped being a reliable source to distribute new versions of add-ons. Reviewers stopped looking into "legacy" add-ons and bootstrapped/restartless add-ons, which are still valid in Thunderbird.
AMOs focus shifted to crappy and powerless WebExtensions, which do not even have to be reviewed by humans. [The shitty add-on validator is "enough" allowing everybody to install tons of spam and malicious WebExtensions.](https://www.ghacks.net/2017/12/13/mozillas-extensions-store-has-a-spam-infestation/)
Good thing Thunderbird add-ons do not require the idiotic add-on signing likie Firefox, so users can just install files downloaded from Github. Additionally looking through add-on code on Github is easily possible compared to AMO and building own installation packages only requires a few steps (release page always offers the latest build too):
- download the whole repository or the content of xpi folder
- zip the content of xpi folder
- optionally rename ".zip" to ".xpi"
- install the file through Thunderbirds add-on manager
