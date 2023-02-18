arrayJogos=[];

function submit()
{
    var jogo1 = document.getElementById("JOGO_1").value;
    var jogo2 = document.getElementById("JOGO_2").value;
    var jogo3 = document.getElementById("JOGO_3").value;
    var jogo4 = document.getElementById("JOGO_4").value;
    var jogo5 = document.getElementById("JOGO_5").value;

    arrayJogos.push(jogo1);
    arrayJogos.push(jogo2);
    arrayJogos.push(jogo3);
    arrayJogos.push(jogo4);
    arrayJogos.push(jogo5);

    console.log(arrayJogos);

    document.getElementById("displayName").innerHTML=arrayJogos;

    document.getElementById("enviar").style.display ="none";

    document.getElementById("organizar").style.display ="imline-block";

}

function sorting()

{

arrayJogos.sort();

console.log(arrayJogos);

document.getElementById("displayName").innerHTML =arrayJogos;

}