document.addEventListener("DOMContentLoaded", function () {
  const h1Element = document.getElementById("typing-effect-h1");
  const h2Element = document.getElementById("typing-effect-h2");
  const pElement = document.getElementById("typing-effect-p");

  const h1Text = "Memaura";
  const h2Text = "Your Emotions, Our Melody!";
  const pText =
    "Tired of explaining your feelings in words? Let us turn your emotions into a beautiful, customized song that speaks straight from the heart.";

  let h1Index = 0;
  let h2Index = 0;
  let pIndex = 0;

  function typeH1() {
    if (h1Index < h1Text.length) {
      h1Element.innerHTML += h1Text.charAt(h1Index);
      h1Index++;
      setTimeout(typeH1, 200); // Slower typing speed for h1
    } else {
      h2Element.style.visibility = "visible"; // Make h2 visible
      typeH2(); // Start typing h2
    }
  }

  function typeH2() {
    if (h2Index < h2Text.length) {
      h2Element.innerHTML += h2Text.charAt(h2Index);
      h2Index++;
      setTimeout(typeH2, 150); // Slower typing speed for h2
    } else {
      pElement.style.visibility = "visible"; // Make p visible
      typeP(); // Start typing p
    }
  }

  function typeP() {
    if (pIndex < pText.length) {
      pElement.innerHTML += pText.charAt(pIndex);
      pIndex++;
      setTimeout(typeP, 50); // Moderate typing speed for p
    }
  }

  // Start the typing effect for h1
  typeH1();
});
const lang1 = document.getElementById("search-box-1");
const lang2 = document.getElementById("search-box-2");
const pricingOptions = document.getElementById("time-selector");
const orderNowBtn = document.getElementById("order-now-btn");
const pricingCards = document.querySelectorAll(".pricing-card");

// Store selected price details
let selectedDetails = {
  lang1: "",
  lang2: "",
  songName: "",
  time: "",
  price: "",
};

// Show price list when both languages are selected
function checkLanguagesSelected() {
  if (lang1.value !== "" && lang2.value !== "") {
    pricingOptions.style.display = "block";

    // Smooth scroll to pricing section
    pricingOptions.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    pricingOptions.style.display = "none";
    orderNowBtn.classList.add("hidden"); // Hide order button when deselected
  }
}

lang1.addEventListener("change", checkLanguagesSelected);
lang2.addEventListener("change", checkLanguagesSelected);

// Show "Order Now" button and store selected details
pricingCards.forEach((card) => {
  card.addEventListener("click", () => {
    pricingCards.forEach((c) => (c.style.backgroundColor = "#f9f9f9")); // Reset all
    card.style.backgroundColor = "#d1e7dd"; // Highlight selected

    // Get details from selected card
    selectedDetails.songName = card.dataset.name;
    selectedDetails.time = card.dataset.time;
    selectedDetails.price = card.dataset.price;
    selectedDetails.lang1 = lang1.options[lang1.selectedIndex].text;
    selectedDetails.lang2 = lang2.options[lang2.selectedIndex].text;

    orderNowBtn.classList.remove("hidden");

    // Smooth scroll to the order button
    setTimeout(() => {
      orderNowBtn.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
  });
});

// Send details to WhatsApp when clicking "Order Now"
orderNowBtn.addEventListener("click", () => {
  if (
    !selectedDetails.lang1 ||
    !selectedDetails.lang2 ||
    !selectedDetails.songName ||
    !selectedDetails.price
  ) {
    alert("Please select both languages and a pricing option.");
    return;
  }

  // Create WhatsApp message
  const message =
    ` *Custom Song Order Request* \n\n` +
    ` *Languages:* ${selectedDetails.lang1} + ${selectedDetails.lang2}\n` +
    ` *Song Type:* ${selectedDetails.songName}\n` +
    ` *Duration:* ${selectedDetails.time} minutes\n` +
    ` *Price:* ${selectedDetails.price}\n\n` +
    ` Please let me know the next steps. Looking forward to your response!`;

  // Encode message for URL
  const encodedMessage = encodeURIComponent(message);

  // WhatsApp API link (Replace with your number)
  const whatsappURL = `https://wa.me/918217737779?text=${encodedMessage}`;

  // Open WhatsApp chat
  window.open(whatsappURL, "_blank");
});
