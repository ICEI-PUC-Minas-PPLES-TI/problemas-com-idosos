const image = '../contatos/images/perfil.jpg'


function createContactBoxes() {
  const container = document.querySelector('.container');

  const contacts = [
    { name: 'Andrea Assis', city: 'Belo Horizonte, MG' },
    { name: 'Pedro Romanhol', city: 'João Molevade, MG' },
    { name: 'Maria Madalena', city: 'Betim, MG' },
    { name: 'Maria Peres', city: 'Betim, MG' },
    { name: 'Rita Cassia', city: 'Goiânia, GO' },
    { name: 'Luciana Silva', city: 'Belo Horizonte, MG' },
    { name: 'Joana Soares', city: 'Caeté, MG' }
  ];

  contacts.forEach((contact) => {
    
    const contactBox = document.createElement('div');
    contactBox.classList.add('contact-box');

    const contactPhoto = document.createElement('div');
    contactPhoto.classList.add('contact-photo');


    const contactPhotoImg = document.createElement('img');
    contactPhotoImg.src = image;
    contactPhotoImg.alt = 'Foto de perfil';

    contactPhoto.appendChild(contactPhotoImg);

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');

    const linkNextSprint = document.createElement('a')
    linkNextSprint.href = "../chat/All.html"
    const contactName = document.createElement('div');
    contactName.classList.add('contact-name');
    contactName.textContent = contact.name;

    const contactCity = document.createElement('div');
    contactCity.classList.add('contact-city');
    contactCity.textContent = contact.city;

    contactInfo.appendChild(linkNextSprint)

    linkNextSprint.appendChild(contactName);
    linkNextSprint.appendChild(contactCity);

    contactBox.appendChild(contactPhoto);
    contactBox.appendChild(contactInfo);

    container.appendChild(contactBox);
    

  });
}

createContactBoxes();