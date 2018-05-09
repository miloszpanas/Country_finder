var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

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
            $('<li>').append($('<div>').text('Capital:'))
                     .append($('<div>').text(item.capital))
                     .append($('<div>').text('Land area:'))
                     .append($('<div>').text(item.area + ' sq. km'))
                     .append($('<div>').text('Population:'))
                     .append($('<div>').text(item.population))
                     .append($('<div>').text('Currency:'))
                     .append($('<div>').text(item.currencies[0].name))
                     .append($('<div>').text('Flag:'))
                     .append($('<div>').append($('<img>').attr('src', item.flag).attr('alt', item.capital)))
                     .appendTo(countriesList);

        }
    });
}

