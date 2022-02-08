import generateContactDivs from "./contact";

const generateHomeDivs = (function () {

    const contentsDiv = document.querySelector('#contents');

    function generateHomeDivs() {
        const firstParagraph = document.createElement('p');
        const secondParagraph = document.createElement('p');
        const thirdParagraph = document.createElement('p');

        firstParagraph.textContent = "The first paragraph is sensationalized content aimed at catching your attention, pushing you to read the second block of text."
        secondParagraph.textContent = "In this paragraph, I am meant to try and relate to your situation by citing things every living being will likely experience at some point in their life, such as thirst, fatigue, or even chronic lack of sleep."
        thirdParagraph.textContent = "And this is the paragraph where I'd supposedly hook you in, presenting coffee as a one-for-all solution to your every problem. I do love coffee, but it is sadly a bit harmful."

        const paraArray = [firstParagraph, secondParagraph, thirdParagraph]

        paraArray.forEach(paragraph => {
            paragraph.classList.add('information')
            contentsDiv.appendChild(paragraph);
            
        });
    }

    function appendHomeDivs() {
        generateContactDivs.clearPage('THE PLEASURE OF COFFEE');
        generateContactDivs.createOuterContainers('HOME');
        generateHomeDivs();

    }

    return {appendHomeDivs}
})();

export default generateHomeDivs;