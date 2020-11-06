var createpolitician= function(name)
{
  var politician= {};
  politision.name=""
  politision.electionResults= null;
  politision.totalVotes=0; 
  
  return politician;
  
};

var omer = createpolitician("omer Howes");
var miray = creatpolitician("miray Howes");

omer.electionResults=[5,1,7,2,33,6,4,2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2]
miray.electionResults=[4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1]


omer.electionResults[9]=1;
miray.electionResults[9]=28;

omer.electionResults[4]=17;
miray.electionResults[4]=38;

omer.electionResults[43]=11;
miray.electionResults[43]=27;

console.log(omer.electionResults);
console.log(miray.electionResults);

var winner="???";

if (omer.totalVotes >miray.totalVotes){
  winner=omer.name;
  
}else if
  
  (omer.totalVotes < miray.totalVotes){
  winner=miray.name;
}else{
  winnter = "DRAW.";
}
  
console.log("AND THE WINNER IS..." + winner + "!!!");

var createPolitician = function(name.partyColor){
  polotician.partyColor=partyColor;
  return politician;
}

var omer= createPolitician("Omer Howes",[132, 17, 11]);
var miray= createPolitician("miray Howes",[245, 141, 136]);

console.log("omer's color is" + "omer.partyColor");
console.log("miray's color is" + "miray.partyColor");
            

var setStateResults=function(state){

  theStates[state].winner = null;

if (omer.electionResult[state] > miray.electionResults[state])
    {
  theStates[state].winner = omer;
} else if
 (omer.electionResult[state] < miray.electionResults[state]){
  theStates[state].winner = miray;
}
  
  stateName.innerText = theStates[state].nameFull;
abbrev.innerText = "(" +theStates[state].nameAbbrev + ")";
 
candidate1Name.innerText = betsy.name;
candidate2Name.innerText = jane.name;
 
candidate1Results.innerText = betsy.electionResults[state];
candidate2Results.innerText = jane.electionResults[state];
 
if (theStates[state].winner === null){
    winnersName.innerText = "DRAW";
} else {
    winnersName.innerText = theStates[state].winner.name;
} 
  


var stateWinner= theStates[state];

if (stateWinner!= null) {
  theStates[state].rgb = stateWinner.partyColor;
} else {
  theStates[state].rgb = [11, 32, 57];    
  }
  
  var countryInfoTable = document.getElementById("cuntryResults");
  var row = countryInfoTable.chldren[0].children[0];
  
row.children[0].innerText = betsy.name;
row.children[1].innerText = betsy.totalVotes;
row.children[2].innerText = jane.name;
row.children[3].innerText = jane.totalVotes;
  
  var stateInfoTable= document.getElementById("stateResults");                                   
  var header = stateInfortable.children[0];
  var body = stateInfoTable.children[1];
  var stateName = header.children[0].children[0];
  var abbrev = header.children[0].children[1];
  var candidate2Name= body.children[1].children[0];                                
  var candidate1Name= body.children[0].children[0];
  var candidate1Results= body.children[0].children[1];
  var candidate2Results= body.children[1].children[1];                                
  var winnersName = body.children[2].children[1];
  