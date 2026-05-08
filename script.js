// База данных на 30+ кружков (Задание 3.1, 3.2)
const organizationsData = [
    {id: 1, name: "Робо-Мастер", city: "Находка", address: "ул. Ленинская, 12", age: 9, type: "IT", coords: [42.822, 132.885]},
    {id: 2, name: "Юный Пикассо", city: "Находка", address: "пр-т Мира, 5", age: 4, type: "Творчество", coords: [42.851, 132.902]},
    {id: 3, name: "ФК Находка", city: "Находка", address: "ул. Северная, 2", age: 7, type: "Спорт", coords: [42.835, 132.890]},
    {id: 4, name: "English Kids", city: "Находка", address: "ул. Школьная, 10", age: 15, type: "Языки", coords: [42.818, 132.875]},
    {id: 5, name: "Гроссмейстер", city: "Находка", address: "ул. Пограничная, 4", age: 10, type: "Наука", coords: [42.840, 132.910]},
    {id: 6, name: "Танцы-Шманцы", city: "Находка", address: "Бул. Энтузиастов, 1", age: 12, type: "Спорт", coords: [42.830, 132.895]},
    {id: 7, name: "Python Ninja", city: "Находка", address: "ул. Гагарина, 15", age: 14, type: "IT", coords: [42.845, 132.905]},
    {id: 8, name: "Дельфиненок", city: "Находка", address: "ул. Спортивная, 3", age: 5, type: "Спорт", coords: [42.815, 132.880]},
    {id: 9, name: "Самбо-90", city: "Находка", address: "ул. Мичурина, 8", age: 6, type: "Спорт", coords: [42.838, 132.888]},
    {id: 10, name: "Звездный голос", city: "Находка", address: "ул. Ленина, 22", age: 16, type: "Творчество", coords: [42.855, 132.915]},
    {id: 11, name: "Авиа-Хобби", city: "Находка", address: "ул. Пирогова, 5", age: 11, type: "IT", coords: [42.825, 132.870]},
    {id: 12, name: "Магия Глины", city: "Находка", address: "пр-т Победы, 11", age: 8, type: "Творчество", coords: [42.833, 132.892]},
    {id: 13, name: "Нихао!", city: "Находка", address: "ул. Озерная, 2", age: 7, type: "Языки", coords: [42.848, 132.908]},
    {id: 14, name: "Театр Теней", city: "Находка", address: "ул. Луначарского, 7", age: 17, type: "Творчество", coords: [42.820, 132.882]},
    {id: 15, name: "Эйнштейн-Клуб", city: "Находка", address: "ул. Парковая, 9", age: 9, type: "Наука", coords: [42.852, 132.900]},
    {id: 16, name: "ТикТок Школа", city: "Находка", address: "ул. Малиновского, 3", age: 13, type: "IT", coords: [42.836, 132.898]},
    {id: 17, name: "Карате Пацан", city: "Находка", address: "ул. Овражная, 1", age: 6, type: "Спорт", coords: [42.812, 132.872]},
    {id: 18, name: "Олимпиадник", city: "Находка", address: "ул. Владивостокская, 14", age: 17, type: "Наука", coords: [42.858, 132.912]},
    {id: 19, name: "Пластилинка", city: "Находка", address: "ул. Дальняя, 6", age: 3, type: "Творчество", coords: [42.831, 132.886]},
    {id: 20, name: "Гимнасточка", city: "Находка", address: "ул. Южная, 25", age: 4, type: "Спорт", coords: [42.810, 132.889]},
    {id: 21, name: "Скетч-Бум", city: "Находка", address: "ул. Сибирская, 2", age: 14, type: "Творчество", coords: [42.842, 132.901]},
    {id: 22, name: "Рок-Гараж", city: "Находка", address: "ул. Дружбы, 1", age: 16, type: "Творчество", coords: [42.860, 132.920]},
    {id: 23, name: "Юный Моряк", city: "Находка", address: "Набережная, 4", age: 10, type: "Спорт", coords: [42.815, 132.890]},
    {id: 24, name: "Кодинг Kids", city: "Находка", address: "ул. Чехова, 3", age: 6, type: "IT", coords: [42.844, 132.915]},
    {id: 25, name: "Французский", city: "Находка", address: "ул. Гоголя, 12", age: 12, type: "Языки", coords: [42.832, 132.903]},
    {id: 26, name: "Баскет-Сити", city: "Находка", address: "Спортзал №5", age: 11, type: "Спорт", coords: [42.828, 132.880]},
    {id: 27, name: "Юный Химик", city: "Находка", address: "ул. Менделеева, 2", age: 8, type: "Наука", coords: [42.850, 132.910]},
    {id: 28, name: "Аниме-Арт", city: "Находка", address: "ул. Восточная, 9", age: 14, type: "Творчество", coords: [42.841, 132.899]},
    {id: 29, name: "Йога-Дети", city: "Находка", address: "Центр Лотос", age: 5, type: "Спорт", coords: [42.825, 132.888]},
    {id: 30, name: "Кибер-Спорт", city: "Находка", address: "Арена", age: 15, type: "IT", coords: [42.839, 132.906]},
    {id: 31, name: "Фото-Охота", city: "Находка", address: "Парк Культуры", age: 12, type: "Творчество", coords: [42.846, 132.912]}
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