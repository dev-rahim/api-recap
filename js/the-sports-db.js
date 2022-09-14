const loadData = async () => {
    const res = await fetch('https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=x');
    const data = await res.json();
    getPlayers(data);
    // fetch('https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=x')
    //     .then(res => res.json())
    //     .then(data => console.log(data))
}
loadData();
const getPlayers = (data) => {
    const searchResult = document.getElementById('searchResult');
    data.player.forEach(element => {
        const div = document.createElement('div');
        div.classList.add('card-group');
        div.innerHTML = `
                <div class="card m-3">
                    <img class="card-img-top" src="${element.strThumb}" alt="image not found">
                    <div class="card-body">
                        <h5 class="card-title">${element.strPlayer}</h5>
                        <h6><strong>${element.strNationality}</strong></h6>
                        <p class="card-text">${element.strDescriptionEN.slice(0, 150)}</p>
                    </div>
                </div>
        `;
        searchResult.appendChild(div)
    });

}