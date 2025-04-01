const summary = document.querySelector('.summary-panel-list');

async function getData() {
    try {
        const res = await fetch('data.json');
        const data = await res.json();
        console.log(data);

        for(let x = 0; x < data.length; x++) {
            console.log(data[x].category);
            console.log(data[x].score);
            console.log(data[x].icon);

            let item = `
                <div class="summary-panel-item">
                    <div class="summary-info">
                        <img src="${data[x].icon}" alt="">
                        <h4> ${data[x].category}  </h4>
                    </div>
                    <p class="summary-score"> 
                        <span>
                            ${data[x].score}

                        </span>
                        / 100 
                    </p>
                </div>
                `
            summary.insertAdjacentHTML('beforeend', item);
        }
    } catch (e) {
        throw new Error('Error: Not Found!');
    }
}

getData();

// OR
// const getData = async () => {
//     const res = await fetch('./data.json');
//     const data = await res.json();
//     console.log(data);
//     // console.log(data[0].category);
// }
// getData();