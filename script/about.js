const cardItems = [
  {
    avatar: "../images/avatars/Profil_Amanda.png",
    name: "Amanda Fager",
    education: "Webbutvecklare",
    text: "Amanda har ansvarat för att skapa en fungerande hemsida där produkten visas men även byggt upp startsidan med animationer och “om projektet” sidan. Hon har utifrån de förutsättningar och tid vi blivit tilldelade, arbetat för en så responsiv hemsida och produkt som möjligt. Amanda har kopplat samman de olika delar och sett till att hemsidan är tillgänglig och fungerande.",
    link: "https://github.com/amandafager",
    linkTitle: "github.com/amandafager",
    link2: "https://www.linkedin.com/in/amandafager/",
    linkTitle2: "linkedin.com/in/amandafager",
  },
  {
    avatar: "../images/avatars/Profil_Josefin.png",
    name: "Josefin Ramsberg",
    education: "Game Creator Artist",
    text: "Som gruppens Game Creator Artist har Josefin ansvarat för produktens grafik. Hon har visuellt illustrerat de tankar och idéer som vi i gruppen tillsammans tagit fram. Hon har utöver detta kommit med idéer på förbättringsmöjligheter både gällande produktens design men även ur ett helhetsperspektiv.",
    link: "https://www.artstation.com/vemode",
    linkTitle: "artstation.com/vemode",
  },
  {
    avatar: "../images/avatars/Profil_Johanna.png",
    name: "Johanna Smitz",
    education: "Manusförfattare",
    text: "Johanna var med och tog fram ett koncept och en storyline.  Hon har bland annat ansvarat för att komma fram till idéer till alla texter och sedan skrivit ner dem. Under projektets gång fram till slutprodukt, så har Johanna varit med och kommit med idéer på förbättringsförslag både gällande text men även kring produkten i sin helhet.",
    link: "https://www.imdb.com/name/nm7720963/",
    linkTitle: "imdb.me/johannasmitz",
  },
  {
    avatar: "../images/avatars/Profil_Moa.png",
    name: "Moa Erikson",
    education: "UX Designer",
    text: "Moa har bland annat tagit ansvar för att få igång idégeneringen samt bygga upp visuella prototyper utifrån gruppens idéer och tankar, som gruppen har kunnat utgå från under projektets gång. Moa har arbetat med text och färg där enhetlighet och temat kärlek har varit i fokus. Moa har även genomfört användartester på produkten och arbetat mot en användarvänlig produkt.",
    link: "https://www.linkedin.com/in/moa-erikson/",
    linkTitle: "linkedin.com/in/moa-erikson",
    mail: "moa.erikson@hotmail.com",
  },
  {
    avatar: "../images/avatars/Profil_Nicklas.png",
    name: "Nicklas Hidesjö",
    education: "Game Creator Programmer",
    text: "Nicklas har med hjälp av Unity implementerat de tankar, idéer och design som vi tillsammans i gruppen kommit fram till och byggt upp produkten. Han har arbetat med att göra produkten fungerande och interaktiv och bidragit med idéer både kring produktens funktionalitet men även kring produkten i sin helhet.",
    link: "https://nicklashidesjo.itch.io/",
    linkTitle: "nicklashidesjo.itch.io",
    link2: "https://www.linkedin.com/in/nicklas-hidesjo/",
    linkTitle2: "linkedin.com/in/nicklas-hidesjo",
  },
];

function createCard(
  avatar,
  name,
  education,
  text,
  link,
  linkTitle,
  link2,
  linkTitle2,
  mail
) {
  let template = `
      <div class="card">
        <div class="imgWrapper">
          <img class="avatar" src="${avatar}" alt="Avatar"/>
        </div>
        <h3>${name}</h3>
        <h4>${education}</h4>
        <div class="line"></div>
        <p>${text}</p>
        <div class="linkWrapper">
        <a href="mailto:${mail ? mail : ""}" target="_blank">${
    mail ? mail : ""
  }</a>
          <a href="${link}" target="_blank">${linkTitle}</a>
          <a href="${link2 ? link2 : ""}" target="_blank">${
    linkTitle2 ? linkTitle2 : ""
  }</a>
          
        </div>
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
    cardItem.linkTitle,
    cardItem.link2,
    cardItem.linkTitle2,
    cardItem.mail
  );
  cardsWrapper.innerHTML += cardItem;
});
