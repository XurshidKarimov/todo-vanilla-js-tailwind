//get elements

let author = document.getElementById("postAuthor"),
    title = document.getElementById("postTitle"),
    postText = document.getElementById("postText"),
    add = document.getElementById("addPost"),
    remove = document.getElementById("deletePost"),
    change = document.getElementById("changePost"),
    postList = document.getElementById("postList"),
    postQueue = 0,
    postsArr = [];

//elements must be check for empty
let postElements = [author, title];


// ADD-BTN

add.addEventListener("click", () => {
    postText.innerText = postText.innerText.replace(/^\s+|\s+$/gm, '');
    //checking values to empty or not
    postElements.forEach(element => {
        element.value = element.value.replace(/^\s+|\s+$/gm, '');
    })

    // check elements for all values are not empty
    if(title.value && postText.innerText && author.value){
        // creating elements for child tag <li>
        let child = document.createElement("li"),
            childAuthor = document.createElement("h3")
            childTitle = document.createElement("h4"),
            childText = document.createElement("p"),
            postId = document.createElement("span"),
            postedTime = document.createElement("time");

        // adding elements to child tag <li>

        let childElementsLi = [postId, childAuthor, childTitle, childText, postedTime];

        childElementsLi.forEach(element => {
            child.appendChild(element);
        })
        
        //wrap for long words
        childText.style.overflowWrap = "anywhere";
        
        //increment ID
        ++postQueue;
        
        //join data in child-elements
        // postId.textContent = `ID: ${postQueue}`;
        
        let authorNote = document.createElement("span");
        childAuthor.appendChild(authorNote);
        authorNote = author.value;
        // authorNote.classList.add("font-bold");

        // let authorClassTailwind = ["font-bold"];

        childAuthor.textContent = `Author: ${authorNote}`;
        childTitle.textContent = title.value;
        childText.textContent = postText.innerText;

        //time&date
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
         
        //classes for add to tag for tailwind
        let timeClass = ["italic", "font-bold", "text-end"];

        //adding classes to tag for tailwind
        timeClass.forEach(element => {
            postedTime.classList.add(element);
        })

        child.classList.add("post-list-item");

        //POSTS ARR
        postsArr.push(child);

        //ADDING TO PARENT TAG <UL> TAG <LI>
        postList.appendChild(child);
        
        //AFTER ADDING INPUTS CLEARED and focused to first input
        author.value = title.value = postText.innerText = '';
        author.focus();

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

// REMOVE-BTN

// remove.addEventListener("click", () => {
//     let idInput = document.getElementById("idInput");
//     let checkIdRemoveBtn = remove.getAttribute("id");
    
//     if(checkIdRemoveBtn == "deletePost"){
//         if(postQueue > 0){
//             idInput.style.display = "inline";
//             idInput.focus();
//             remove.setAttribute("id", "deletePostActive"); 
//         }
//         else{
//             alert("No items for remove.");
//             author.focus();            
//         }
//     }
//     else{
//         if(!idInput.value){
//             idInput.style.display = "none";
//             remove.setAttribute("id", "deletePost");
//         }
//         else if(idInput.checkValidity() && +idInput.value <= postQueue){
//             if(postList.hasChildNodes()){
//                 postList.removeChild(postList.children[(+idInput.value)-1]);
//                 idInput.value = '';
//                 idInput.style.display = "none";
//                 remove.setAttribute("id", "deletePost");
//                 --postQueue;
//                 author.focus();
//             }
//         }
//         else{
//             if(!idInput.checkValidity()){
//                 alert("Entered data not valid. Enter only number.");
//                 idInput.value = '';
//                 idInput.focus();
//             }
//             else{
//                 alert(`Data with ID: ${idInput.value} not found. Try again.`);
//                 idInput.value = '';
//                 idInput.focus();
//             }
//         }
//     }
// })

//CHANGE-BTN

// change.addEventListener("click", () => {
//     let idChange = document.getElementById("idChange");
//     let checkIdChangeBtn = change.getAttribute("id");
    
//     if(checkIdChangeBtn == "changePost"){
//         if(postQueue > 0){
//             idChange.style.display = "inline";
//             idChange.focus();
//             change.setAttribute("id", "changePostActive"); 
//         }
//         else{
//             alert("No items for change.");
//             author.focus();            
//         }
//     }
//     else{
//         if(!idChange.value){
//             idChange.style.display = "none";
//             change.setAttribute("id", "changePost");
//         }
//         else if(idChange.checkValidity() && +idChange.value <= postQueue){
//             if(postList.hasChildNodes()){
//                 let postListChild = postList.children[(+idChange.value)-1];
//                 idInput.value = '';
//                 idInput.style.display = "none";
//                 remove.setAttribute("id", "deletePost");
//                 --postQueue;
//             }
//         }
//         else{
//             if(!idInput.checkValidity()){
//                 alert("Entered data not valid. Enter only number.");
//                 idInput.value = '';
//                 idInput.focus();
//             }
//             else{
//                 alert(`Data with ID: ${idInput.value} not found. Try again.`);
//                 idInput.value = '';
//                 idInput.focus();
//             }
//         }
//     }  
// })