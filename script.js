// База данных на 30+ кружков (Задание 3.1, 3.2)
const organizationsData = [
    {id: 1, name: "Робо-Мастер", city: "Находка", address: "ул. Ленинская, 12", age: 9, type: "IT", coords: [42.811187818955446, 132.86722378371792]},
    {id: 2, name: "Юный Пикассо", city: "Находка", address: "пр-т Мира, 5", age: 4, type: "Творчество", coords: [42.83287145742614, 132.8941347953609]},
    {id: 3, name: "ФК Находка", city: "Находка", address: "ул. Северная, 2", age: 7, type: "Спорт", coords: [42.7895516785821, 132.86062271255292]},
    {id: 4, name: "English Kids", city: "Находка", address: "ул. Школьная, 10", age: 15, type: "Языки", coords: [42.825711778447825, 132.89170679721116]},
    {id: 5, name: "Гроссмейстер", city: "Находка", address: "ул. Пограничная, 4", age: 10, type: "Наука", coords: [42.821464772608, 132.885033981868]},
    {id: 6, name: "Танцы-Шманцы", city: "Находка", address: "Бул. Энтузиастов, 1", age: 12, type: "Спорт", coords: [42.836941957786, 132.8810455548832]},
    {id: 7, name: "Python Ninja", city: "Находка", address: "ул. Гагарина, 15", age: 14, type: "IT", coords: [42.79014250442339, 132.86257715488128]},
    {id: 8, name: "Дельфиненок", city: "Находка", address: "ул. Спортивная, 3", age: 5, type: "Спорт", coords: [42.77763144541507, 132.85037326652306]},
    {id: 9, name: "Самбо-90", city: "Находка", address: "ул. Мичурина, 8", age: 6, type: "Спорт", coords: [42.82296668508691, 132.87391041070367]},
    {id: 10, name: "Звездный голос", city: "Находка", address: "ул. Ленина, 22", age: 16, type: "Творчество", coords: [42.81149591395362, 132.86334490075114]},
    {id: 11, name: "Авиа-Хобби", city: "Находка", address: "ул. Пирогова, 5", age: 11, type: "IT", coords: [42.7790301427969, 132.85944015117974]},
    {id: 12, name: "Магия Глины", city: "Находка", address: "пр-т Победы, 11", age: 8, type: "Творчество", coords: [42.85641816048612, 132.68730820885418]},
    {id: 13, name: "Нихао!", city: "Находка", address: "ул. Озерная, 2", age: 7, type: "Языки", coords: [42.820101961543685, 132.8119421395392]},
    {id: 14, name: "Театр Теней", city: "Находка", address: "ул. Луначарского, 7", age: 17, type: "Творчество", coords: [42.80888063533127, 132.87038488371783]},
    {id: 15, name: "Эйнштейн-Клуб", city: "Находка", address: "ул. Парковая, 9", age: 9, type: "Наука", coords: [42.7881342844948, 132.8603221260455]},
    {id: 16, name: "ТикТок Школа", city: "Находка", address: "ул. Малиновского, 3", age: 13, type: "IT", coords: [42.83792648164338, 132.905863451182]},
    {id: 17, name: "Карате Пацан", city: "Находка", address: "ул. Овражная, 1", age: 6, type: "Спорт", coords: [42.85973741583237, 132.69273622604825]},
    {id: 18, name: "Олимпиадник", city: "Находка", address: "ул. Владивостокская, 14", age: 17, type: "Наука", coords: [42.81168805937779, 132.87129056837492]},
    {id: 19, name: "Пластилинка", city: "Находка", address: "ул. Дальняя, 6", age: 3, type: "Творчество", coords: [42.818825364793334, 132.82963570885292]},
    {id: 20, name: "Гимнасточка", city: "Находка", address: "ул. Южная, 25", age: 4, type: "Спорт", coords: [42.80216603808182, 132.86537161070297]},
    {id: 21, name: "Скетч-Бум", city: "Находка", address: "ул. Сибирская, 2", age: 14, type: "Творчество", coords: [42.850842720813056, 132.88946211070473]},
    {id: 22, name: "Юный Моряк", city: "Находка", address: "Набережная, 4", age: 10, type: "Спорт", coords: [42.838945584922236, 132.91922669906234]},
    {id: 23, name: "Кодинг Kids", city: "Находка", address: "ул. Чехова, 3", age: 6, type: "IT", coords: [42.841751339649, 132.89965959721184]},
    {id: 24, name: "Аниме-Арт", city: "Находка", address: "ул. Восточная, 9", age: 14, type: "Творчество", coords: [42.863134875545185, 132.69748182604846]}
];

let myMap;

// Инициализация Яндекс.Карт
ymaps.ready(() => {
    myMap = new ymaps.Map("yandex-map", {
        center: [42.82, 132.88],
        zoom: 12,
        controls: ['zoomControl', 'fullscreenControl']
    });
    renderData(organizationsData);
});

// Функция отрисовки (Задание 3.4)
function renderData(data) {
    const listContainer = document.getElementById('clubs-container');
    listContainer.innerHTML = '';
    myMap.geoObjects.removeAll();

    data.forEach(club => {
        // Метка на карте
        const placemark = new ymaps.Placemark(club.coords, {
            balloonContent: `<strong>${club.name}</strong><br>${club.address}`
        }, {
            preset: 'islands#pinkCircleDotIcon'
        });
        myMap.geoObjects.add(placemark);

        // Карточка в списке
        const card = document.createElement('div');
        card.className = 'club-card';
        card.innerHTML = `
            <div class="card-badge">${club.type}</div>
            <h3>${club.name}</h3>
            <p>📍 ${club.address}</p>
            <p>👶 Возраст: ${club.age} лет</p>
            <button class="btn-card" onclick="alert('Запись в ${club.name} открыта!')">Записаться</button>
        `;
        listContainer.appendChild(card);
    });
}

// Алгоритм фильтрации (Задание 3.1)
window.applyFilters = () => {
    const ageValue = document.getElementById('age-input').value;
    const typeValue = document.getElementById('type-select').value;

    const filtered = organizationsData.filter(club => {
        // Подбор по возрасту (диапазон +-1 год для гибкости)
        const ageMatch = !ageValue || Math.abs(club.age - ageValue) <= 1;
        const typeMatch = typeValue === 'all' || club.type === typeValue;
        return ageMatch && typeMatch;
    });

    renderData(filtered);
};
