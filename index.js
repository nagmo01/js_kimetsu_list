async function callApi(category_name) {
  switch (category_name){
    case "all":
      url = "https://ihatov08.github.io/kimetsu_api/api/all.json";
      break;
    case "hashira":
      url = "https://ihatov08.github.io/kimetsu_api/api/hashira.json";
      break;
    case "oni":
      url = "https://ihatov08.github.io/kimetsu_api/api/oni.json";
      break;
    case "kisatsu":
      url = "https://ihatov08.github.io/kimetsu_api/api/kisatsutai.json";
      break;
  };


  const loading = document.querySelector('.loading');
  loading.classList.remove('hide');
  //setTimeout(function(){
    //loading.classList.add('hide');
  //}, 500);

  const value = document.category_form.category_name;
  value.forEach((element) => {
    console.log(element);
  });
  const res = await fetch(url);
  const users = await res.json();
  let user
  let userName
  let userImage
  let userCategory
  console.log(users)
  allCharactorElement.innerHTML = '';
  users.forEach((element) => {
    user = document.createElement('div');
    user.classList.add('col')
    userName = document.createElement('p');
    userName.classList.add('pt-3')
    userImage = document.createElement('img');
    userImage.classList.add('mx-auto');
    userCategory = document.createElement('p');
    userName.textContent = element.name;
    userImage.src = baseUrl + element.image;
    userCategory.textContent = element.category;
    user.appendChild(userImage);
    user.appendChild(userName);
    user.appendChild(userCategory);
      allCharactorElement.appendChild(user);
  });
  loading.classList.add('hide');
};


//const url = "https://ihatov08.github.io/kimetsu_api/api/all.json";
const baseUrl = "https://ihatov08.github.io/";
const name = document.querySelector("#name");
const Image = document.querySelector("#Image");

const allCharactorElement = document.querySelector('#allCharactor');

//ローディング要素
const loading = document.querySelector('.loading');



//APIからJSONデータを取得する
callApi("all");

