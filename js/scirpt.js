
fetch(`https://valorant-api.com/v1/agents/`)
    .then((data) => data.json())
    .then((data) => data = data.data).then((data) => AGENTS(data))

const $playerCards = $('.selection')
$playerCards.innerHTML = "deez";
function AGENTS(data) {

    data.map((data) => {
        //console.log(data.displayName)
        const agentCard = `   
        <div id="box">
            <div id="individualBox">
            <img src="${data.displayIconSmall}"
            <h3>${data.displayName}</h3>  
            </div>
        </div>`;
        $playerCards.append(agentCard);
    });
}