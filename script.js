
var createPolitician= function(name, partyColor){

  var politician= {};
  politician.name = name;
  politician.electionResults= null;
  politician.totalVotes=0; 
  politician.partyColor = partyColor;
 
    politician.tallyUpTotalVotes = function(){
       this.totalVotes = 0;      
      for (var i = 0; i < politician.electionResults.length; i++){
        politician.totalVotes = politician.totalVotes + politician.electionResults[i];
      }   
      politician.rollCall = function()
      { 
        console.log("Name: " + politician.name);
       };
  politician.rollCall();
      }
  return politician;        
}

const Trump = createPolitician("Trump", [245, 141, 136]);
const Biden = createPolitician("Biden", [132, 17, 11]);


Trump.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];
Biden.electionResults  = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

Trump.tallyUpTotalVotes();
Biden.tallyUpTotalVotes();

Trump.electionResults[9]=1;
Biden.electionResults[9]=28;

Trump.electionResults[4]=17;
Biden.electionResults[4]=38;

Trump.electionResults[43]=11;
Biden.electionResults[43]=27;

var winner = function ()
{ 
if (Trump.totalVotes > Biden.totalVotes){
    winner = Trump.name;
}else if (Trump.totalVotes < Biden.totalVotes){
    winner = Biden.name;
}else{
    winner = "DRAW"
}
}
winner ();
   
var setStateResults = function(state){
  theStates[state].winner = null;
  if (Trump.electionResults [state]  > Biden.electionResults[state])
      {
    theStates[state].winner = Trump;
  } else if
   (Trump.electionResults [state] < Biden.electionResults[state]){
    theStates[state].winner = Biden;
  }
  

  //change state color on the map
       var stateWinner= theStates[state].winner;
  if (stateWinner != null) {
    theStates[state].rgbColor = stateWinner.partyColor
  } else {
    theStates[state].rgbColor = [11, 32, 57];      
  }
  var stateInfoTable= document.getElementById('stateResults');                                   
  var header = stateInfoTable.children[0];
  var body = stateInfoTable.children[1];
  var stateName = header.children[0].children[0];
  var abbrev = header.children[0].children[1];
  var candidate1Name = body.children[0].children[0];
  var candidate2Name= body.children[1].children[0];                                
  var candidate1Results= body.children[0].children[1];
  var candidate2Results= body.children[1].children[1];                                
  var winnersName = body.children[2].children[1];

  stateName.innerText = theStates[state].nameFull;
  abbrev.innerText = "(" +theStates[state].nameAbbrev + ")";
  candidate1Name.innerText = Trump.name;
  candidate2Name.innerText = Biden.name;
  candidate1Results.innerText = Trump.electionResults[state];
  candidate2Results.innerText = Biden.electionResults[state];
  if (theStates[state].winner === null){
    winnersName.innerText = "DRAW";
} else {
    winnersName.innerText = theStates[state].winner.name;
}

 // stateWinner.innerText = theStates[state].winner.name;
  
  var countryInfoTable = document.getElementById('countryResults');
  var row = countryInfoTable.children[0].children[0];
  
   row.children[0].innerText = Trump.name;
   row.children[1].innerText = Trump.totalVotes;
  row.children[2].innerText = Biden.name;
  row.children[3].innerText = Biden.totalVotes;
  row.children[5].innerText = winner;
}