function calcular() {
    setInterval(() => {
        let dataAniversario = new Date(document.querySelector("#dataAniversario").value);

        let now = new Date();
        let idadeMes = now.getTime() - dataAniversario.getTime();

        let idadeSegundo = idadeMes / 1000;
        let idadeMin = idadeSegundo / 60;
        let idadeHrs = idadeMin / 60;
        let idadeDias = idadeHrs / 24;
        let idadeM = idadeDias / 30.4375;
        let idadeAnos = idadeM / 12;

        document.querySelector("#ano").innerHTML = Math.floor(idadeAnos);
        document.querySelector("#mes").innerHTML = Math.floor(idadeM % 12);
        document.querySelector("#dia").innerHTML = Math.floor(idadeDias % 30.4375);
        document.querySelector("#hora").innerHTML = Math.floor(idadeHrs % 24);
        document.querySelector("#minuto").innerHTML = Math.floor(idadeMin % 60);
        document.querySelector("#segundos").innerHTML = Math.floor(idadeSegundo % 60);
        document.querySelector("#segundos").computedStyleMap.borderBotton ="1px grey solid";
    }, 1000);
}

function reset() {
    window.location.reload();
}
