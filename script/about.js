const cardItems = [
  {
    avatar: "../images/avatars/Profil_Amanda.png",
    name: "Amanda Fager",
    education: "Webbutvecklare",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium orci sem, in rutrum nisi bibendum vitae. Sed suscipit ac metus in rutrum.",
    link: "https://github.com/amandafager",
    linkTitle: "github.com/amandafager",
  },
  {
    avatar: "../images/avatars/Profil_Josefin.png",
    name: "Josefin Ramsberg",
    education: "Game Creator Artist",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium orci sem, in rutrum nisi bibendum vitae. Sed suscipit ac metus in rutrum.",
    link: "",
    linkTitle: "",
  },
  {
    avatar: "../images/avatars/Profil_Johanna.png",
    name: "Johanna Smitz",
    education: "Manusförfattare",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium orci sem, in rutrum nisi bibendum vitae. Sed suscipit ac metus in rutrum.",
    link: "",
    linkTitle: "",
  },
  {
    avatar: "../images/avatars/Profil_Moa.png",
    name: "Moa Erikson",
    education: "UX Designer",
    text: "Som gruppens UX-designer har jag bland annat tagit ansvar för att få igång idégeneringen samt bygga upp en visuell prototyp som vi kan utgå från under projektets gång. Jag har arbetat med text och färg där enhetlighet och temat kärlek har varit i fokus. Jag har också under hela projektets gång arbetat för användarvänlighet och för att spelet ska ge en tillfredsställande upplevelse. ",
    link: "",
    linkTitle: "",
  },
  {
    avatar: "../images/avatars/Profil_Nicklas.png",
    name: "Nicklas Hidesjö",
    education: "Game Creator Programmer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium orci sem, in rutrum nisi bibendum vitae. Sed suscipit ac metus in rutrum.",
    link: "",
    linkTitle: "",
  },
];

function createCard(avatar, name, education, text, link, linkTitle) {
  let template = `
      <div class="card">
        <div class="imgWrapper">
          <img class="avatar" src="${avatar}" alt="Avatar"/>
        </div>
        <h3>${name}</h3>
        <h4>${education}</h4>
        <div class="line"></div>
        <p>${text}</p>
        <a href="${link}">${linkTitle}</a>
      </div>`;
  return template;
}

const cardsWrapper = document.querySelector(".cards");
cardItems.forEach((cardItem) => {
  cardItem = createCard(
    cardItem.avatar,
    cardItem.name,
    cardItem.education,
    cardItem.text,
    cardItem.link,
    cardItem.linkTitle
  );
  cardsWrapper.innerHTML += cardItem;
});
