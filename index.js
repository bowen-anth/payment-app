const contactContainer = document.querySelector(".contact-container");
const contactWrapper = document.querySelector(".contact-wrapper");

const data = [
  {
    name: "Lee Pearson",
    username: "@pears",
  },
  {
    name: "Curtis Thornton",
    username: "@c-thornton",
  },
  {
    name: "Amy Moss",
    username: "@amy-m",
  },
  {
    name: "Elva Burke",
    username: "@elva-burk",
  },
];

const generateContacts = () => {
  let count = 1;
  data.forEach((user) => {
    const div = document.createElement("div");
    div.classList.add("contact-container");
    div.innerHTML = `
        <div class="vertical hamburger">•••</div>
        <div class="contact-avatar-container">
          <img
            class="contact-avatar"
            src="https://i.pravatar.cc/150/${count++}"
            alt="profile pic"
            width="75px"
            height="auto"
          />
        </div>
        <p class="contact-name">${user.name}</p>
        <p class="contact-username">${user.username}</p>
        <button class="contact button">Add Contact</button>
        `;
    contactWrapper.appendChild(div);
  });
};

generateContacts();
