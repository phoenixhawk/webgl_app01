/**
 * User: jchionh
 * Date: 2/20/13
 * Time: 11:38 PM
 */

// create the app namepsace
var wa = wa || {};

// here are our globals
wa.gTitleElement = document.getElementsByTagName("title")[0];
wa.gSysMessageElement = document.getElementById("sysMessageArea");
wa.gPrevTimestamp = 0;
wa.gDelta = 0;
wa.gCanvasElement = document.getElementById('renderCanvas');
wa.gCanvasContext = wa.gCanvasElement.getContext('webgl');
wa.gDELTA_TEXT = "d: ";
wa.gRenderer = null;
