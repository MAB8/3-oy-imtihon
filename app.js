"use strict" 


// "id": 1,
// "num": "001",
// "name": "Bulbasaur",
// "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
// "type": ["Grass","Poison"],
// "height": "0.71 m",
// "weight": "6.9 kg",
// "candy": "Bulbasaur Candy",
// "candy_count": 25,
// "egg": "2 km",
// "spawn_chance": 0.69,
// "avg_spawns": 69,
// "spawn_time": "20:00",
// "multipliers": [1.58],
// "weaknesses": ["Fire","Ice","Flying","Psychic"],
// "next_evolution": [{
//     "num": "002",
//     "name": "Ivysaur"
// },
// {
//     "num": "003",
//     "name": "Venusaur"
// }
// ]








const newData = pokemons.map((item, index, array) => {
    return {
        id: item.id,
        number: item.num,
        name: item.name,
        img: item.img,
        type: item.type,
        height: item.height,
        weight: item.weight,
        candy: item.candy,
        candyCount: item.candy_count,
        egg: item.egg,
        spawnChance: item.spawn_chance,
        avgSpawns: item.avg_spawns,
        spawnTime: item.spawn_time,
        multipliers: item.multipliers,
        weaknesses: item.weaknesses,
        nextEvolution: item.next_evolution,
        grass: item.grass,
    }
});


// console.log(newData);


newData.forEach((e) => {
    const card = createElement('div', 'card box border', `
        <img scr="${e.img}" alt="${e.name}" class="card-top-img"></img>
        <div class="card-body">
            <h3>${e.name}</h3>
            <p>${e.type}</p>
        </div>
        <div><span><strong>${e.weight}</span></strong>
            <span><strong>${e.avgSpawns} age </span></strong>
        </div>
            `)

    $(`.wrapper`).appendChild(card)

    // console.log(card);
})


const weaknesses = [];

function weakness() {
    newData.forEach((item) => {
        item.weaknesses.forEach((e) => {
            // weaknesses.push(e)
            if (!weaknesses.includes(e)) {
                weaknesses.push(e)
            }


        })
    })

}

console.log(weaknesses);

weakness()

weaknesses.forEach((e) => {
    const option = createElement('option', 'option-itom', e);
    $("#weaknesses").appendChild(option);
})

