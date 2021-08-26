const cardItems = [
  {
    avatar: "",
    name: "Amanda Fager",
    education: "Webbutvecklare",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium orci sem, in rutrum nisi bibendum vitae. Sed suscipit ac metus in rutrum.",
  },
  {
    avatar: "",
    name: "Josefin Ramsberg",
    education: "Game Creator Artist",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium orci sem, in rutrum nisi bibendum vitae. Sed suscipit ac metus in rutrum.",
  },
  {
    avatar: "",
    name: "Johanna Smitz",
    education: "Manusförfattare",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium orci sem, in rutrum nisi bibendum vitae. Sed suscipit ac metus in rutrum.",
  },
  {
    avatar: "",
    name: "Moa Erikson",
    education: "UX Designer",
    text: "Som gruppens UX-designer har jag bland annat tagit ansvar för att få igång idégeneringen samt bygga upp en visuell prototyp som vi kan utgå från under projektets gång. Jag har arbetat med text och färg där enhetlighet och temat kärlek har varit i fokus. Jag har också under hela projektets gång arbetat för användarvänlighet och för att spelet ska ge en tillfredsställande upplevelse. ",
  },
  {
    avatar: "",
    name: "Nicklas Hidesjö",
    education: "Game Creator Programmer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium orci sem, in rutrum nisi bibendum vitae. Sed suscipit ac metus in rutrum.",
  },
];

function createCard(avatar, name, education, text) {
  let template = `
      <div class="card">
          <img src="${avatar}" alt="Avatar" style="width: 100%" />
          <h3>${name}</h3>
          <h4>${education}</h4>
          <div class="line"></div>
          <p>${text}</p>
          <a href="https://www.yrgo.se/">yrgo.se</a>
      </div>`;
  return template;
}

const cardsWrapper = document.querySelector(".cards");
cardItems.forEach((cardItem) => {
  cardItem = createCard(
    cardItem.avatar,
    cardItem.name,
    cardItem.education,
    cardItem.text
  );
  cardsWrapper.innerHTML += cardItem;
});
