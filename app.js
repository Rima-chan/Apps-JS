const data = [
    {
        id: "app1",
        title: "Météo app",
        img: "./images/app_meteo_capture.png",
        link: "https://rima-chan.github.io/Meteo-app/"
    },
    {
        id: "app2",
        title: "To-do Liste",
        img: "./images/todoListe_capture.png",
        link: "https://rima-chan.github.io/todo-list-JS/"
    },

]

const main = document.querySelector('#main');

document.addEventListener('DOMContentLoaded', displayCards(data));

function displayCards(data) {
    data.forEach(item => {
        const template = `<div class="flex flex-col flex-shrink-0 shadow-lg w-80  bg-gray-50 bg-opacity-70 transition-all duration-150 ease-out transform hover:scale-105">
                                <a class=""
                                href="${item.link}"
                                target="_blank"
                                rel="noreferrer"
                                >
                                    <div class="relative">
                                        <img src="./images//js-logo.png" class="w-16 h-16 absolute top-0 left-0 z-40">
                                        <img src="${item.img}">
                                    </div>
                                    <div class="shadow-inner ">
                                        <h2 class="uppercase font-semibold text-center py-8">${item.title}</h2>
                                    </div>
                                </a>
                            </div>`;
        main.insertAdjacentHTML('afterbegin', template);
    })
}