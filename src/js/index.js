/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "J",
    "Q",
    "K",
    "10"
  ];
  let symbols = ["&clubs;", "&diams;", "&hearts;", "&spades;"];
  let random = Math.floor(Math.random() * 4);
  if (random == 1 || random == 2) {
    document.getElementsByClassName("symbol")[0].style.color = "red";
    document.getElementsByClassName("symbol")[1].style.color = "red";
    document.getElementsByClassName("number")[0].style.color = "red";
  }
  document.getElementsByClassName("symbol")[0].innerHTML = symbols[random];
  document.getElementsByClassName("symbol")[1].innerHTML = symbols[random];

  document.getElementsByClassName("number")[0].innerHTML =
    numbers[Math.floor(Math.random() * 13)];
};
