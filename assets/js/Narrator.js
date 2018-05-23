function main(){
    appendParagraphs('And so it begins... You face a choice in the road ahead, which way will your quest continue?');
    appendChoice(["East", "West"])  
}

function appendParagraphs(stdin){
    var choosenDiv = document.getElementById("Story");
    var newP = document.createElement('p');
    var text = document.createTextNode(stdin);
    newP.appendChild(text);
    choosenDiv.appendChild(newP, choosenDiv);
}
function appendChoice(choices){
    var choosenDiv = document.getElementById("Story");
    var newP = document.createElement('p');
    var newA = document.createElement('a');
    var linkText = document.createTextNode('blank');
    newP.className = 'links'
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
}
function addListeners(watched_id){
    document.getElementById(watched_id).addEventListener("click", function (event){
        event.preventDefault();
        clickChoice(watched_id);
    });
        
}
function clickChoice(watched_id){
    appendParagraphs("You head " + watched_id);
}