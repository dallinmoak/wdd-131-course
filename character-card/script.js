let character = {
    class: "Warrior",
    level: 5,
    hp: 100,
}

const setDomClass = (className) => {
  const classEl = document.getElementById("char-class");
  classEl.textContent = className;
}

const setClass = (className) => {
  character.class = className;
  setDomClass(className);
}

const setDomLevel = (level) => {
  const levelEl = document.getElementById("char-level");
  levelEl.textContent = level;
}

const setLevel = (level) => {
  character.level = level;
  setDomLevel(level);
}

const setDomHp = (hp) => {
  const hpEl = document.getElementById("char-hp");
  hpEl.textContent = hp;
}

const setHp = (hp) => {
  character.hp = hp;
  setDomHp(hp);
}

setDomClass(character.class);
setDomLevel(character.level);
setDomHp(character.hp);

const attack = () => {
  const damage = 15;
  if( character.hp - damage <= 0 ) {
    setHp(0);
    alert("Character has been defeated!");
    return;
  }
  const newHp = character.hp - damage;
  setHp(newHp);
}

const levelUp = () => {
  const newLevel = character.level + 1;
  setLevel(newLevel);
}

document.getElementById("attack").addEventListener("click", attack);
document.getElementById("level-up").addEventListener("click", levelUp);