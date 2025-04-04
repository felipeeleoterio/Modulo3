var p = document.getElementById('id_p');
console.log(p);

//captura o evento load da página
window.onload = function(){

    //Localiza o elemento com id "id_p"
    var p = document.getElementById('id_p');
    console.log(p);

    //configura a propridade backgroundColor do elemento
    p.style.backgroundColor = '#0000FF';

    var links = p.getElementsByTagName('a');

    var links = p.getElementsByTagName('a');
    //Alerta o atributo href do primeiro link 
    alert(links[0].href);

}

