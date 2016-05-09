'use strict';

var katzdeli = [];

function line(katzdeli) {
  var string = "";

  if (katzdeli.length > 0) {
    for (var i = 0; i < katzdeli.length; i++) {
      string = string + " " + (i+1) + ". " + katzdeli[i] + ",";
    }
    return "The line is currently:" + string.substr(0, string.length-1);   
  }
  else {
    return "The line is currently empty.";
  }
};

function nowServing(katzdeli){
  if (katzdeli.length == 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    var current = katzdeli.splice(0,1);
    return "Currently serving " + current + ".";
  }
};

function takeANumber(katzdeli, name){
  var position;

  katzdeli.push(name);

  position = katzdeli.length;

  return "Welcome, " + name + ". You are number " + position + " in line.";
};


