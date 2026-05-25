let NomeHeroi = "Flash";
let ExpHeroi = 5555;
let Rank = "";
if (ExpHeroi <= 999) {Rank = "recruta"}
else if (ExpHeroi <= 4999) {Rank = "soldado"}
else if (ExpHeroi <= 9999) {Rank = "sargento"}
else if (ExpHeroi <= 19999) {Rank = "tenente"}
else if (ExpHeroi <= 49999) {Rank = "capitão"}
else if (ExpHeroi <= 99999) {Rank = "major"}
else if (ExpHeroi <= 199999) {Rank = "coronel"}
else if (ExpHeroi <= 499999) {Rank = "general"}
else {Rank = "lendário"}
console.log("o herói, " + NomeHeroi + ", " + "está no rank " + Rank + " (" + ExpHeroi + " XP)");


