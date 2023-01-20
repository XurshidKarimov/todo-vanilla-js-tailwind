let title = document.getElementById("postTitle"),
    postText = document.getElementById("postText"),
    add = document.getElementById("addPost"),
    remove = document.getElementById("deletePost"),
    change = document.getElementById("changePost"),
    postList = document.getElementById("postList"),
    postQueue = 1,
    postsArr = [];

add.addEventListener("click", () => {
    if(title.value && postText.value){
        let child = document.createElement("li"),
            childTitle = document.createElement("h3"),
            childText = document.createElement("p"),
            postId = document.createElement("span");

        child.appendChild(postId);
        child.appendChild(childTitle);
        child.appendChild(childText);
        
        childText.style.overflowWrap = "anywhere";

        postId.textContent = `ID: ${postQueue}`;
        childTitle.textContent = title.value;
        childText.textContent = postText.value;

        child.classList.add("post-list-item");

        postsArr.push(child);

        postList.appendChild(child);
        
        title.value = '';
        postText.value = '';

        ++postQueue;
    }
    else{
        if(!title.value && !postText.value){
            title.focus();
        }
        else{
            if(!title.value){
                title.focus();
            }
            if(!postText.value){
                postText.focus();
            }
        }
    } 
})


remove.addEventListener("click", () => {
    let idInput = document.getElementById("idInput");
    let checkIdRemoveBtn = remove.getAttribute("id");
    
    
    if(checkIdRemoveBtn == "deletePost"){
        idInput.style.display = "inline";
        idInput.focus();
        remove.setAttribute("id", "deletePostActive");    
    }
    else{
        if(idInput.checkValidity() && +idInput.value <= postQueue){
            if(postList.hasChildNodes()){
                postList.removeChild(postList.children[(+idInput.value)-1]);
                idInput.value = '';
                idInput.style.display = "none";
                remove.setAttribute("id", "deletePost");
            }
            else{
                alert("No items for delete");
                idInput.style.display = "none";
                remove.setAttribute("id", "deletePost");
            }
           
        }
    }
})