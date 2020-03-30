var tinkeringwith = [
    "docker",
    "spring boot",
    "microservices"
]


var typed = new Typed('#typed-name', {
    // stringsElement: '#typed-name-text',
    strings: [
        'Hi, I am <span id="type-name"><strong>Rohan Mallya.</strong></span><br>'
    ],
    onComplete: function () {
        document.querySelector('.typed-cursor').style.display = "none";
        callTyped();
    }
});

function callTyped() {
    var iAmA = document.createElement('span');
    iAmA.setAttribute('id', 'i-am-a');
    document.querySelector("#typed-name").appendChild(iAmA);
    var typed2 = new Typed("#i-am-a", {
        strings: [
            '<span id="typed-sub">I\'m a <span id="type-sub-highlight">software developer.</span>^500 Love designing, building and debugging anything and everything!^500</span><br>'
        ],
        typeSpeeed: 300,
        onComplete: function () {
            document.querySelector('.typed-cursor').style.display = "none";

            loadTalkToMeAbout()
        }

    });

}

function loadTalkToMeAbout() {
    var ttm = document.createElement('span');
    ttm.setAttribute('id', 'ttm');
    document.querySelector('#i-am-a').appendChild(ttm);
    var typed = new Typed("#ttm", {
        strings: [
            '<span id="typed-sub">Currently tinkering with: ^500</span>'
        ],
        typeSpeeed: 0,
        backSpeed: 0,
        onComplete: function () {
            document.querySelector('.typed-cursor').style.display = "none";

            loadCurrentlyTinkeringWith();
        }

    });
}

function makeTech(str) {
    return '<span id="type-sub-highlight">' + str + '</span>^500'
}

function loadCurrentlyTinkeringWith() {
    var current = document.createElement('span');
    current.setAttribute('id', 'current');
    document.querySelector("#ttm").appendChild(current);
    var typed = new Typed("#current", {
        strings: tinkeringwith.map(x => makeTech(x)),
        typeSpeeed: 0,
        backSpeed: 10,
        loop: true

    });

}

// var typed = new Typed('#typed-name', {
//     stringsElement: '#typed-name-text'
// });
