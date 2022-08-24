
function init () {
    ymap = new map1.Map('map', {
        center: [55.755768, 37.617671],
        zoom: 5
    }, {
        // При сложных перестроениях можно выставить автоматическое
        // обновление карты при изменении размеров контейнера.
        // При простых изменениях размера контейнера рекомендуется обновлять карту программно.
        // autoFitToViewport: 'always'
        searchControlProvider: 'yandex#search'
    });
    $('#toggler').click(toggle);
}

