import STORE from "../store.js";

function renderContact(contact) {
  return `
    <div class="contact-card" data-id=${contact.id}>
      <div class="contact-info">
          <img src="assets/img/user_default.png" alt="user" class="avatar">
          <span>${contact.name}</span>
      </div>
      <svg class="favorite ${contact.favorite == true ? "favorite-true" : ""} width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path class="favorite-fill" d="M9.92471 3.86871L7.71221 8.35231L2.76221 9.07184L6.34346 12.564L5.49736 17.4929L9.92471 15.1656L14.3521 17.4906L13.506 12.5617L17.0872 9.07184L12.1372 8.35231L9.92471 3.86871Z"/>
          <path class="favorite-border" d="M19.2089 7.67501L13.2581 6.81016L10.5979 1.4172C10.5253 1.26954 10.4057 1.15001 10.2581 1.07735C9.88778 0.89454 9.43778 1.04688 9.25262 1.4172L6.59246 6.81016L0.641682 7.67501C0.47762 7.69845 0.32762 7.77579 0.212776 7.89298C0.0739361 8.03568 -0.00257088 8.22766 6.5967e-05 8.42675C0.00270281 8.62583 0.0842678 8.81572 0.226838 8.9547L4.53231 13.1524L3.51512 19.0797C3.49127 19.2176 3.50652 19.3594 3.55916 19.489C3.6118 19.6187 3.69972 19.731 3.81294 19.8132C3.92616 19.8955 4.06015 19.9443 4.19973 19.9543C4.3393 19.9642 4.47888 19.9349 4.60262 19.8695L9.92528 17.0711L15.2479 19.8695C15.3932 19.9469 15.562 19.9727 15.7237 19.9445C16.1315 19.8742 16.4057 19.4875 16.3354 19.0797L15.3182 13.1524L19.6237 8.9547C19.7409 8.83985 19.8182 8.68985 19.8417 8.52579C19.905 8.11563 19.619 7.73595 19.2089 7.67501V7.67501ZM13.5065 12.5617L14.3526 17.4906L9.92528 15.1656L5.49793 17.493L6.34403 12.5641L2.76278 9.07188L7.71278 8.35235L9.92528 3.86876L12.1378 8.35235L17.0878 9.07188L13.5065 12.5617V12.5617Z" />
      </svg>
    </div>
  `
};

function renderCategory(title, contacts) {
  if (contacts.length == 0) {
    return ""
  } else {
    return `
      <div class="section-md p-10 border-bottom">
        <span class="uppercase">${title}</span>
      </div>
      ${contacts.map(renderContact).join("")}
      
    `
  }
}

export default function renderContacts() {
  const contacts = STORE.contacts;
  const favContacts = contacts.filter((contact) => contact.favorite == true);

  if (contacts.length != 0) {
    return `
    <section class="contacts-containter">
      ${renderCategory("Favorites", favContacts)}
      ${renderCategory(`Contacts (${contacts.length})`, contacts)}
    </section>
    `
  };
  return `
    <div class="empty-container">
      <span class="heading">No contacts yet</span>
    </div>
  `
};

