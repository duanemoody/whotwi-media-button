// ==UserScript==
// @name 		Whotwi media link for Twitter
// @version 	0.83
// @author        Duane Moody
// @license		MIT
// @description	Adds whotwi media link to a Twitter user profile page
// @match		https://twitter.com/*
// @match		https://mobile.twitter.com/*
// @exclude		https://twitter.com/home
// @exclude		https://twitter.com/home/*
// @exclude		https://mobile.twitter.com/home
// @exclude		https://mobile.twitter.com/home/*
// @run-at		document-start
// @grant    	none
// @updateURL	https://raw.githubusercontent.com/duanemoody/whotwi-media-button/main/whotwibutton.user.js
// @downloadURL	https://raw.githubusercontent.com/duanemoody/whotwi-media-button/main/whotwibutton.user.js
// @supportURL	https://github.com/duanemoody/whotwi-media-button/issues
// @icon		data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAGkmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDAgNzkuMTcxYzI3ZmFiLCAyMDIyLzA4LzE2LTIyOjM1OjQxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjQuMCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjMtMDMtMjFUMTA6MjQ6MjUtMDc6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMDMtMjFUMTA6MjU6MzctMDc6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIzLTAzLTIxVDEwOjI1OjM3LTA3OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyODY4NmUzZS1kOGViLTRkOWEtYmQwYy0yNTUxYjM3YTE1ODciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OGY3Nzc4MmEtMzA5MC00NWI5LThiZWYtMDE1Y2QwNzY2ODBjIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6OGY3Nzc4MmEtMzA5MC00NWI5LThiZWYtMDE1Y2QwNzY2ODBjIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo4Zjc3NzgyYS0zMDkwLTQ1YjktOGJlZi0wMTVjZDA3NjY4MGMiIHN0RXZ0OndoZW49IjIwMjMtMDMtMjFUMTA6MjQ6MjUtMDc6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmNDFkZGU0OS01ODFhLTQwNzMtODRiMi0wYzYzYjc2YThiMmQiIHN0RXZ0OndoZW49IjIwMjMtMDMtMjFUMTA6MjU6MjEtMDc6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoyODY4NmUzZS1kOGViLTRkOWEtYmQwYy0yNTUxYjM3YTE1ODciIHN0RXZ0OndoZW49IjIwMjMtMDMtMjFUMTA6MjU6MzctMDc6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pq7ajTMAAACCSURBVFiF7dLbCsAgCAbg3v+l3S4iVkvRpjnoD4Swg1+HQkQlM1KL/w9wN6rBL1DMAQCAMwAexd0Aj3WqMAHGXBqg9jnA8lOJgIl+H8ByjV8+KwcwvaMEkD60FtCumMtHAsa2DdBXpS6l23gR8D6yMB4KEDaOA3gGAAAAAIAaejzgAjuW+4OxSVRCAAAAAElFTkSuQmCC
// ==/UserScript==

/* Because this script runs inside Twitter and therefore alongside React, it will have
   to use MutationObservers to detect the creation of the buttonbox which still will not
   exist by the time the traditional 'document ready' events have fired.
*/
console.log('Profile page detected');
function DOM_ContentReady() {
      console.log('DCR started');
      // Get userid
      // this method will only work for profile pages, not popup profiles
      const username = location.pathname.split('/')[1],
            buttonboxclass = "css-1dbjc4n r-obd0qt r-18u37iz r-1w6e6rj r-1h0z5md r-dnmrzs",
            buttonbox = document.getElementsByClassName(buttonboxclass)[0];

      // Get destination
      const whotwi = `https://en.whotwi.com/${username}/tweets/media#local_local_menu`;

      // Create link
      const whobut = document.createElement('a'),
            tn = document.createTextNode('WT');
      whobut.appendChild(tn);
      whobut.setAttribute('href', whotwi);
      whobut.setAttribute('target', '_blank');

      // place link
      buttonbox.prepend(whobut);
      console.log('DCR completed');
}
(function() {
    'use strict';

    if (document.readyState == "complete" || document.readyState == "loaded" || document.readyState == "interactive") {
        console.log("Already Loaded");
        DOM_ContentReady();
    } else {
        document.addEventListener("DOMContentLoaded", DOM_ContentReady());
        console.log('Listener attached');
    }
})();
