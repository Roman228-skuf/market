console.log('Підключено файл скриптів market.js');

// Завантаження JSON-даних
fetch('items.json') // Вкажіть шлях до вашого JSON-файлу
    .then(response => {
        if (!response.ok) {
            throw new Error('Помилка завантаження JSON');
        }
        return response.json();
    })
    .then(data => {
        data.forEach(item => {
            // Знаходимо елемент за його id
            let itemElement = document.getElementById(item.id);
            if (itemElement) {
                // Оновлюємо текст у item-title
                let titleElement = itemElement.querySelector(".item-title");
                if (titleElement) {
                    titleElement.textContent = item.name;
                }
            }
        });
    })
    .catch(error => {
        console.error('Помилка:', error);
    });
