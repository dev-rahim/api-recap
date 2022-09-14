const loadData = () => {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => getUserData(data.results[0]))
}
loadData();

const getUserData = (data) => {
    document.getElementById('user-profile').innerHTML = `
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${data.picture.large}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${data.name.first + ' ' + data.name.last}</h5>
                    <h6>Location</h6>
                    <p class="card-text">street= number: ${data.location.street?.number + ' name: ' + data.location.street.name}</p>
                    <p class="card-text">city= ${data.location.city}</p>
                    <p class="card-text">state= ${data.location.state}</p>
                    <p class="card-text">country= ${data.location.country}</p>
                    <p class="card-text">postcode= ${data.location.postcode}</p>
                    <p class="card-text">coordinates= latitude: ${data.location.coordinates.latitude} longitude: ${data.location.coordinates.longitude} </p>
                    <p class="card-text">timezone= offset: ${data.location.timezone.offset} description: ${data.location.timezone.description}</p>
                    <a onclick="loadData()" class="btn btn-primary">Another User</a>
                </div>
            </div>
            `;
}