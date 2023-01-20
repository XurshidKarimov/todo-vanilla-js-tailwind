let author = document.getElementById("postAuthor"),
    title = document.getElementById("postTitle"),
    postText = document.getElementById("postText"),
    add = document.getElementById("addPost"),
    remove = document.getElementById("deletePost"),
    change = document.getElementById("changePost"),
    postList = document.getElementById("postList"),
    postQueue = 0,
    postsArr = [];

let postElements = [author, title, postText];

add.addEventListener("click", () => {

    //checking values to empty or not
    postElements.forEach(element => {
        element.value = element.value.replace(/^\s+|\s+$/gm, '');
    })

    if(title.value && postText.value && author.value){
        let child = document.createElement("li"),
            childAuthor = document.createElement("h3")
            childTitle = document.createElement("h4"),
            childText = document.createElement("p"),
            postId = document.createElement("span"),
            postedTime = document.createElement("time");


        child.appendChild(postId);
        child.appendChild(childAuthor);
        child.appendChild(childTitle);
        child.appendChild(childText);
        child.appendChild(postedTime);

        childText.style.overflowWrap = "anywhere";
        
        ++postQueue;
        
        postId.textContent = `ID: ${postQueue}`;
        childAuthor.textContent = `Author: ${author.value}`;
        childTitle.textContent = title.value;
        childText.textContent = postText.value;

        let currentTime = new Date();
        let hour = currentTime.getHours(),
            minute = currentTime.getMinutes(),
            secund = currentTime.getSeconds(),
            day = currentTime.getDate(),
            month = currentTime.getMonth(),
            year = currentTime.getFullYear();
        
        ++month;

        day = day < 10 ? `0${day}` : `${day}`;
        month = month < 10 ? `0${month}` : `${month}`;
        hour = hour < 10 ? `0${hour}` : `${hour}`;
        minute = minute < 10 ? `0${minute}` : `${minute}`;
        secund = secund < 10 ? `0${secund}` : `${secund}`;

        postedTime.textContent = `Posted on: ${day}.${month}.${year} / ${hour}:${minute}:${secund}`;
        postedTime.setAttribute("date", currentTime);
        postedTime.style.textAlign = "end";

        child.classList.add("post-list-item");

        postsArr.push(child);

        postList.appendChild(child);
        
        author.value = title.value = postText.value = '';

    }
    else{
        if(!author.value && !title.value && !postText.value){
            author.focus();
        }
        else{
            if(!author.value){
                author.focus();
            }
            else if(!title.value){
                title.focus();
            }
            else if(!postText.value){
                postText.focus();
            }
        }
    } 
})


remove.addEventListener("click", () => {
    let idInput = document.getElementById("idInput");
    let checkIdRemoveBtn = remove.getAttribute("id");
    
    if(checkIdRemoveBtn == "deletePost"){
        if(postQueue > 0){
            idInput.style.display = "inline";
            idInput.focus();
            remove.setAttribute("id", "deletePostActive"); 
        }
        else{
            alert("No items for remove.");
            title.focus();            
        }
    }
    else{
        if(!idInput.value){
            idInput.style.display = "none";
            remove.setAttribute("id", "deletePost");
        }
        else if(idInput.checkValidity() && +idInput.value <= postQueue){
            if(postList.hasChildNodes()){
                postList.removeChild(postList.children[(+idInput.value)-1]);
                idInput.value = '';
                idInput.style.display = "none";
                remove.setAttribute("id", "deletePost");
                --postQueue;
            }
        }
        else{
            if(!idInput.checkValidity()){
                alert("Entered data not valid. Enter only number.");
                idInput.value = '';
                idInput.focus();
            }
            else{
                alert(`Data with ID: ${idInput.value} not found. Try again.`);
                idInput.value = '';
                idInput.focus();
            }
        }
    }
})