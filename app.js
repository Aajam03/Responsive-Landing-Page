let showSidebar = document.querySelector("#show-sidebar");
let hideSidebar = document.querySelector("#hide-sidebar");
let sideBar = document.querySelector("#sidebar");


showSidebar.onclick=()=>{
    sideBar.style.display = "flex";
    console.log("clicked");
    
};

hideSidebar.onclick=()=>{
    sideBar.style.display = "none";
};

