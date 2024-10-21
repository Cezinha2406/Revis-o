function trocarImagem (){
    const imagem = document.getElementById("imagem");
    imagem.style.animation = "rotateY 1s ease";
    const imagens = ["imagem1.jpg", "imagem2.jpg", "imagm3.jpg"];
    const src = imagem.src.split('/').pop();
    let index = imagem.indexOf(src);
    index = (index + 1)% imagens.length;
    imagem.src = imagem.animation = "";

    setTimeout ( () => {imagem.style.animation = ""}, 1000)

}