/* 
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
            this.newpara = "Whether you shall turn out to be the hero of your life, or whether that station will be held by anybody else, these pages must show." //Thank you David Copperfield
            this.choices = ["Open your eyes", "Keep your eyes shut"]
            this.results = [{JC:1},{JC:0}]
            appendParagraphs (this.newpara)
            appendChoice (this.choices)
        } else {
            //continue the story. This is run every time except the first.
            this.decision = this.results[this.choices.indexOf(choiceref)]
            //updateworld
            theworld.UpdateWorld(this.decision)
            //construct new paragraph
            this.newpara = theworld.JC_value
            this.choices = ["Open your eyes", "Keep your eyes shut"]
            this.results = [{JC:1},{JC:0}]
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
    this.UpdateWorld = function(updates){
        if (updates.JC){
            this.JC_value += updates.JC
            this.JC_value = this.JC_value % 12
            this.JC_value = Math.max(0,this.JC_value)
        }
    }
    this.newpara = function(){
        switch(this.JC_value){
            // Joseph Campbell's - Hero Journey
            case 0: //Ordinary World
                break;
            case 1: //Call to Adventure
                break;
            case 2: //Assistance
                break;
            case 3: //Departure
                break;
            case 4: //Trials
                break;
            case 5: //Approach
                break;
            case 6: //Crisis
                break;
            case 7: //Treasure
                break;
            case 8: //Result
                break;
            case 9: //Return
                break;
            case 10: //New life
                break;
            case 11: //Resolution
                break;
            case 12: //END
                break;
            default:
                break;

        } 
    }
}


function randItem () {
    var itemArray = [];
    //JSON array of items that can exist in the game
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