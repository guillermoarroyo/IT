let arrRespostes = [], arrRespostesCorrectes = [];
arrRespostesCorrectes=[1,3,4,2];


function pregunta1(objecte, numPreg){
    let resposta;
    let obj;
    for (let i=0; i<4; i++ ){
        if (objecte.form[i].checked) {
            resposta = i +1;
        }
    }
arrRespostes[numPreg] = resposta;
console.log("arrrespostes[ " + numPreg + "] = " + arrRespostes[numPreg]);
alert("Has escollit resposta" + arrRespostes[pregNum]);

switch(numPreg){
    case 0:
    obj = document.getElementById("pregunta-1");
    
    obj.classlist.remove("elementvisible");
    obj.classlist.add("elementocult");

    obj = document.getElementById("pregunta-2"); 
    obj.classlist.remove("elementocult");
    obj.classlist.add("elementvisible");
    case 1:
        alert("hola !");

}
}


