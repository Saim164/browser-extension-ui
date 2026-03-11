let extensions = [];
const body = document.querySelector("body");

let renderCard = (list) => {
  const container = document.querySelector(".extension-container");
  container.innerHTML = "";
  list.forEach((extension) => {
    const card = document.createElement("div");
    card.classList.add("card");
    container.appendChild(card);

    const cardUp = document.createElement("div");
    cardUp.classList.add("cardup");
    card.appendChild(cardUp);

    const cardLogo = document.createElement("div");
    cardLogo.classList.add("cardlogo");
    cardUp.appendChild(cardLogo);

    const logo = document.createElement("img");
    logo.classList.add("logo");
    logo.src = extension.logo;
    cardLogo.appendChild(logo);

    const cardText = document.createElement("div");
    cardText.classList.add("cardtext");
    cardUp.appendChild(cardText);

    const name = document.createElement("h3");
    name.classList.add("name");
    name.textContent = extension.name;
    cardText.appendChild(name);

    const des = document.createElement("p");
    des.classList.add("des");
    des.textContent = extension.description;
    cardText.appendChild(des);

    const cardBtn = document.createElement("div");
    cardBtn.classList.add("cardbtn");
    card.appendChild(cardBtn);

    const remove = document.createElement("button");
    remove.classList.add("remove-btn");
    remove.style.height = "30px";
    remove.innerText = "Remove";
    cardBtn.appendChild(remove);

    remove.addEventListener("click", () => {
      extensions = extensions.filter((ext) => ext !== extension);
      renderCard(extensions);
    });

    const toggle = document.createElement("div");
    toggle.classList.add("form-check");
    toggle.classList.add("form-switch");
    const input = document.createElement("input");
    input.type = "checkbox";
    input.role = "switch";
    input.classList.add("form-check-input");
    input.id = "switchCheckDefault";
    input.checked = extension.isActive;

    input.addEventListener("change", () => {
      extension.isActive = input.checked;
      s;
    });

    toggle.appendChild(input);
    cardBtn.appendChild(toggle);
  });
};

fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    extensions = data;
    renderCard(extensions);
  });

const allBtn = document.querySelector(".allbtn");
const activeBtn = document.querySelector(".activebtn");
const inactiveBtn = document.querySelector(".inactivebtn");

const buttons = [allBtn, activeBtn, inactiveBtn];

function selectbutton(btn) {
  buttons.forEach((button) => {
    button.classList.remove("selected");
  });
  btn.classList.add("selected");
}

allBtn.addEventListener("click", () => {
  selectbutton(allBtn);

  renderCard(extensions);
});

activeBtn.addEventListener("click", () => {
  selectbutton(activeBtn);

  const filtered = extensions.filter((ext) => ext.isActive);
  renderCard(filtered);
});

inactiveBtn.addEventListener("click", () => {
  selectbutton(inactiveBtn);

  const filtered = extensions.filter((ext) => !ext.isActive);
  renderCard(filtered);
});

const span = document.querySelector(".span");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");

span.addEventListener("click", () => {
  body.classList.toggle("lighttheme");

  sun.classList.toggle("hidden");
  moon.classList.toggle("hidden");
});
