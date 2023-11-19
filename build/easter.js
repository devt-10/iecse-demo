let charbuffer = [];
let latestKeyStrokeTime, lastKeyStrokeTime = Date.now();
let easters = {
    'chevli': () => {
        window.location = "https://en.wikipedia.org/wiki/Mukesh_Ambani";
    },
    'devesh': () => {
        alert('Naukri lagwa do please ;-;');
    },
    'devang': () => {
        alert('Chai pilade yaar.')
    },
    'manky':() =>{
        alert('#Primape');
    },
    'rebala':() =>{
        alert('#GG');
    },
    'anshui':() =>{
        alert('#1000 - 5');
    },
    'shounak':()=>{
        window.location = "https://icpc.baylor.edu";
    },
    'manish':()=>{
        alert("#WoofWoof");
    },
    'wally':()=>{
        alert("#Kursi");
    },
    'choukse':()=>{
        alert("#SingleAF");
    },
    'anshu':()=>{
        window.location = "https://www.google.com/maps/place/Dee+Tee(Drinking+Temple)/@13.3550895,74.7979562,15z/data=!4m5!3m4!1s0x0:0x15611142c91b1f61!8m2!3d13.3550895!4d74.7979562";
    },
    'sayantan':()=>{
        window.location = "https://www.google.com/maps/place/Dee+Tee(Drinking+Temple)/@13.3550895,74.7979562,15z/data=!4m5!3m4!1s0x0:0x15611142c91b1f61!8m2!3d13.3550895!4d74.7979562";
    },  
    'atika':()=>{
        window.location = "https://en.wikipedia.org/wiki/Lando_Norris";
    },  
    'rathi':()=>{
        window.location = "https://www.youtube.com/watch?v=InpAgvJK4Tc";
    },
    'sparsh':()=>{
        window.location = "https://www.zostel.com/";
    }
}

function getSelectedText() {
    if (window.getSelection) {
        selection = window.getSelection().toString();
    } else if (document.selection) {
        selection = document.selection.createRange().text;
    }
    return selection.toLowerCase();
}
function textSelectEaster() {
    let word = getSelectedText();
    fireEaster(word);
}

function textEnterEaster(e) {
    latestKeyStrokeTime = Date.now();

    if (latestKeyStrokeTime - lastKeyStrokeTime > 1500) {
        charbuffer = [];
    }
    charbuffer.push(e.key.toLowerCase());
    lastKeyStrokeTime = latestKeyStrokeTime;

    let word = charbuffer.join('');
    fireEaster(word);
}

function fireEaster(word) {
    if (easters.hasOwnProperty(word)) {
        easters[word]();
    }
}
document.addEventListener("mouseup", textSelectEaster);
document.addEventListener("keyup", textEnterEaster);
