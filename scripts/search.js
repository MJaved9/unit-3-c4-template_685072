// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

import { search,append } from "../components/fetch.js";

let s_serach=(e)=>{
    if(e.key=="Enter"){
        let value=document.getElementById("search_input").value;
        search(value).then((data)=>{
            console.log(data);
            let container=document.getElementById("results");
            append(data,container)
        });
    }
}



// let option=document.getElementById("sidebar").children;
document.getElementById("search_input").addEventListener("keydown",s_serach);
