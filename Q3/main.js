//Fetch all the data from the given URL and display it to the user screen
//this enables a web page to update just part of the page without disrupting what the user is doing 
var requestURL = 'https://jessicagilfillan.github.io/Final_Exam_Prep/Q3/cats.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var catdetails = request.response;
    console.log(catdetails);
    myCats(catdetails);
};

let clickme = document.querySelector('button');
//clickme.addEventListener('click',myCats);

//function is used to display the content on the webpages on the user end.
function myCats(jsonObj) {
    let mycats = jsonObj.cats;
    let section = document.querySelector('section');
    for (let i = 0; i < mycats.length; i++) {
        let content = document.createElement('article');
        let h3 = document.createElement('h2');
        let image = document.createElement('img');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let list = document.createElement('ul');
        //image.setAttribute('src',mycats[i].photo);
        image.setAttribute('src', 'https://github.com/JessicaGilfillan/Final_Exam_Prep/blob/master/Q3/assets/' + mycats[i].photo);
        image.setAttribute('alt', mycats[i].name);
        h3.textContent = mycats[i].name;
        p1.textContent = 'Species: ' + mycats[i].species;
        let favFoods = mycats[i].favFoods;
        for (let j = 0; j < favFoods.length; j++) {
            let listItem = document.createElement('li');
            listItem.textContent = favFoods[j];
            list.appendChild(listItem);
        }
        p2.textContent = 'Age: ' + mycats[i].age;
        content.appendChild(image);
        content.appendChild(h3);
        content.appendChild(p1);
        content.appendChild(p2);
        content.appendChild(list);
        section.appendChild(content);
    }
}