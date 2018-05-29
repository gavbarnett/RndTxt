/* 
Concepts:

Joseph Campbell's - Hero Journey
    0. Ordinary World
    1. Call to Adventure
    2. Assistance
    3. Departure
    -------------
    4. Trials
    5. Approach
    6. Crisis
    7. Treasure
    8. Result
    -------------
    9. Return
    10. New life
    11. Resolution
    12 --> 0

*/
var theworld = new World();
var thestory = new Story();

function Story () {
    this.choices = []
    this.results = []
    this.newpara = ""
    this.decision = []
    this.nextline = function (choiceref) {
        if (!choiceref) {
            //begin the story. This is only run once
            appendParagraphs ("Whether you shall turn out to be the hero of your life, or whether that station will be held by anybody else, these pages must show."); //Thank you David Copperfield
            this.choices = ["Open your eyes"]
            this.results = [{JC:-5},{Bob:3}]
            appendChoice (this.choices)
        } else {
            //continue the story. This is run every time except the first.
            this.decision = this.results[this.choices.indexOf(choiceref)]
            //updateworld
            theworld.UpdateWorld(this.decision)
            //construct new paragraph
            this.newpara = theworld.JC_value
            appendParagraphs(this.newpara)
            appendChoice (this.choices)  
        }
    }
}

function World () {
    //model of the world
    this.JC_value = 0 //Joseph Campbell value
    this.location = "Forest"
    this.weather = "Sunny"
    var itemCount = 3;
    this.items = [];
    for (i = 0; i<itemCount; i++){
        this.items.push(randItem())
    } 
    this.money = Math.round(Math.random()*100)
    var updatepush = []
    this.UpdateWorld = function(updates){
        if (updates.JC){
            this.JC_value += updates.JC
            this.JC_value = this.JC_value % 12
            this.JC_value = Math.max(0,this.JC_value)
        }
    }
}


function randItem () {
    var itemArray = [];
    itemArray = [{
        name: "bread",
        edible: true,
        energy: 20+Math.floor(Math.random()*10),
        weight: 500+Math.floor(Math.random()*100),
        strength: 5+Math.floor(Math.random()*5)
    },
    {
        name: "stick",
        edible: false,
        energy: 0,
        weight: 400+Math.floor(Math.random()*200),
        strength: 50+Math.floor(Math.random()*100)
    },
    {
        name: "axe",
        edible: false,
        energy: 0,
        weight: 1000+Math.floor(Math.random()*700),
        strength: 300+Math.floor(Math.random()*200)
    },
    {
        name: "rope",
        edible: false,
        energy: 0,
        weight: 500+Math.floor(Math.random()*50),
        strength: 200+Math.floor(Math.random()*100)
    }]

    return itemArray[Math.floor(Math.random()*itemArray.length)];
}