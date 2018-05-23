function main(){
    //wake-up the Author
    mainAuthor()
    //appendParagraphs('And so it begins... You face a choice in the road ahead, which way will your quest continue?');
    //appendChoice(["East", "West"])  
}

function appendParagraphs(stdin){
    var choosenDiv = document.getElementById("Story");
    var newP = document.createElement('p');
    var text = document.createTextNode(stdin);
    newP.appendChild(text);
    choosenDiv.appendChild(newP, choosenDiv);
    scrollToBottom("Story")
}

function appendChoice(choices){
    var choosenDiv = document.getElementById("Story");
    var newP = document.createElement('p');
    var newA = document.createElement('a');
    var linkText = document.createTextNode('blank');
    newP.className = 'links'
    newP.id = 'links'
    newP.appendChild(document.createTextNode(" | "), choosenDiv);
    for (ea in choices){
        newA = document.createElement('a');
        linkText = document.createTextNode(choices[ea]);
        newA.appendChild(linkText);
        newA.id = choices[ea];
        newA.href = "";
        newP.appendChild(newA, choosenDiv);
        newP.appendChild(document.createTextNode(" | "), choosenDiv);
    }
    choosenDiv.appendChild(newP, choosenDiv);
    for (ea in choices){
        addListeners(choices[ea]);
    }
    scrollToBottom("Story")
}

function addListeners(watched_id){
    document.getElementById(watched_id).addEventListener("click", function (event){
        clickChoice(watched_id);
    });
        
}

function clickChoice(watched_id){
    event.preventDefault();
    //remove the question options
    var elem = document.getElementById('links');
    elem.parentNode.removeChild(elem);
    //reponse
    appendParagraphs("You head " + watched_id);
    scrollToBottom("Story")
}

function scrollToBottom(id){
    var div = document.getElementById(id);
    div.scrollTop = div.scrollHeight - div.clientHeight;
 }