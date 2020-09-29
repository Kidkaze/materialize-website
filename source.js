// Side Nav
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

// Slider
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transisition: 500,
    interval: 6000,
});

//search
const ac = document.querySelector('.autocomplete');
M.Autocomplete.init(ac, {
    data: {
        'Seychelles': null,
        'St Lucia': null,
        'Jamaica': null,
        'Hawaii': null,
        'Cape Verde': null,
    },
});
