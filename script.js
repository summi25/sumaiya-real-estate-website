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
    title: "Palm Grove House",
    location: "Jayanagar, Bangalore",
    priceLabel: "INR 2.9 Cr",
    numericPrice: 29000000,
    status: "Ready to Move",
    type: "House",
    tag: "Independent home",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
    listingUrl: "https://housing.com/",
    description:
      "A spacious independent house with terrace lounge, parking, and family-friendly access to schools and markets.",
    specs: ["4 Beds", "4 Baths", "3200 sq ft"],
    palette: ["#e9dbcb", "#bc9668", "#5f665f", "#20231d"]
  },
  {
    title: "Marina Court Apartments",
    location: "HSR Layout, Bangalore",
    priceLabel: "INR 1.85 Cr",
    numericPrice: 18500000,
    status: "For Sale",
    type: "Apartment",
    tag: "Family apartment",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80",
    listingUrl: "https://housing.com/",
    description:
      "A modern family apartment with clubhouse access, security, parking, and quick city connectivity.",
    specs: ["3 Beds", "3 Baths", "1860 sq ft"],
    palette: ["#eadfd1", "#bf976c", "#55616d", "#1d242a"]
  },
  {
    title: "Auric One Residences",
    location: "Indiranagar, Bangalore",
    priceLabel: "INR 3.4 Cr",
    numericPrice: 34000000,
    status: "Ready to Move",
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
    status: "New Launch",
    type: "Duplex",
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
    title: "Oakline Duplex Residences",
    location: "Bannerghatta Road, Bangalore",
    priceLabel: "INR 3.1 Cr",
    numericPrice: 31000000,
    status: "Ready to Move",
    type: "Duplex",
    tag: "Spacious duplex",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    listingUrl:
      "https://www.magicbricks.com/property-for-sale-rent-in-Bangalore/residential-real-estate-Bangalore",
    description:
      "A contemporary duplex with double-height living, large windows, and family-friendly community amenities.",
    specs: ["4 Beds", "4 Baths", "2950 sq ft"],
    palette: ["#e7d8c5", "#b98c61", "#63605c", "#23211f"]
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
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
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
    title: "Horizon Crest House",
    location: "RR Nagar, Bangalore",
    priceLabel: "INR 2.4 Cr",
    numericPrice: 24000000,
    status: "For Sale",
    type: "House",
    tag: "City family home",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
    listingUrl: "https://www.nobroker.in/",
    description:
      "A practical independent family home with terrace space, covered parking, and easy neighborhood access.",
    specs: ["3 Beds", "3 Baths", "2500 sq ft"],
    palette: ["#e6d8c6", "#b78a5f", "#646663", "#242521"]
  },
  {
    title: "Lakefront Atelier Homes",
    location: "Hebbal, Bangalore",
    priceLabel: "INR 2.6 Cr",
    numericPrice: 26000000,
    status: "For Sale",
    type: "Studio",
    tag: "Waterfront living",
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80",
    listingUrl: "https://housing.com/",
    description:
      "Quiet, elegant studio residences with lake-facing balconies, wellness amenities, and a hospitality-inspired lobby.",
    specs: ["1 Bed", "1 Bath", "780 sq ft"],
    palette: ["#ece0c8", "#b18c60", "#4d6a74", "#122127"]
  },
  {
    title: "Metro Nest Studio",
    location: "Electronic City, Bangalore",
    priceLabel: "INR 78 L",
    numericPrice: 7800000,
    status: "New Launch",
    type: "Studio",
    tag: "Compact urban living",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80&sat=-8",
    listingUrl: "https://housing.com/",
    description:
      "A thoughtfully designed studio apartment suited for young professionals and rental investors.",
    specs: ["1 Bed", "1 Bath", "640 sq ft"],
    palette: ["#e7dccf", "#b78f68", "#62666b", "#1f2328"]
  },
  {
    title: "Cedar Crest Plot Enclave",
    location: "Devanahalli, Bangalore",
    priceLabel: "INR 1.2 Cr",
    numericPrice: 12000000,
    status: "For Sale",
    type: "Plot",
    tag: "Future investment",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    listingUrl:
      "https://www.magicbricks.com/property-for-sale-rent-in-Bangalore/residential-real-estate-Bangalore",
    description:
      "A premium plotted development positioned for long-term appreciation with gated access and strong infrastructure potential.",
    specs: ["2400 sq ft", "Gated Layout", "Corner Plot"],
    palette: ["#e8dcc9", "#bb9364", "#5d6851", "#1d241a"]
  },
  {
    title: "Golden Acre Plot",
    location: "Sarjapur Extension, Bangalore",
    priceLabel: "INR 96 L",
    numericPrice: 9600000,
    status: "For Sale",
    type: "Plot",
    tag: "Growth corridor",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    listingUrl:
      "https://www.magicbricks.com/property-for-sale-rent-in-Bangalore/residential-real-estate-Bangalore",
    description:
      "A plotted investment opportunity in a fast-growing corridor with strong future residential potential.",
    specs: ["2000 sq ft", "North Facing", "Corner Access"],
    palette: ["#eadcc8", "#bc9364", "#6a684d", "#232317"]
  },
  {
    title: "Cobalt Business Hub",
    location: "Whitefield, Bangalore",
    priceLabel: "INR 3.6 L / month",
    numericPrice: 360000,
    status: "For Rent",
    type: "Commercial",
    tag: "Corporate workspace",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    listingUrl: "https://www.brigadegroup.com/",
    description:
      "A premium commercial office floor with meeting rooms, reception area, and excellent tech corridor access.",
    specs: ["5800 sq ft", "Fully Furnished", "Parking"],
    palette: ["#daccbc", "#ad8760", "#576470", "#182128"]
  },
  {
    title: "Parklane Grand Apartments",
    location: "Bellandur, Bangalore",
    priceLabel: "INR 1.48 Cr",
    numericPrice: 14800000,
    status: "For Sale",
    type: "Apartment",
    tag: "Clubhouse community",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80&sat=-18",
    listingUrl: "https://housing.com/",
    description:
      "A bright mid-rise apartment in a gated community with clubhouse access, landscaped podiums, and family-ready amenities.",
    specs: ["2 Beds", "2 Baths", "1480 sq ft"],
    palette: ["#e8decd", "#b88e63", "#586771", "#1c2328"]
  },
  {
    title: "Luma Heights Residences",
    location: "Yelahanka, Bangalore",
    priceLabel: "INR 2.18 Cr",
    numericPrice: 21800000,
    status: "New Launch",
    type: "Apartment",
    tag: "Modern high-rise",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80",
    listingUrl: "https://www.nobroker.in/",
    description:
      "A polished high-rise address with sky lounge amenities, coworking spaces, and strong airport-side connectivity.",
    specs: ["3 Beds", "3 Baths", "2140 sq ft"],
    palette: ["#ece1d0", "#be9568", "#5a6671", "#192128"]
  },
  {
    title: "Willow Signature Villa",
    location: "Kanakapura Road, Bangalore",
    priceLabel: "INR 4.85 Cr",
    numericPrice: 48500000,
    status: "For Sale",
    type: "Villa",
    tag: "Private villa enclave",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    listingUrl: "https://www.brigadegroup.com/residential/bengaluru",
    description:
      "A premium villa with landscaped frontage, private family lounge, and refined interiors inside a secure enclave.",
    specs: ["4 Beds", "5 Baths", "4300 sq ft"],
    palette: ["#e8d9c7", "#bc8d60", "#586257", "#20251f"]
  },
  {
    title: "Terranova Garden House",
    location: "Basavanagudi, Bangalore",
    priceLabel: "INR 3.25 Cr",
    numericPrice: 32500000,
    status: "Ready to Move",
    type: "House",
    tag: "Heritage neighborhood",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
    listingUrl: "https://housing.com/",
    description:
      "An elegant independent home with garden sit-out, pooja space, terrace deck, and easy access to old Bangalore conveniences.",
    specs: ["4 Beds", "4 Baths", "3400 sq ft"],
    palette: ["#ebdecf", "#bb9467", "#686457", "#27241e"]
  },
  {
    title: "Urban Loft Studio Suites",
    location: "Marathahalli, Bangalore",
    priceLabel: "INR 69 L",
    numericPrice: 6900000,
    status: "For Sale",
    type: "Studio",
    tag: "Investor friendly",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80&sat=-20",
    listingUrl: "https://www.nobroker.in/",
    description:
      "A compact, high-demand studio concept designed for rental yield, young professionals, and easy lock-and-leave living.",
    specs: ["1 Bed", "1 Bath", "560 sq ft"],
    palette: ["#e7dccd", "#b68d64", "#666b71", "#1f2328"]
  },
  {
    title: "Greenway Premium Plot",
    location: "Hoskote, Bangalore",
    priceLabel: "INR 84 L",
    numericPrice: 8400000,
    status: "New Launch",
    type: "Plot",
    tag: "Gated plotted layout",
    image:
      "https://images.unsplash.com/photo-1460317442991-0c1b2b6f4ab0?auto=format&fit=crop&w=1200&q=80",
    listingUrl:
      "https://www.magicbricks.com/property-for-sale-rent-in-Bangalore/residential-real-estate-Bangalore",
    description:
      "A plotted development with internal roads, gated access, green corridors, and long-term appreciation potential.",
    specs: ["1800 sq ft", "East Facing", "Gated Entry"],
    palette: ["#e9decb", "#bc9466", "#617055", "#22281b"]
  },
  {
    title: "Regent Square Offices",
    location: "Outer Ring Road, Bangalore",
    priceLabel: "INR 2.75 L / month",
    numericPrice: 275000,
    status: "For Rent",
    type: "Commercial",
    tag: "Flexible business floor",
    image:
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1200&q=80",
    listingUrl: "https://www.brigadegroup.com/",
    description:
      "A polished office destination with reception lounge, meeting rooms, and immediate access to Bangalore's business spine.",
    specs: ["4100 sq ft", "Managed Facility", "Visitor Parking"],
    palette: ["#dbd0c2", "#b18b63", "#5c6771", "#1a2128"]
  },
  {
    title: "Preston Lake Apartments",
    location: "JP Nagar, Bangalore",
    priceLabel: "INR 1.62 Cr",
    numericPrice: 16200000,
    status: "For Sale",
    type: "Apartment",
    tag: "Lake-facing apartment",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
    listingUrl: "https://housing.com/",
    description:
      "A well-connected apartment address with open green views, family amenities, and easy access to central Bangalore.",
    specs: ["3 Beds", "2 Baths", "1710 sq ft"],
    palette: ["#e7dccf", "#bb9168", "#5a6970", "#1b2328"]
  },
  {
    title: "Elm Ridge Villa Estate",
    location: "Hebbal, Bangalore",
    priceLabel: "INR 6.1 Cr",
    numericPrice: 61000000,
    status: "For Sale",
    type: "Villa",
    tag: "North Bangalore luxury",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",
    listingUrl: "https://www.brigadegroup.com/residential/bengaluru",
    description:
      "A gated villa address with double-height living, private garden frontage, and quick airport corridor access.",
    specs: ["5 Beds", "5 Baths", "5100 sq ft"],
    palette: ["#eadbc7", "#c09263", "#5e655e", "#20241f"]
  },
  {
    title: "Monarch Terrace House",
    location: "Malleshwaram, Bangalore",
    priceLabel: "INR 3.48 Cr",
    numericPrice: 34800000,
    status: "Ready to Move",
    type: "House",
    tag: "Classic family address",
    image:
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=1200&q=80",
    listingUrl: "https://www.nobroker.in/",
    description:
      "A spacious independent home in a heritage neighborhood with terrace seating, parking, and generous family rooms.",
    specs: ["4 Beds", "4 Baths", "3600 sq ft"],
    palette: ["#ecdfcf", "#ba9368", "#6d6258", "#27221e"]
  },
  {
    title: "Nova Business Address",
    location: "Rajajinagar, Bangalore",
    priceLabel: "INR 1.95 L / month",
    numericPrice: 195000,
    status: "For Rent",
    type: "Commercial",
    tag: "Retail and office hub",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    listingUrl: "https://www.brigadegroup.com/",
    description:
      "A polished commercial floor suited for offices, consulting firms, or boutique retail in a high-traffic district.",
    specs: ["3200 sq ft", "Lift Access", "Prime Frontage"],
    palette: ["#ddd1c3", "#b28c64", "#5b6570", "#1a2128"]
  },
  {
    title: "Crescent View Duplex",
    location: "Kalyan Nagar, Bangalore",
    priceLabel: "INR 2.74 Cr",
    numericPrice: 27400000,
    status: "For Sale",
    type: "Duplex",
    tag: "Designer duplex",
    image:
      "https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=1200&q=80",
    listingUrl:
      "https://www.magicbricks.com/property-for-sale-rent-in-Bangalore/residential-real-estate-Bangalore",
    description:
      "A duplex residence with sculpted interiors, balcony lounge spaces, and a premium neighborhood feel.",
    specs: ["3 Beds", "4 Baths", "2680 sq ft"],
    palette: ["#e9dbc9", "#be9365", "#5e6662", "#1f2421"]
  },
  {
    title: "Aster Corner Plot",
    location: "Yeshwanthpur, Bangalore",
    priceLabel: "INR 1.08 Cr",
    numericPrice: 10800000,
    status: "For Sale",
    type: "Plot",
    tag: "Corner development plot",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    listingUrl:
      "https://www.magicbricks.com/property-for-sale-rent-in-Bangalore/residential-real-estate-Bangalore",
    description:
      "A well-positioned corner plot with strong residential potential and access to metro-linked growth corridors.",
    specs: ["2200 sq ft", "Corner Site", "Clear Title"],
    palette: ["#eadfca", "#be9466", "#667050", "#202619"]
  },
  {
    title: "Mosaic Urban Studio",
    location: "BTM Layout, Bangalore",
    priceLabel: "INR 72 L",
    numericPrice: 7200000,
    status: "For Sale",
    type: "Studio",
    tag: "Compact city living",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80&hue=12",
    listingUrl: "https://housing.com/",
    description:
      "A compact studio for first-time buyers and investors looking for rental demand near major work hubs.",
    specs: ["1 Bed", "1 Bath", "590 sq ft"],
    palette: ["#e6dbc9", "#b88f65", "#65686f", "#1e2328"]
  },
  {
    title: "Westend Skyline Apartments",
    location: "Vijayanagar, Bangalore",
    priceLabel: "INR 1.38 Cr",
    numericPrice: 13800000,
    status: "New Launch",
    type: "Apartment",
    tag: "Metro-connected homes",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80&sat=-30&hue=30",
    listingUrl: "https://www.nobroker.in/",
    description:
      "A new-launch apartment community with efficient layouts, resident amenities, and strong public transport access.",
    specs: ["2 Beds", "2 Baths", "1440 sq ft"],
    palette: ["#eadfcf", "#bc9468", "#58656d", "#1c2328"]
  },
  {
    title: "Brookfield Garden House",
    location: "Brookefield, Bangalore",
    priceLabel: "INR 2.82 Cr",
    numericPrice: 28200000,
    status: "For Sale",
    type: "House",
    tag: "East Bangalore family home",
    image:
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1200&q=80",
    listingUrl: "https://housing.com/",
    description:
      "A comfortable family home with front garden space, covered parking, and convenient access to schools and offices.",
    specs: ["4 Beds", "3 Baths", "2980 sq ft"],
    palette: ["#e8ddcf", "#bc9468", "#5f655d", "#21241f"]
  },
  {
    title: "Silicon Crest Offices",
    location: "Electronic City Phase 1, Bangalore",
    priceLabel: "INR 3.15 L / month",
    numericPrice: 315000,
    status: "For Rent",
    type: "Commercial",
    tag: "Tech corridor workspace",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
    listingUrl: "https://www.brigadegroup.com/",
    description:
      "A large-format commercial workspace near major tech campuses, ideal for scaling teams and client-facing operations.",
    specs: ["5200 sq ft", "Managed Lobby", "Conference Rooms"],
    palette: ["#dbd0c4", "#b28b65", "#596673", "#182028"]
  }
];

