
fetch(`https://valorant-api.com/v1/agents/`)
    .then((data) => data.json())
    .then((data) => data = data.data).then((data) => AGENTS(data));


// Dropdown menu function
// ref https://stackoverflow.com/questions/18491179/select-different-options-at-an-select-form-and-show-different-content
$(document).ready(function () {
    $("#options").change(function () {
        $("#fullAgent").empty();
        $(".indBox").addClass("hidden");
        $(".content-" + $(this).val()).removeClass("hidden");

    });
});

const $selectionCards = $('.selection')
function AGENTS(data) {
    // filter duplicate or error characters
    const filteredData = data.filter(obj => {
        return obj.isPlayableCharacter === true;
    })
    filteredData.map((data) => {
        // console.log(data.displayName)
        let uuid = data.uuid;
        let abilities = data.abilities;
        // console.log(abilities)
        const agentCard = `
            <div id="${uuid}" class="indBox content-Agents hidden">
            <img src="${data.displayIcon}"/>
            <h3>${data.displayName}</h3>  
            </div>`;
        $selectionCards.append(agentCard);
        const fullCard = `
        <div id="${data.displayName}Full" class ="fullCard">
        <h2>${data.displayName}</h2>
            <img src ="${data.fullPortrait}"/>
            <p id="description">${data.description}</p>
            <h3>Abilities</h3>
            <div id="abilities">
                <div title="${abilities[0].description}" id="abilityDescription">
                    <h5>${abilities[0].displayName}</h5>
                    <img src ="${abilities[0].displayIcon}"/>
                    </div>
                <div title="${abilities[1].description}" id="abilityDescription">
                    <h5>${abilities[1].displayName}</h5>
                    <img src ="${abilities[1].displayIcon}""/>
                    </div>
                <div title="${abilities[2].description}" id="abilityDescription">
                    <h5>${abilities[2].displayName}</h5>
                    <img src ="${abilities[2].displayIcon}"/>
                    </div>
                <div title="${abilities[3].description}" id="abilityDescription">
                    <h5>${abilities[3].displayName}</h5>
                    <img src ="${abilities[3].displayIcon}"/>
                    </div>
            </div>
        </div>
        `;

        $(`#${data.uuid}`).on('click', function () {
            // console.log("works")
            // research .empty() function ref: https://www.w3schools.com/jquery/html_empty.asp#:~:text=The%20empty()%20method%20removes,use%20the%20remove()%20method.
            $("#fullAgent").empty();
            $("#fullAgent").append(fullCard)
        })
    });

}

fetch(`https://valorant-api.com/v1/maps/`)
    .then((data) => data.json())
    .then((data) => data = data.data).then((data) => MAPS(data));
function MAPS(data) {
    const filteredData = data.filter(obj => {
        return obj.displayIcon !== null;
    })
    filteredData.map((data) => {
        // console.log(data.displayName)
        let uuid = data.uuid;
        const mapCard = `
                <div id="${uuid}" class="indBox content-Maps hidden">
                <img src="${data.displayIcon}"/>
                <h3>${data.displayName}</h3>  
                </div>`;
        $selectionCards.append(mapCard);
        const fullCard = `
            <div id="${data.displayName}Full" class ="fullCard">
            <h2>${data.displayName}</h2>
                <img src ="${data.splash}"/>
                <p id="description">${data.coordinates}</p>
            </div>
            `;

        $(`#${data.uuid}`).on('click', function () {
            // console.log("works")
            // research .empty() function ref: https://www.w3schools.com/jquery/html_empty.asp#:~:text=The%20empty()%20method%20removes,use%20the%20remove()%20method.
            $("#fullAgent").empty();
            $("#fullAgent").append(fullCard)
        })
    });

}