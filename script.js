const properties = [
  {
    title: "Skyline Crest Villa",
    location: "Whitefield, Bangalore",
    priceLabel: "INR 8.9 Cr",
    numericPrice: 89000000,
    status: "For Sale",
    type: "Villa",
    tag: "Signature home",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    listingUrl: "https://www.brigadegroup.com/residential/bengaluru",
    description:
      "A contemporary villa with skyline views, a sculpted courtyard, private office, and wellness deck.",
    specs: ["5 Beds", "6 Baths", "6200 sq ft"],
    palette: ["#ead2af", "#bb8d54", "#294451", "#0d171d"]
  },
  {
    title: "Auric One Residences",
    location: "Indiranagar, Bangalore",
    priceLabel: "INR 3.4 Cr",
    numericPrice: 34000000,
    status: "For Sale",
    type: "Apartment",
    tag: "Urban luxury",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    listingUrl: "https://housing.com/",
    description:
      "A refined design-led apartment with terrace lounge access, concierge services, and a prestigious location.",
    specs: ["3 Beds", "3 Baths", "2400 sq ft"],
    palette: ["#f1dec3", "#c09961", "#52676f", "#17303a"]
  },
  {
    title: "Verdant Edge Estate",
    location: "Sarjapur Road, Bangalore",
    priceLabel: "INR 5.2 Cr",
    numericPrice: 52000000,
    status: "For Sale",
    type: "Villa",
    tag: "Family retreat",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    listingUrl:
      "https://www.magicbricks.com/property-for-sale-rent-in-Bangalore/residential-real-estate-Bangalore",
    description:
      "A peaceful gated villa estate with landscaped gardens, clubhouse access, and generous indoor-outdoor living.",
    specs: ["4 Beds", "5 Baths", "4100 sq ft"],
    palette: ["#ddcaaa", "#9d7b4f", "#45604d", "#172b25"]
  },
  {
    title: "Canvas Tower Penthouse",
    location: "Koramangala, Bangalore",
    priceLabel: "INR 6.8 Cr",
    numericPrice: 68000000,
    status: "For Sale",
    type: "Penthouse",
    tag: "Sky collection",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80",
    listingUrl: "https://www.nobroker.in/",
    description:
      "Double-height living, statement interiors, private terrace entertaining, and panoramic city views.",
    specs: ["4 Beds", "5 Baths", "4800 sq ft"],
    palette: ["#e6d6c8", "#b77d57", "#5b5968", "#1c1c25"]
  },
  {
    title: "Orbit Business Suites",
    location: "MG Road, Bangalore",
    priceLabel: "INR 2.1 L / month",
    numericPrice: 210000,
    status: "For Rent",
    type: "Commercial",
    tag: "Prime commercial",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
    listingUrl: "https://www.brigadegroup.com/",
    description:
      "High-visibility office suites with premium finishes, boardroom facilities, and excellent connectivity.",
    specs: ["4200 sq ft", "24/7 Access", "Parking"],
    palette: ["#d8c9b1", "#b0895b", "#54606b", "#162028"]
  },
  {
    title: "Lakefront Atelier Homes",
    location: "Hebbal, Bangalore",
    priceLabel: "INR 2.6 Cr",
    numericPrice: 26000000,
    status: "For Sale",
    type: "Apartment",
    tag: "Waterfront living",
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80",
    listingUrl: "https://housing.com/",
    description:
      "Quiet, elegant residences with lake-facing balconies, wellness amenities, and a hospitality-inspired lobby.",
    specs: ["3 Beds", "3 Baths", "2120 sq ft"],
    palette: ["#ece0c8", "#b18c60", "#4d6a74", "#122127"]
  }
];

const propertyGrid = document.getElementById("propertyGrid");
const resultsCount = document.getElementById("resultsCount");
const searchInput = document.getElementById("searchInput");
const typeFilter = document.getElementById("typeFilter");
const statusFilter = document.getElementById("statusFilter");
const sortFilter = document.getElementById("sortFilter");
const resetFiltersButton = document.getElementById("resetFilters");
const template = document.getElementById("propertyCardTemplate");
const savedPropertiesKey = "aurea-estates-saved-properties";
const savedProperties = new Set(
  JSON.parse(window.localStorage.getItem(savedPropertiesKey) || "[]")
);

