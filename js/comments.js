// Task 1
const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => getComments(data));
}

getData()
const getComments = (data) => {
    const commentsContainer = document.getElementById('comments-container');
    data.forEach(element => {
        const div = document.createElement('div');
        div.style.marginTop = '10px';
        div.classList.add('col-4');
        div.innerHTML = `
            <div onclick="getID(${element.id})" class="card">
                <div class="card-body">
                    <h5 class="card-title">${element.name.slice(0, 15)}</h5>
                    <h6 class="card-title">${element.email}</h6>
                    <p class="card-text">${element.body.slice(0, 30)}</p>
                </div>
            </div>
        `;
        commentsContainer.appendChild(div);
        // console.log(element.name, '+', element.email);

    });
}
const getID = async id => {
    // console.log(id);
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`);
    const data = await res.json();
    document.getElementById('fullComment').innerHTML = `
    <div class="card">
    <div class="card-body">
        <h5 class="card-title">${data.name}</h5>
        <h6 class="card-title">${data.email}</h6>
        <p class="card-text">${data.body}</p>
    </div>
</div>
    `;
    // console.log(data.name);

}

//TASK 2
