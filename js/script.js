var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

var input = document.getElementById('country-name');

input.addEventListener('keyup', function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById('search').click();
    }
});

function searchCountries() {
    var countryName = $('#country-name').val();
if(!countryName.length) countryName = 'Poland';
$.ajax({
    url: url + countryName,
    method: 'GET',
    success: showCountriesList
});
}

function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function(item) {
        if (item.capital) {
            $('<li class="country-row">').text(item.name).appendTo(countriesList);
            $('<li>')
                     .append($('<div>').text('Region:'))
                     .append($('<div>').text(item.region))
                     .append($('<div>').text('Capital:'))
                     .append($('<div>').text(item.capital))
                     .append($('<div>').text('Land area:'))
                     .append($('<div>').text(item.area + ' sq. km'))
                     .append($('<div>').text('Population:'))
                     .append($('<div>').text(item.population))
                     .append($('<div>').text('Official language:'))
                     .append($('<div>').text(item.languages[0].name))
                     .append($('<div>').text('Currency:'))
                     .append($('<div>').text(item.currencies[0].name))
                     .append($('<div>').text('Flag:'))
                     .append($('<div>').append($('<img>').attr('src', item.flag).attr('alt', item.capital)))
                     .appendTo(countriesList);

        }
    });
}