function getPropertyId(property) {
  return `${property.title}-${property.location}`.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function persistSavedProperties() {
  window.localStorage.setItem(
    savedPropertiesKey,
    JSON.stringify([...savedProperties])
  );
}

function updateSaveButton(button, isSaved) {
  button.textContent = isSaved ? "Saved" : "Save";
  button.setAttribute("aria-pressed", String(isSaved));
  button.classList.toggle("is-saved", isSaved);
}

function createPropertyArt(title, palette) {
  const [sky, sun, building, shadow] = palette;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520" role="img" aria-label="${title}">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${sky}" />
          <stop offset="55%" stop-color="${sun}" />
          <stop offset="100%" stop-color="${building}" />
        </linearGradient>
      </defs>
      <rect width="800" height="520" fill="url(#bg)" />
      <circle cx="610" cy="110" r="66" fill="rgba(255,245,226,0.42)" />
      <path d="M0 430 C150 350 260 390 390 340 C530 285 610 370 800 300 V520 H0 Z" fill="${shadow}" opacity="0.34" />
      <rect x="110" y="170" width="280" height="200" rx="18" fill="${shadow}" opacity="0.95" />
      <rect x="148" y="205" width="70" height="85" rx="8" fill="rgba(255,255,255,0.22)" />
      <rect x="235" y="205" width="115" height="130" rx="8" fill="rgba(255,255,255,0.18)" />
      <rect x="430" y="120" width="210" height="250" rx="18" fill="${building}" opacity="0.9" />
      <rect x="460" y="150" width="150" height="160" rx="10" fill="rgba(255,255,255,0.18)" />
      <rect x="60" y="370" width="680" height="38" rx="19" fill="rgba(255,255,255,0.14)" />
      <rect x="250" y="395" width="130" height="18" rx="9" fill="rgba(255,255,255,0.3)" />
      <rect x="470" y="392" width="170" height="16" rx="8" fill="rgba(255,255,255,0.2)" />
    </svg>
  `;

  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

function getFilteredProperties() {
  const query = searchInput.value.trim().toLowerCase();
  const type = typeFilter.value;
  const status = statusFilter.value;
  const sort = sortFilter.value;

  let filtered = properties.filter((property) => {
    const searchable = [
      property.title,
      property.location,
      property.tag,
      property.description,
      ...property.specs
    ]
      .join(" ")
      .toLowerCase();

    const matchesQuery = searchable.includes(query);
    const matchesType = type === "all" || property.type === type;
    const matchesStatus = status === "all" || property.status === status;

    return matchesQuery && matchesType && matchesStatus;
  });

  if (sort === "price-high") {
    filtered = filtered.sort((a, b) => b.numericPrice - a.numericPrice);
  } else if (sort === "price-low") {
    filtered = filtered.sort((a, b) => a.numericPrice - b.numericPrice);
  } else {
    filtered = filtered.sort((a, b) => {
      if (a.status === "For Sale" && b.status !== "For Sale") return -1;
      if (a.status !== "For Sale" && b.status === "For Sale") return 1;
      return 0;
    });
  }

  return filtered;
}

function renderProperties() {
  const filtered = getFilteredProperties();
  propertyGrid.innerHTML = "";

  resultsCount.textContent = `${filtered.length} listing${filtered.length === 1 ? "" : "s"}`;

  if (!filtered.length) {
    const emptyState = document.createElement("div");
    emptyState.className = "property-empty";
    emptyState.innerHTML =
      "<strong>No listings match these filters.</strong><p>Try a broader search or reset the filters to view the full collection.</p>";
    propertyGrid.appendChild(emptyState);
    return;
  }

  filtered.forEach((property) => {
    const clone = template.content.cloneNode(true);
    const card = clone.querySelector(".property-card");
    const visual = clone.querySelector(".property-visual");
    const propertyLink = clone.querySelector(".property-link");
    const saveButton = clone.querySelector(".save-chip");
    const propertyId = getPropertyId(property);
    const isSaved = savedProperties.has(propertyId);

    visual.style.backgroundImage = `linear-gradient(180deg, rgba(8, 15, 20, 0.08), rgba(8, 15, 20, 0.4)), url("${property.image}"), ${createPropertyArt(property.title, property.palette)}`;
    clone.querySelector(".property-status").textContent = property.status;
    clone.querySelector(".property-location").textContent = property.location;
    clone.querySelector(".property-price").textContent = property.priceLabel;
    clone.querySelector(".property-title").textContent = property.title;
    clone.querySelector(".property-description").textContent = property.description;
    clone.querySelector(".property-tag").textContent = property.tag;
    propertyLink.href = property.listingUrl;
    updateSaveButton(saveButton, isSaved);

    saveButton.addEventListener("click", () => {
      if (savedProperties.has(propertyId)) {
        savedProperties.delete(propertyId);
      } else {
        savedProperties.add(propertyId);
      }

      persistSavedProperties();
      updateSaveButton(saveButton, savedProperties.has(propertyId));
    });

    const specs = clone.querySelector(".property-specs");
    property.specs.forEach((spec) => {
      const item = document.createElement("li");
      item.textContent = spec;
      specs.appendChild(item);
    });

    card.dataset.type = property.type;
    propertyGrid.appendChild(clone);
  });
}

[searchInput, typeFilter, statusFilter, sortFilter].forEach((element) => {
  element.addEventListener("input", renderProperties);
  element.addEventListener("change", renderProperties);
});

resetFiltersButton.addEventListener("click", () => {
  searchInput.value = "";
  typeFilter.value = "all";
  statusFilter.value = "all";
  sortFilter.value = "featured";
  renderProperties();
});

const contactForm = document.querySelector(".contact-form");
const formStatus = document.querySelector(".form-status");
const contactName = document.getElementById("contactName");
const contactEmail = document.getElementById("contactEmail");
const contactGoal = document.getElementById("contactGoal");
const contactMessage = document.getElementById("contactMessage");

function setFieldError(field, message) {
  const error = document.querySelector(`[data-error-for="${field.id}"]`);
  field.classList.toggle("is-invalid", Boolean(message));
  error.textContent = message;
}

function validateContactForm() {
  let isValid = true;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const nameValue = contactName.value.trim();
  const emailValue = contactEmail.value.trim();
  const goalValue = contactGoal.value.trim();
  const messageValue = contactMessage.value.trim();

  if (nameValue.length < 3) {
    setFieldError(contactName, "Please enter your full name.");
    isValid = false;
  } else {
    setFieldError(contactName, "");
  }

  if (!emailPattern.test(emailValue)) {
    setFieldError(contactEmail, "Please enter a valid email address.");
    isValid = false;
  } else {
    setFieldError(contactEmail, "");
  }

  if (!goalValue) {
    setFieldError(contactGoal, "Please select your property goal.");
    isValid = false;
  } else {
    setFieldError(contactGoal, "");
  }

  if (messageValue.length < 20) {
    setFieldError(contactMessage, "Please enter at least 20 characters.");
    isValid = false;
  } else {
    setFieldError(contactMessage, "");
  }

  return isValid;
}

[contactName, contactEmail, contactGoal, contactMessage].forEach((field) => {
  field.addEventListener("input", () => {
    validateContactForm();
    formStatus.textContent = "";
    formStatus.className = "form-status";
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector("button");
  const originalText = button.textContent;

  if (!validateContactForm()) {
    formStatus.textContent = "Please fix the highlighted errors before submitting.";
    formStatus.className = "form-status is-error";
    return;
  }

  formStatus.textContent = "Your interest has been submitted successfully.";
  formStatus.className = "form-status is-success";
  button.textContent = "Interest Submitted";
  button.disabled = true;

  window.setTimeout(() => {
    button.textContent = originalText;
    button.disabled = false;
    formStatus.textContent = "";
    formStatus.className = "form-status";
    event.currentTarget.reset();
    [contactName, contactEmail, contactGoal, contactMessage].forEach((field) =>
      setFieldError(field, "")
    );
  }, 1800);
});

renderProperties();
