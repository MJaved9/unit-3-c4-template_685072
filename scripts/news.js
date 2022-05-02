// Ude Import export (MANDATORY)
import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

import { search,append } from "../components/fetch.js";

let news=JSON.parse(localStorage.getItem("news"));

let container=document.getElementById("results");
append(news,container)
