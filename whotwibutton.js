// ==UserScript==
// @name 		    Whotwi media link for Twitter
// @version 		0.5
// @description	Adds whotwi media link to a Twitter user profile
// @match				https://twitter.com/*
// @match				https://mobile.twitter.com/*
// @grant    		none
// ==/UserScript==

// Get userid
// this method will only work for profile pages, not popup profiles 
const username = location.pathname.split('/')[1];

// Get destination
const whotwi = `https://en.whotwi.com/${username}/tweets/media#local_local_menu`;

// Create link
const whobut = document.createElement('a'),
      tn = document.createTextNode('WT');
whobut.appendChild(tn);
whobut.setAttribute('href', whotwi);
whobut.setAttribute('target', '_blank');

// Get location to place link
const buttonboxclass = "css-1dbjc4n r-obd0qt r-18u37iz r-1w6e6rj r-1h0z5md r-dnmrzs", 
      buttonbox = document.getElementsByClassName(buttonboxclass)[0];

// place link
buttonbox.prepend(whobut);
