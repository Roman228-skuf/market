console.log('Підключено файл скриптів market.js');

fetch('items.json') 
    .then(response => {
        if (!response.ok) {
            throw new Error('Помилка завантаження JSON');
        }
        return response.json();
    })
    .then(data => {
        data.forEach(item => {
            let itemElement = document.getElementById(item.id);
            if (itemElement) {
               
                let idElement = itemElement.querySelector(".item-id");
                if (idElement) {
                    idElement.textContent = `ID: ${item.id}`;
                }

             
                let titleElement = itemElement.querySelector(".item-title");
                if (titleElement) {
                    titleElement.textContent = item.name;
                }

                
                let imgElement = itemElement.querySelector("img");
                if (imgElement) {
                    imgElement.src = item.image;
                    imgElement.alt = item.name;
                }

                
                let oldPriceElement = itemElement.querySelector(".old-price");
                if (oldPriceElement) {
                    oldPriceElement.textContent = item.oldPrice + " грн";
                }

                let currentPriceElement = itemElement.querySelector(".current-price");
                if (currentPriceElement) {
                    currentPriceElement.textContent = item.currentPrice + " грн";
                }

                let couponPriceElement = itemElement.querySelector(".price");
                if (couponPriceElement) {
                    couponPriceElement.textContent = item.couponPrice + " грн";
                }
            }
        });
    })
    .catch(error => {
        console.error('Помилка:', error);
    });
