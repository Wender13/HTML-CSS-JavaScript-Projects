function carregarRelógio() {
    let relógio = window.document.getElementById('relógio');
    let data = new Date();
    let h = data.getHours();
    let m = data.getMinutes();
    let s = data.getSeconds();
    relógio.style.fontSize = '3.25em';

    // Condicional inline

    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;

    let time = h + ':' + m + ':' + s;

    relógio.innerText = time

    setTimeout(carregarRelógio, 1000);
}

function carregarData() {
    let calendário = document.getElementById('calendário');
    let diaSemana = document.getElementById('diaSemana')
    let data = new Date();
    let d = data.getDate();
    let m = data.getMonth() + 1;
    let a = data.getFullYear();
    let ds = data.getDay();

    calendário.style.fontSize = '2rem';
    diaSemana.style.fontSize = '2rem';

    switch (ds) {
    	case 0:
            ds = 'Domingo'
            break;
        case 1:
            ds = 'Segunda-Feira'
            break;
        case 2:
            ds = 'Terça-Feira'
            break;
        case 3:
            ds = 'Quarta-Feira'
            break;
        case 4:
            ds = 'Quinta-Feira'
            break;
        case 5:
            ds = 'Sexta-Feira'
            break;
        case 6:
            ds = 'Sábado'
            break;
        default:
            break;
    }

    d = (d < 10) ? '0' + d : d;
    m = (m < 10) ? '0' + m : m;

    let date = d + '/' + m + '/' + a;

    calendário.innerText = date
    diaSemana.innerText = ds
}

function carregarWallpaper() {
    const random = Math.floor(Math.random() * 7);
    document.body.style.backgroundImage = `url('Wallpapers/wallpaper${random}.jpg')`;
}

window.addEventListener('load', carregarWallpaper);
document,addEventListener('load', carregarData)
