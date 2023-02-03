const btn = document.querySelector(".btn");
const praf = document.querySelector(".praf");
const not = document.querySelector(".not");
btn.addEventListener("click", () => {
  function generatePassword() {
    const karekter = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "l",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    const rakam = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const karekterB = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    const sembol = ["!@#$%^&*()_+~|}{[]:;?><,./-="];
    let sembol1 = sembol.join("");
    let password = "";

    for (let i = 0; i < 3; i++) {
      password += rakam[Math.floor(Math.random() * rakam.length)];
    }
    for (let i = 0; i < 2; i++) {
      password += sembol1[Math.floor(Math.random() * sembol1.length)];
    }
    for (let i = 0; i < 4; i++) {
      password += karekter[Math.floor(Math.random() * karekter.length)];
    }
    for (let i = 0; i < 1; i++) {
      password += karekterB[Math.floor(Math.random() * karekterB.length)];
    }

    console.log(password);
    let password1 = [...password];

    password1.sort(() => Math.random() - 0.5);

    console.log(password1.join(""));
    not.innerText = "şifre 3 sn sonra kaybolacak";
    return password1.join("");
  }

  praf.innerText = generatePassword();
  setTimeout(() => {
    not.innerText = "";
  }, 3000);
  setTimeout(() => {
    praf.innerText = "";
  }, 3000);
});
