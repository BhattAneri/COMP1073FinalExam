//Fetch all the data from the given URL and display it to the user screen
fetch('https://bhattaneri.github.io/comp1073-Lab_4/Lab4/main.json').then(function(response) {
    return response.json(); //this response to json file instead of the text file.
}).then(function(json) {
    let jsonObj = json;
    cats(jsonObj);
}).catch(function(err) {
    console.log('Fetch Problem ' + err.message);
});

//function is used to display the content on the webpages on the user end.
function cats(jsonObj) {
    let cat = jsonObj.cats;
    let section = document.querySelector('section');
    for (let i = 0; i < strangeproducts.length; i++) {
        let content = document.createElement('article');
        let h3 = document.createElement('h2');
        let image = document.createElement('img');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        image.setAttribute('src', 'https://bhattaneri.github.io/comp1073-Lab_4/Lab4/Images/' + cat[i].photo);
        image.setAttribute('alt', cat[i].name);
        h3.textContent = cat[i].name;
        p1.textContent = 'Species: ' + cat[i].species;
        p2.textContent = 'Favourite Food: ' + cat[i].favFoods;
        p3.textContent = 'Age: ' + cat[i].age;
        content.appendChild(imgage);
        content.appendChild(h3);
        content.appendChild(p1);
        content.appendChild(p2);
        section.appendChild(content);
    }
};