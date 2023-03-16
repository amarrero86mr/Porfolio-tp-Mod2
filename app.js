function cambiar_parrafo(){
    document.getElementById("edit-acercade").style.display="block";
    let texto = document.getElementById("text-acercade").innerText;
    console.log(texto);
}
function myFunction2(valor){
    document.getElementById("text-acercade").innerText = valor;
}

document.getElementById("edit-acercade").addEventListener("keydown", function (event) {
    if (event.key=="Enter"){
        document.getElementById("edit-acercade").style. display="none";
    }
});