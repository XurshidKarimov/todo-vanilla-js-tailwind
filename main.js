let title = document.getElementById("postTitle"),
    postText = document.getElementById("postText"),
    add = document.getElementById("addPost"),
    remove = document.getElementById("deletePost"),
    change = document.getElementById("changePost"),
    postList = document.getElementById("postList"),
    postQueue = 1;

add.addEventListener("click", () => {
    if(title.value && postText.value){
        let child = document.createElement("li"),
            childTitle = document.createElement("h3"),
            childText = document.createElement("p"),
            postId = document.createElement("span");

        child.appendChild(postId);
        child.appendChild(childTitle);
        child.appendChild(childText);
        
        postId.textContent = `ID: ${postQueue}`;
        childTitle.textContent = title.value;
        childText.textContent = postText.value;

        child.classList.add("post-list-item");

        postList.appendChild(child);
        
        
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