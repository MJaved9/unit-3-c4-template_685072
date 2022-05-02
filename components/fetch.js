let search=async(value)=>{
    try{
        let res=await fetch(`https://masai-mock-api.herokuapp.com/news?q=${value}`);
        let data1=await res.json();
        let data=data1.articles;
        return data;
    }
    catch(err){
        console.log(err)
    }
};

let append=(data,container)=>{
    data.forEach((ele)=>{
        let div=document.createElement("div");
        div.setAttribute("class","news");
        let img=document.createElement("img");
        let h1=document.createElement('h1');
        let h2=document.createElement('h2');
        
        img.src=ele.urlToImage;
        h1.innerText=ele.title;
        h2.innerText=ele.description;
        div.append(img,h1,h2);
        div.addEventListener("click",function(ele){
            clicked()
        })
        container.append(div)
    })
}

function clicked(ele){
    localStorage.setItem("news",JSON.stringify(ele));
}



export {search,append};