const propertyGrid = document.getElementById("propertyGrid");
const resultsCount = document.getElementById("resultsCount");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const typeFilter = document.getElementById("typeFilter");
const statusFilter = document.getElementById("statusFilter");
const sortFilter = document.getElementById("sortFilter");
const resetFiltersButton = document.getElementById("resetFilters");
const toggleListingsButton = document.getElementById("toggleListings");
const template = document.getElementById("propertyCardTemplate");
const propertiesSection = document.getElementById("properties");
const savedCount = document.getElementById("savedCount");
const savedPropertiesGrid = document.getElementById("savedPropertiesGrid");
const clearSavedPropertiesButton = document.getElementById("clearSavedProperties");
const savedPropertiesKey = "aurea-estates-saved-properties";
const initialVisibleListings = 6;
let showAllListings = false;

function readSavedProperties() {
  try {
    const raw = window.localStorage.getItem(savedPropertiesKey);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.warn("Saved properties could not be restored.", error);
    return [];
  }
}

const savedProperties = new Set(readSavedProperties());

function getPropertyId(property) {
  return `${property.title}-${property.location}`.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function persistSavedProperties() {
  window.localStorage.setItem(
    savedPropertiesKey,
    JSON.stringify([...savedProperties])
  );
}

function updateSaveButton(button, isSaved, title = "listing") {
  button.textContent = isSaved ? "Saved" : "Save";
  button.setAttribute("aria-pressed", String(isSaved));
  button.setAttribute(
    "aria-label",
    isSaved ? `Remove ${title} from saved properties` : `Save ${title} to saved properties`
  );
  button.setAttribute(
    "title",
    isSaved ? `Remove ${title} from saved properties` : `Save ${title} to saved properties`
  );
  button.classList.toggle("is-saved", isSaved);
}

function getSavedPropertyList() {
  return properties.filter((property) => savedProperties.has(getPropertyId(property)));
}

function renderSavedProperties() {
  const savedList = getSavedPropertyList();
  savedPropertiesGrid.innerHTML = "";
  savedCount.textContent = `${savedList.length} saved propert${savedList.length === 1 ? "y" : "ies"}`;
  clearSavedPropertiesButton.hidden = savedList.length === 0;

  if (!savedList.length) {
    const emptyState = document.createElement("div");
    emptyState.className = "saved-empty";
    emptyState.innerHTML =
      "<strong>No saved properties yet.</strong><p>Users can tap the Save button on any listing and it will appear here on this device for quick comparison.</p>";
    savedPropertiesGrid.appendChild(emptyState);
    return;
  }

  savedList.forEach((property) => {
    const item = document.createElement("article");
    item.className = "saved-card";

    const top = document.createElement("div");
    top.className = "saved-card-top";

    const copy = document.createElement("div");
    const title = document.createElement("strong");
    title.textContent = property.title;
    const location = document.createElement("span");
    location.textContent = property.location;
    copy.append(title, location);

    const price = document.createElement("p");
    price.className = "saved-price";
    price.textContent = property.priceLabel;
    top.append(copy, price);

    const meta = document.createElement("p");
    meta.className = "saved-meta";
    meta.textContent = `${property.type} • ${property.status} • ${property.tag}`;

    const specs = document.createElement("div");
    specs.className = "saved-spec-list";
    property.specs.forEach((spec) => {
      const pill = document.createElement("span");
      pill.textContent = spec;
      specs.appendChild(pill);
    });

    const actions = document.createElement("div");
    actions.className = "saved-card-actions";

    const requestLink = document.createElement("a");
    requestLink.href = "#contact";
    requestLink.textContent = "Request details";

    const liveLink = document.createElement("a");
    liveLink.href = property.listingUrl;
    liveLink.target = "_blank";
    liveLink.rel = "noreferrer";
    liveLink.textContent = "Open live site";

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "saved-remove";
    removeButton.textContent = "Remove from saved";
    removeButton.setAttribute("aria-label", `Remove ${property.title} from saved properties`);
    removeButton.addEventListener("click", () => {
      savedProperties.delete(getPropertyId(property));
      persistSavedProperties();
      renderSavedProperties();
      renderProperties();
    });

    actions.append(requestLink, liveLink, removeButton);
    item.append(top, meta, specs, actions);
    savedPropertiesGrid.appendChild(item);
  });
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

function renderProperties(shouldScroll = false) {
  const filtered = getFilteredProperties();
  propertyGrid.innerHTML = "";

  resultsCount.textContent = `${filtered.length} matching listing${filtered.length === 1 ? "" : "s"}`;
  toggleListingsButton.hidden = true;

  if (!filtered.length) {
    const emptyState = document.createElement("div");
    emptyState.className = "property-empty";
    emptyState.innerHTML =
      "<strong>No listings match these filters.</strong><p>Try a broader search or reset the filters to view the full collection.</p>";
    propertyGrid.appendChild(emptyState);
    if (shouldScroll) {
      propertiesSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    return;
  }

  const visibleProperties = showAllListings ? filtered : filtered.slice(0, initialVisibleListings);

  visibleProperties.forEach((property) => {
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
    updateSaveButton(saveButton, isSaved, property.title);

    saveButton.addEventListener("click", () => {
      if (savedProperties.has(propertyId)) {
        savedProperties.delete(propertyId);
      } else {
        savedProperties.add(propertyId);
      }

      persistSavedProperties();
      updateSaveButton(saveButton, savedProperties.has(propertyId), property.title);
      renderSavedProperties();
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

  if (filtered.length > initialVisibleListings) {
    toggleListingsButton.hidden = false;
    toggleListingsButton.textContent = showAllListings
      ? "Show fewer properties"
      : `Show more properties (${filtered.length - initialVisibleListings} more)`;
  }

  if (shouldScroll) {
    propertiesSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function resetAllFilters(shouldScroll = true) {
  searchForm.reset();
  searchInput.value = "";
  typeFilter.value = "all";
  statusFilter.value = "all";
  sortFilter.value = "featured";
  showAllListings = false;
  renderProperties(shouldScroll);
}

[searchInput, typeFilter, statusFilter, sortFilter].forEach((element) => {
  element.addEventListener("input", () => {
    showAllListings = false;
    renderProperties(searchInput.value.trim().length > 0);
  });
  element.addEventListener("change", () => {
    showAllListings = false;
    renderProperties(true);
  });
});

resetFiltersButton.addEventListener("click", (event) => {
  event.preventDefault();
  resetAllFilters(true);
});

toggleListingsButton.addEventListener("click", () => {
  showAllListings = !showAllListings;
  renderProperties(!showAllListings);
});

clearSavedPropertiesButton.addEventListener("click", () => {
  savedProperties.clear();
  persistSavedProperties();
  renderSavedProperties();
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

renderSavedProperties();
renderProperties();
