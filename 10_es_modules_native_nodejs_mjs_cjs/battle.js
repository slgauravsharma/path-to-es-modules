function battle(candidate1, candidate2) {
    return candidate1.length > candidate2.length ?
        candidate1 : candidate2;
}

function armWrestling(candidate1, candidate2) {
    return candidate1.length < candidate2.length ?
        candidate1 : candidate2;
}
var fighters = ["Johnny", "Beatrice", "Eugene", "Christopher"];

function getFighters() {
    return fighters;
}

module.exports = {
    battle,
    armWrestling,
    getFighters
}