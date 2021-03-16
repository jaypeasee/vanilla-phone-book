const nameInput = document.querySelector('.name-input')
const phoneInput = document.querySelector('.phone-input')
const submitBtn = document.querySelector('.submit-btn')
const allContacts = document.querySelector('.all-contacts')


window.addEventListener('load', renderContactCards)
submitBtn.addEventListener('click', handleFormSubmit)
allContacts.addEventListener('click', handleCardClick)

let contacts = [
  {
    name: "Mike Jones",
    phone: "281-330-8004",
    id: 1
  },
  {
    name: "mom",
    phone: "302-559-8381",
    id: 2
  }
]

function renderContactCards() {
  allContacts.innerHTML = ""
  const contactCards = contacts.map(contact => {
    return (
      `<section class="contact-card" data-id=${contact.id}>
        <h2>${contact.name}</h2>
        <h3>${contact.phone}</h3>
        <button class=delete-contact-btn>X</button>
      </section>`
    )
  })
  allContacts.insertAdjacentHTML('afterbegin', contactCards)
}

function handleFormSubmit(event) {
  event.preventDefault()
  const newContact = createNewContact()
  contacts.push(newContact)
  renderContactCards()
}

function createNewContact() {
  return (
    {
      name: nameInput.value,
      phone: phoneInput.value,
      id: Date.now()
    }
  )
}

function handleCardClick(event) {
  if (event.target.className === "delete-contact-btn") {
    const cardIdToDelete = event.target.closest('.contact-card').dataset.id
    contacts = contacts.filter(contact => {
      return parseInt(cardIdToDelete) !== contact.id
    })
    renderContactCards()
  }
}