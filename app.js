const body = document.querySelector("body"),
      modeToggle = document.querySelector(".mode-toggle"),
      sidebar = document.querySelector("nav"),
      sidebarToggle = document.querySelector(".sidebar-toggle");


let getMode = localStorage.getItem("mode");
if(getMode && getMode === "dark"){
    body.classList.toggle("dark");
}      

let getStatus = localStorage.getItem("status");
if(getStatus && getStatus === "close"){
    sidebar.classList.toggle("close");
}  

    
modeToggle.addEventListener("click" , () => {
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        localStorage.setItem("mode" , "dark");
    }else{
        localStorage.setItem("mode" , "light");
    }
})

sidebarToggle.addEventListener("click" , () => {
    sidebar.classList.toggle("close");
    if(sidebar.classList.contains("close")){
        localStorage.setItem("status" , "close");
    }else{
        localStorage.setItem("status" , "open");
    }
})



import Dashboard from "./pages/Dashboard.js";
import Content from "./pages/Content.js";
import Analytics from "./pages/Analytics.js";
import Like from "./pages/Like.js";
import Comment from "./pages/comment.js";
import Share from "./pages/Share.js";
import NotFound from "./pages/Not-Found.js";



function router(){
    const routes = [
        {path:"/" , view: Dashboard},
        {path:"/content" , view: Content},
        {path:"/analytics" , view: Analytics},
        {path:"/like" , view: Like},
        {path:"/comment" , view: Comment},
        {path:"/share" , view: Share}
    ]

    const allRoutes = routes.map(item => {
        return {
            route : item,
            isMatched : location.pathname === item.path
        }
    })
    

    let match = allRoutes.find(item => item.isMatched)

    if(!match){
        match = {
            route : {path : "/Not Found" , view : NotFound},
            isMatched : true
        }
    }

    document.querySelector(".dash-content").innerHTML = match.route.view()

}

function navigateTo(url){
    history.pushState(null , null , url);
    router()
}

window.addEventListener("popstate" , router)



document.addEventListener("DOMContentLoaded" , () => {

    document.body.addEventListener("click" , (e) => {
        if(e.target.hasAttribute("data-link")){
            e.preventDefault();
            navigateTo(e.target.href)
        }
    })

    router()
})