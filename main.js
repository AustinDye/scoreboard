let firstTeamScore = 0
let secondTeamScore = 0


const teams = {
    team1: 0,
    team2: 0
}

// TODO use bracket notation to access a property in an object

function scoreUp(team){
    
    firstTeamScore ++
    console.log(firstTeamScore)
    document.getElementById("first-team").innerText = `Score: ${firstTeamScore}`
}

function scoreUpTwo(){
    secondTeamScore ++
    console.log(secondTeamScore)
    document.getElementById("second-team").innerText = `Score: ${secondTeamScore}`
}