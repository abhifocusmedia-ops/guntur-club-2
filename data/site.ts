export const contact = {
  name: "Guntur Club",
  address:
    "Ratnagirinagar, Palakaluru Road, Opp. Vignan College, Guntur – 522005, Andhra Pradesh, India",
  phone: "0863 2233 703",
  phone2: "0863 2355 241",
  email: "info@gunturclub.com",
  map: "https://www.google.com/maps/search/?api=1&query=Guntur+Club+Palakaluru+Road+Guntur",
};
export const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Amenities", href: "/amenities" },
  { label: "Stay & Celebrate", href: "/stay-and-celebrate" },
  { label: "Affiliations", href: "/affiliations" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];
export type Amenity = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: string | null;
};
export const amenities: Amenity[] = [
  {
    slug: "bar-and-restaurant",
    title: "Bar & Restaurant",
    tagline: "Taste. Relax. Celebrate.",
    description:
      "An inviting setting for family meals, friendly gatherings and special occasions, with exceptional hospitality.",
    image: "/images/restaurant.webp",
  },
  {
    slug: "swimming-pool",
    title: "Swimming Pool",
    tagline: "Dive into refreshment.",
    description:
      "A beautifully maintained pool for relaxation, fitness and recreation.",
    image: "/images/pool.webp",
  },
  {
    slug: "gym-and-fitness",
    title: "Gym & Fitness Centre",
    tagline: "Fitness first.",
    description:
      "A fully equipped, ultra-modern air-conditioned space for your wellbeing.",
    image: "/images/gym.webp",
  },
  {
    slug: "badminton",
    title: "Shuttle Badminton",
    tagline: "Serve. Smash. Succeed.",
    description:
      "Premium courts for casual games, competitive matches and skills development.",
    image: "/images/badminton.webp",
  },
  {
    slug: "pickleball",
    title: "Professional Pickleball",
    tagline: "A new standard in play.",
    description: "Professional indoor pickleball courts at GC Pavilion.",
    image: null,
  },
  {
    slug: "billiards-and-snooker",
    title: "Billiards & Snooker",
    tagline: "Precision meets tradition.",
    description:
      "Premium billiards tables and international-standard snooker at GC Pavilion.",
    image: null,
  },
  {
    slug: "air-pistol-shooting",
    title: "Air Pistol Shooting Range",
    tagline: "Focus. Precision. Performance.",
    description:
      "An indoor shooting facility for precision-focused sporting enthusiasts.",
    image: null,
  },
  {
    slug: "kids-play-area",
    title: "Kids Play Area",
    tagline: "Where little smiles shine.",
    description:
      "A welcoming play environment for children to explore, play and stay active.",
    image: "/images/kids-area.webp",
  },
];

export const extras = [
  {
    title: "Function & Conference Halls",
    href: "/stay-and-celebrate#function-halls",
    image: "/images/function-hall.webp",
  },
  {
    title: "Guest Rooms",
    href: "/stay-and-celebrate#guest-rooms",
    image: "/images/guest-room.webp",
  },
  {
    title: "Landscaped Gardens",
    href: "/stay-and-celebrate#gardens",
    image: "/images/gardens.webp",
  },
  {
    title: "Open-Air Amphitheatre",
    href: "/stay-and-celebrate#amphitheatre",
    image: "/images/amphitheatre.webp",
  },
];

export const affiliations: Record<string, string[]> = {
  "Andhra Pradesh": [
    "Vijayawada Club, Vijayawada",
    "IBP Century Club, Visakhapatnam",
  ],
  Telangana: [
    "The Hyderabad Gymkhana Club, Hyderabad",
    "Filmnagar Cultural Center, Hyderabad",
  ],
  "Tamil Nadu": [
    "Chennai Corporate Club, Chennai",
    "Andhra Social & Cultural Association, Chennai",
    "The Kerala Club, Coimbatore",
  ],
  Karnataka: [
    "Cosmopolitan Club, Bengaluru",
    "Domlur Club, Bengaluru",
    "Indiranagar Club, Bengaluru",
  ],
  Maharashtra: ["Golden Swan Country Club, Thane", "Nashik Club, Nashik"],
  Odisha: ["Bhubaneshwar Club, Bhubaneswar"],
  Rajasthan: ["Jaisal Club, Jaisalmer", "Umed Club, Jodhpur"],
  "Madhya Pradesh": ["Shree Madhav Club, Ujjain"],
};
export const gallery = [
  {
    title: "Club exterior at sunset",
    category: "Architecture",
    image: "/images/club-exterior.webp",
  },
  {
    title: "Evening at the club",
    category: "Architecture",
    image: "/images/club-evening.webp",
  },
  {
    title: "Club campus aerial",
    category: "Architecture",
    image: "/images/club-aerial.webp",
  },
  { title: "GC Pavilion", category: "Sports", image: "/images/pavilion.webp" },
  {
    title: "Badminton courts",
    category: "Sports",
    image: "/images/badminton.webp",
  },
  { title: "Modern gym", category: "Sports", image: "/images/gym.webp" },
  { title: "Swimming pool", category: "Sports", image: "/images/pool.webp" },
  {
    title: "Dining & fellowship",
    category: "Dining",
    image: "/images/restaurant.webp",
  },
  {
    title: "Function hall",
    category: "Celebrations",
    image: "/images/function-hall.webp",
  },
  { title: "Guest room", category: "Stay", image: "/images/guest-room.webp" },
  { title: "Members lounge", category: "Stay", image: "/images/lounge.webp" },
  {
    title: "Kids play area",
    category: "Outdoors",
    image: "/images/kids-area.webp",
  },
  {
    title: "Open-air amphitheatre",
    category: "Outdoors",
    image: "/images/amphitheatre.webp",
  },
  {
    title: "Landscaped gardens",
    category: "Outdoors",
    image: "/images/gardens.webp",
  },
  {
    title: "Conference gathering",
    category: "Celebrations",
    image: "/images/conference.webp",
  },
];
