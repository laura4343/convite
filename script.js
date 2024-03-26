const botaoNao = document.getElementById("no");
const botaoSim = document.getElementById("yes");

function fuga() {
  botaoNao.style.marginLeft = `${Math.random() * 400}px`;
}

botaoSim.addEventListener("click", () => {
  let som = "#audio";
  let audio = document.querySelector(som);
  audio.currentTime = 0;
  audio.play();
});

botaoSim.addEventListener("click", () => {
  window.alert("ebaaaa");
});
