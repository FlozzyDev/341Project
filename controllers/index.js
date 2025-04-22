const awesomeFunction = (req, res, next) => {
    res.json('Pupa Hale');
};

const favoriteToy = (req, res, next) => {
    res.json('Donny The Dino');
};

module.exports = { awesomeFunction, favoriteToy };