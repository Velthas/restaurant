
const generateContactDivs = (function () {

    const contentsDiv = document.querySelector('#contents');

    function createOuterContainers(page) {

        const title = document.createElement('p');
        title.classList.add('menutitle');
        title.textContent = page;

        contentsDiv.appendChild(title);

    }

    function createContactDivs () {
        const introParagraph = document.createElement('p');
        introParagraph.textContent = 'Feel free to reach out to us should you have any questions or request.';
        introParagraph.classList.add('information');
        contentsDiv.appendChild(introParagraph);

        const contactList = document.createElement('ul');
        const telefonNummer = document.createElement('li');
        const email = document.createElement('li');
        const fakeSocial = document.createElement('li');

        telefonNummer.innerHTML = "<strong>Cellphone</strong>: +39 331 332 3355"
        email.innerHTML = "<strong>Mail</strong>: totallynotafakeemail@coffeehouse.com"
        fakeSocial.innerHTML = "<strong>Facebook</strong>: https://totallynotfakeurl/home/troll"

        const listElements = [ telefonNummer, email, fakeSocial]
        listElements.forEach(contact => {
            contactList.appendChild(contact)
        })

        contentsDiv.appendChild(contactList);

    }

    function clearPage(message) {
        document.querySelector('.herotext').textContent = message;
        contentsDiv.textContent = "";

    }

    function appendContacts() {
        clearPage('REACH OUT TO US');
        createOuterContainers('CONTACTS');
        createContactDivs();

    }

    return { appendContacts, clearPage, createOuterContainers }

})();

export default generateContactDivs;