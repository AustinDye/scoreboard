let firstTeamScore = 0
let secondTeamScore = 0


teams["team 1", "team 2"]


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