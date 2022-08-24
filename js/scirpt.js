
fetch(`https://valorant-api.com/v1/agents/`)
    .then((data) => data.json())
    .then((data) => data = data.data).then((data) => AGENTS(data))

const $playerCards = $('.selection')
function AGENTS(data) {

    data.map((data) => {
        //console.log(data.displayName)
        let uuid = data.uuid;
        const agentCard = `   
            <div id="${uuid}" class="indBox">
            <img src="${data.displayIcon}"/>
            <h3>${data.displayName}</h3>  
            </div>`;
        $playerCards.append(agentCard);
        const fullCard = `
        <div id="${data.displayName}Full" class ="fullCard">
        <img src ="${data.fullPortrait}"/>
        </div>
        `;
        $(`#${data.uuid}`).on('click', function(){
            console.log("works")
           $("#fullAgent").append(fullCard)
        })
    });

}