// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

import { search,append } from "../components/fetch.js";

let s_serach=(e)=>{
    if(e.key=="Enter"){
        let value=window.location.href="search.html";
        search(value).then((data)=>{
            console.log(data);
            let container=document.getElementById("results");
            append(data,container)
        });
    }
}

// function load(){
//     try{
//         let res=fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`);
//         let data12=await res.json();
//         let data1=data11.articles;
//         let container=document.getElementById("results")
//         append(data,container)
//     }
//     catch(err){
//         console.log(err)
//     }
// }


let option=document.getElementById("sidebar").children;
document.getElementById("search_input").addEventListener("keydown",s_serach);
// for(let el of option){
//     console.log(this.id);
//     search(this.id).then((data)=>{
//         console.log(data);
//         let container=document.getElementById("results");
//         append(data,container)
//     });
// }