const loadData = async () => {
    const searchInput = document.getElementById('searchInput');
    if (searchInput.value == '') {
        const btn = document.getElementById('search-btn').setAttribute(alert("Invalid Input"));
    } else {

        const res = await fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchInput.value}`);
        const data = await res.json();
        searchInput.value = '';
        console.log(data);
        if (data.player == null || data.player == []) {
            document.getElementById('playerDetails').innerHTML = `
            <h2 class="text-danger text-center">Nothing Found</h2>
            `;
            document.getElementById('searchResult').textContent = '';

        } else {
            document.getElementById('playerDetails').textContent = '';
            getPlayers(data.player);

        }
    }
    // fetch('https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=x')
    //     .then(res => res.json())
    //     .then(data => console.log(data))

}

const getPlayers = (data) => {
    const searchResult = document.getElementById('searchResult');
    searchResult.textContent = '';
    data.forEach(element => {
        const div = document.createElement('div');
        div.classList.add('card-group');
        div.innerHTML = `
                <div onclick="playerDetails('${element.strPlayer}')" class="card m-3">
                    <img class="card-img-top" src="${element.strThumb}" alt="image not found">
                    <div class="card-body">
                        <h5 class="card-title">${element.strPlayer}</h5>
                        <h6><strong>${element.strNationality}</strong></h6>
                        <p class="card-text">${element.strDescriptionEN.slice(0, 150)}</p>
                    </div>
                </div>
        `;
        searchResult.appendChild(div);
    });
}
const playerDetails = async (name) => {
    const res = await fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${name}`);
    const data = await res.json();
    const element = data.player[0];
    console.log(data);
    document.getElementById('playerDetails').innerHTML = `
                <div onclick="playerDetails('${element.strPlayer}')" class="card m-3">
                    <img class="card-img-top" src="${element.strThumb}" alt="image not found">
                    <div class="card-body">
                        <h5 class="card-title">${element.strPlayer}</h5>
                        <h6><strong>${element.strNationality}</strong></h6>
                        <p class="card-text"> Location: ${element.strBirthLocation}</p>
                        <br>
                        <p class="card-text">${element.strDescriptionEN}</p>
                    </div>
                </div>
    `;
}