function addPlayer() {
  const position = document.getElementById("position").value;
  const name = document.getElementById("name").value;
  const number = document.getElementById("camisa").value;

  const confirmacao = confirm(
    "Deseja escalar o jogador " + name + " na posição " + position + " ?"
  );

  if (confirmacao) {
    const teamList = document.getElementById("playerList");
    const list = document.createElement("li");
    list.id = "player-" + number;
    list.innerText = position + ":" + name + "(" + number + ")";
    teamList.appendChild(list);

    document.getElementById("position").value = "";
    document.getElementById("name").value = "";
    document.getElementById("camisa").value = "";
  }
}

function removePlayer() {
  const number = document.getElementById("remove").value;
  const playerToRemove = document.getElementById("player-" + number);

  const confirmacao = confirm(
    "Deseja remover o jogador " + playerToRemove.innerText + " ?"
  );

  if (confirmacao) {
    playerToRemove.remove();
    document.getElementById("remove").value = "";
  }
}
