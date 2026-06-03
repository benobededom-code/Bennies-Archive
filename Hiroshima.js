
/* =====================================
   HOME PAGE - FUN FACTS
===================================== */
const factBtn = document.getElementById("factBtn");
const factText = document.getElementById("factText");

const hiroshimaFacts = [

    "Hiroshima was founded in 1589.",

    "Miyajima is one of Japan's three most scenic views.",

    "The Hiroshima Carp are one of Japan's most popular baseball teams.",

    "Okonomiyaki is Hiroshima's most famous food.",

    "Hiroshima is known worldwide as a City of Peace."

];

if (factBtn && factText) {

    factBtn.addEventListener("click", () => {

        const randomIndex =
            Math.floor(Math.random() * hiroshimaFacts.length);

        factText.textContent =
            hiroshimaFacts[randomIndex];

    });

}


/* =====================================
   HISTORY PAGE
===================================== */

const historyBtn =
    document.getElementById("historyBtn");

const hiddenHistory =
    document.getElementById("hiddenHistory");

if (historyBtn && hiddenHistory) {

    historyBtn.addEventListener("click", () => {

        hiddenHistory.classList.toggle("hidden");

    });

}


/* =====================================
   HISTORY QUIZ
===================================== */

const answerButtons =
    document.querySelectorAll(".answer-btn");

const quizResult =
    document.getElementById("quizResult");

if (answerButtons.length > 0 && quizResult) {

    answerButtons.forEach(button => {

        button.addEventListener("click", () => {

            if (
                button.dataset.answer === "correct"
            ) {

                quizResult.textContent =
                    "✅ Correct!";

            }

            else {

                quizResult.textContent =
                    "❌ Try Again.";

            }

        });

    });

}


/* =====================================
   HERO-SHIMA PAGE
===================================== */

const infoButtons =
    document.querySelectorAll(".info-btn");

const teamMessages = [

    "The club mascot are Asiatic bears that live in Chugoku mountains and in the year 2000, He got a girfriend Frecce.",

    "Mohican Abby is a male Mascot and is of American heritage probably Alaska, created in 2019 and likes Okonomiyaki.",

    "The Carp have some of the most loyal fanse nergetic in Japan."

];

if (infoButtons.length > 0) {

    infoButtons.forEach((button, index) => {

        button.addEventListener("click", () => {

            alert(teamMessages[index]);

        });

    });

}


/* =====================================
   SPORTS FACT GENERATOR
===================================== */

const sportsFactBtn =
    document.getElementById("sportsFactBtn");

const sportsFact =
    document.getElementById("sportsFact");

const sportsFacts = [

    "Sanfrecce Hiroshima has won multiple J-League titles.",

    "The Dragonflies are Hiroshima's professional basketball team.",

    "The Carp are one of Japan's most famous baseball clubs.",

    "Sports play an important role in Hiroshima's culture."

];

if (sportsFactBtn && sportsFact) {

    sportsFactBtn.addEventListener("click", () => {

        const randomFact =
            Math.floor(Math.random() * sportsFacts.length);

        sportsFact.textContent =
            sportsFacts[randomFact];

    });

}


/* =====================================
   MASCOT MOVEMENT EFFECT
===================================== */

const mascots =
    document.querySelectorAll(".mascot");

if (mascots.length > 0) {

    mascots.forEach(mascot => {

        mascot.addEventListener("mousemove", event => {

            const x =
                event.offsetX / 20;

            const y =
                event.offsetY / 20;

            mascot.style.transform =
                `translate(${x}px, ${y}px) scale(1.15)`;

        });

        mascot.addEventListener("mouseleave", () => {

            mascot.style.transform =
                "translate(0px, 0px)";

        });

    });

}


/* =====================================
   TOURIST PAGE
===================================== */

const destinationBtn =
    document.getElementById("destinationBtn");

const destinationResult =
    document.getElementById("destinationResult");

const destinations = [

    "Miyajima",

    "Peace Memorial Park",

    "Hiroshima Castle",

    "Shukkeien Garden",

    "Rabbit Island"

];

if (destinationBtn && destinationResult) {

    destinationBtn.addEventListener("click", () => {

        const randomDestination =
            Math.floor(Math.random() * destinations.length);

        destinationResult.textContent =
            destinations[randomDestination];

    });

}

/* =====================================
   CONTACT PAGE
===================================== */

const message =
    document.getElementById("message");

const charCount =
    document.getElementById("charCount");

if (message && charCount) {

    message.addEventListener("input", () => {

        charCount.textContent =
            message.value.length;

    });

}


/* =====================================
   FORM VALIDATION
===================================== */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");

if (contactForm && formMessage) {

    contactForm.addEventListener("submit", event => {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        const email =
            document.getElementById("email").value;

        if (
            name.trim() === "" ||
            email.trim() === ""
        ) {

            formMessage.textContent =
                "Please complete all fields.";

            return;

        }

        formMessage.textContent =
            "✅ Thank you for contacting Hiroshima 360!";

        contactForm.reset();

        if (charCount) {

            charCount.textContent = 0;

        }

    });

}