//
//
// EXPLAINATION:
// This works by setting preferences at Firefox bootup
// So to toggle a preference, you can't just comment one of the following lines out
// You need to set it to false
//
//
//

// ** Theme Related Options ****************************************************
// userChrome.css userContent.css activate
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Fill SVG Color
user_pref("svg.context-properties.content.enabled", true);

// CSS Blur Filter - 88 Above
user_pref("layout.css.backdrop-filter.enabled", true);

// Restore Compact Mode - 89 Above
user_pref("browser.compactmode.show", true);

// about:home Search Bar
// user_pref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false);

// ** Useful Options ***********************************************************
// Integrated calculator at urlbar
// user_pref("browser.urlbar.suggest.calculator", true);
