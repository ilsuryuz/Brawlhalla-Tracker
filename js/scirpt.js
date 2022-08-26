const URL = "https://valorant-api.com/v1/";


// Dropdown menu function
// ref https://stackoverflow.com/questions/18491179/select-different-options-at-an-select-form-and-show-different-content
$(document).ready(function () {
    $("#options").change(function () {
        $("#fullCard").empty();
        $(".indBox").addClass("hidden");
        $(".content-" + $(this).val()).removeClass("hidden");

    });
});


const $selectionCards = $('.selection')
$.ajax(URL+ "agents").then((data) => data = data.data).then((data) => AGENTS(data));

const $fake = $(".fakeBox")
function AGENTS(data) {
    // filter duplicate or error characters
    const filteredData = data.filter(obj => {
        return obj.isPlayableCharacter === true;
    })
    
    filteredData.map((data) => {
        
        let $uuid = data.uuid;
        let abilities = data.abilities;
        
        
        // DOM Manipulation
        // For choices of agents
        const $box = $fake.clone(true);
        const $imgSrc = $box.find('img')
        const $h3 = $box.find('h3')
        $box.removeClass("fakeBox")
        $box.addClass("content-Agents indBox")
        $box.attr("id", $uuid);
        $imgSrc.attr("src", `${data.displayIcon}`)
        $h3.html(`${data.displayName}`)
        $box.appendTo($selectionCards)
        // elements of full card
        const $fakeCardAgent = $(".fakeCardAgent");
        const $trueCardAgent = $fakeCardAgent.clone(true);
        const $h2Full = $trueCardAgent.find('h2');
        const $cardImg = $trueCardAgent.find('img');
        const $pFull = $trueCardAgent.find('p')
        // elements of div Abilities in full card
        const $divAbility = $trueCardAgent.find('#abilities');
        const $ability1 = $divAbility.find(".ab1");
        const $ability2 = $divAbility.find(".ab2");
        const $ability3 = $divAbility.find(".ab3");
        const $ability4 = $divAbility.find(".ab4");
        // add correct content for fullCard 
        $trueCardAgent.removeClass("fakeCard hidden")
        $trueCardAgent.addClass("fullCardAgent")
        $trueCardAgent.attr("id", `${data.displayName}+Full`)
        $h2Full.html(`${data.displayName}`)
        $cardImg.attr("src", `${data.fullPortrait}`)
        $pFull.html(`${data.description}`)

        // content for ability 1
        $ability1.attr("title", `${abilities[0].description}`)
        $ability1.find("h5").html(`${abilities[0].displayName}`)
        $ability1.find("img").attr("src", `${abilities[0].displayIcon}`)
        // content for ability 2
        $ability2.attr("title", `${abilities[1].description}`)
        $ability2.find("h5").html(`${abilities[1].displayName}`)
        $ability2.find("img").attr("src", `${abilities[1].displayIcon}`)
        // content for ability 3
        $ability3.attr("title", `${abilities[2].description}`)
        $ability3.find("h5").html(`${abilities[2].displayName}`)
        $ability3.find("img").attr("src", `${abilities[2].displayIcon}`)
        // content for ability 4
        $ability4.attr("title", `${abilities[3].description}`)
        $ability4.find("h5").html(`${abilities[3].displayName}`)
        $ability4.find("img").attr("src", `${abilities[3].displayIcon}`)

        // when user clicks agent in selection menu a full profile will appear on the right with full info
        
        $("#"+ $uuid).on('click', function () {
            // console.log("works")
            // research .empty() function ref: https://www.w3schools.com/jquery/html_empty.asp#:~:text=The%20empty()%20method%20removes,use%20the%20remove()%20method.
            $("#fullCard").empty();
            $trueCardAgent.appendTo($('#fullCard'))
        })
    });

}



$.ajax(URL+ "maps").then((data) => data = data.data).then((data) => MAPS(data));
function MAPS(data) {
    // filters "The Range" map so it does not show up, because not an online map
    const filteredData = data.filter(obj => {
        return obj.displayIcon !== null;
    })
    filteredData.map((data) => {
        // console.log(data.displayName)
        let $uuid = data.uuid;
        const $fakeCardMaps = $(".fakeCardMap");
        // DOM Manipulation
        // Choices of maps
        const $box = $fake.clone(true);
        const $imgSrc = $box.find('img')
        const $h3 = $box.find('h3')
        $box.removeClass("fakeBox")
        $box.addClass("content-Maps indBox")
        $box.attr("id", $uuid);
        $imgSrc.attr("src", `${data.displayIcon}`)
        $h3.html(`${data.displayName}`)
        $box.appendTo($selectionCards)

        $selectionCards.append($box);

        const $trueCardMap = $fakeCardMaps.clone(true);
        const $h2Full = $trueCardMap.find('h2');
        const $cardImg = $trueCardMap.find('img');
        const $pFull = $trueCardMap.find('p')

        $trueCardMap.removeClass("fakeCardMap hidden")
        $trueCardMap.addClass("fullCardMap")
        $trueCardMap.attr("id", `${data.displayName}+Full`)
        $h2Full.html(`${data.displayName}`)
        $cardImg.attr("src", `${data.splash}`)
        $pFull.html(`${data.coordinates}`)

        // const fullCard = `
        //     <div id="${data.displayName}Full" class ="fullCard">
        //     <h2>${data.displayName}</h2>
        //         <img src ="${data.splash}"/>
        //         <p id="description">${data.coordinates}</p>
        //     </div>
        //     `;

        $(`#${data.uuid}`).on('click', function () {
            // console.log("works")
            // research .empty() function ref: https://www.w3schools.com/jquery/html_empty.asp#:~:text=The%20empty()%20method%20removes,use%20the%20remove()%20method.
            $("#fullCard").empty();
            $trueCardMap.appendTo($('#fullCard'))
        })
    });

}


$.ajax(URL+ "weapons").then((data) => data = data.data).then((data) => WEAPONS(data));
function WEAPONS(data) {
    // filters "The Range" map so it does not show up, because not an online map
    // const filteredData = data.filter(obj => {
    //     return obj.displayIcon !== null;
    // })
    data.map((data) => {
        // console.log(data.displayName)
        let uuid = data.uuid;
        const weaponCard = `
                <div id="${uuid}" class="indBox content-Weapons hidden">
                
                <h3>${data.displayName}</h3>  
                </div>`;
        $selectionCards.append(weaponCard);
        const fullCard = `
            <div id="${data.displayName}Full" class ="fullCard">
            <h2>${data.displayName}</h2>
                <img src ="${data.displayIcon}"/>
                <p id="description">${data.coordinates}</p>
            </div>
            `;

        $(`#${data.uuid}`).on('click', function () {
            // console.log("works")
            // research .empty() function ref: https://www.w3schools.com/jquery/html_empty.asp#:~:text=The%20empty()%20method%20removes,use%20the%20remove()%20method.
            $("#fullCard").empty();
            $("#fullCard").append(fullCard)
        })
    });

}