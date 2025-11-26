// function checkEven(num) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (num % 2 === 0) {
//                 resolve("Even Number");
//             } else {
//                 reject("Odd Number");
//             }
//         }, 1000);
//     });
// }

// checkEven(34)
//     .then((result) => {
//         let mainResult = `Updated msg is ${result}`;
//         console.log(mainResult);
//     })
//     .catch((error) => console.log(error));

    //async
    async function getResult() {
    try {
        const response = await fetch("https://fakestoreapi.com/products/");
        const data = await response.json();

        console.log(data);

        data.map((element) => {
            const subDiv = document.createElement("div");
            subDiv.className = "card";

            subDiv.innerHTML = `
                <img src="${element.image}" alt="" />
                <h1>${element.title}</h1>
                <p>${element.description}</p>
                <p class="price">Rs ${element.price}</p>
            `;

            mainDiv.append(subDiv);
        });

    } catch (error) {
        console.log(error);
    }
}

getResult();

    