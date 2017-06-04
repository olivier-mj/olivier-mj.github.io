/*
var container = document.querySelector('.page');


var sommaire = document.querySelector('#sommaire');
var uls = [];
uls[0] = sommaire;


}
*/

function Sommaire(container) {
    this.container = container;
    this.uls = [document.createElement('ul')];
    this.buildStructure();
};

Sommaire.prototype.buildStructure = function () {
    var titles = this.container.querySelectorAll('h2, h3, h4, h5');
    var lastLvl = 0;
    for (var i = 0; i < titles.length; i++) {
        var title = titles[i];
        var lvl = parseInt(title.tagName.replace('H', '')) - 1;
        if (lvl - lastLvl > 1) {
            throw "Erreur dans la structure des titres, Saut d'un h" + (lastLvl + 1) + " vers h" + (lvl + 1);
        }
        var lastLvl = lvl;
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.setAttribute('href', '#');
        a.textContent = title.textContent;
        li.appendChild(a);
        if (!this.uls[lvl - 1]) {
            var ul = document.createElement('ul');
            this.uls[lvl - 1] = ul;
            this.uls[lvl - 2].lastChild.appendChild(ul);
        }
        this.uls[lvl] = null;
        this.uls[lvl - 1].appendChild(li);
        this.bindScroll(a, title.offsetTop);
    }
};

Sommaire.prototype.bindScroll = function (a, title) {
    a.addEventListener('click', function (e) {
        e.preventDefault();
        document.body.scrollTop = title.offsetTop;
    });
};

Sommaire.prototype.appendTo = function (element) {
    element.appendChild(this.uls[0]);
};

var s = new Sommaire(document.querySelector('.page'));
s.appendTo(document.querySelector('#sommaire'));