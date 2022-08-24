
fetch(`https://valorant-api.com/v1/agents/`)
    .then((data) => data.json())
    .then((data) => data = data.data).then((data) => AGENTS(data))

const $playerCards = $('.selection')
function AGENTS(data) {

    data.map((data) => {
        // console.log(data.displayName)
        let uuid = data.uuid;
        let abilities = data.abilities;
        console.log(abilities)
        const agentCard = `   
            <div id="${uuid}" class="indBox">
            <img src="${data.displayIcon}"/>
            <h3>${data.displayName}</h3>  
            </div>`;
        $playerCards.append(agentCard);
        const fullCard = `
        <div id="${data.displayName}Full" class ="fullCard">
        <h2>${data.displayName}</h2>
            <img src ="${data.fullPortrait}"/>
            <p id="description">${data.description}</p>
            <div id="abilities">
                <h3>Abilities</h3>
                <div title="${abilities[0].description}" id="abilityDescription">
                    <h4>${abilities[0].displayName}</h4>
                    <img src ="${abilities[0].displayIcon}"/>
                    </div>
                <div title="${abilities[1].description} id="abilityDescription">
                ${abilities[1].displayName}
                    <img src ="${abilities[1].displayIcon}"/>
                    </div>
                <div title="${abilities[2].description} id="abilityDescription">
                ${abilities[2].displayName}
                    <img src ="${abilities[2].displayIcon}"/>
                    </div>
                <div title="${abilities[3].description} id="abilityDescription">
                ${abilities[3].displayName}
                    <img src ="${abilities[3].displayIcon}"/>
                    </div>
            </div>
        </div>
        `;
        $(`#${data.uuid}`).on('click', function () {
            console.log("works")
            $("#fullAgent").append(fullCard)
        })
    });

}