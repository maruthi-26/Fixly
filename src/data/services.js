/*
 * ============================================
 *  services.js — Mock Service Data
 * ============================================
 *
 *  WHY THIS FILE:
 *  In a real e-commerce app like FreshCart, products come from an API.
 *  For our project (Step 1-2), we keep mock data here.
 *  In Step 4, we'll replace this with actual API calls using useEffect.
 *
 *  MAPPING (E-Commerce → Home Services):
 *    Product         → Service
 *    Product Name    → Service Name (company/brand)
 *    Price           → Price Per Hour
 *    Category        → Service Category (Electrician, Plumber, etc.)
 *    Product Rating  → Provider Rating
 *
 *  Each object represents ONE service provider listing.
 * ============================================
 */

const servicesList = [
  {
    id: 1,
    name: "BrightWire Electricians",
    providerName: "Rahul S.",
    gender: "male",
    category: "Electrician",
    rating: 4.8,
    reviews: 124,
    experience: "8 years",
    pricePerHour: 85,
    description:
      "Certified electricians for wiring, switchboard repair, lighting setup, and emergency electrical issues. Fully licensed and insured.",
    phone: "+91 98765 10001",
    tags: ["Wiring", "Switchboard", "Lighting"],
    successRate: 97,
    backgroundImage: "https://images.unsplash.com/photo-1574697365382-c4b0aad996b8?w=600&h=400&fit=crop",
    profileImage: "https://i.pravatar.cc/150?img=1&u=rahul",
  },
  {
    id: 2,
    name: "FlowFix Plumbing",
    providerName: "Michael R.",
    gender: "male",
    category: "Plumber",
    rating: 4.9,
    reviews: 89,
    experience: "10 years",
    pricePerHour: 95,
    description:
      "Specializing in residential plumbing repairs, installations, and emergency services. Clean, efficient work and clear communication with clients.",
    phone: "+91 98765 10002",
    tags: ["Pipe Repair", "Installation", "Water Heaters"],
    successRate: 98,
    backgroundImage: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=400&fit=crop",
    profileImage: "https://i.pravatar.cc/150?img=2&u=michael",
  },
  {
    id: 3,
    name: "LearnWell Home Tutors",
    providerName: "Sarah T.",
    gender: "female",
    category: "Tutor",
    rating: 4.9,
    reviews: 156,
    experience: "6 years",
    pricePerHour: 45,
    description:
      "Personalized tutoring for school students across math, science, English, and exam preparation. Algebra, Calculus, and test prep for high school and college students.",
    phone: "+91 98765 10003",
    tags: ["Math", "Science", "Test Prep"],
    successRate: 99,
    backgroundImage: "https://images.unsplash.com/photo-1427504494785-cdacf02fab4b?w=600&h=400&fit=crop",
    profileImage: "https://i.pravatar.cc/150?img=5&u=sarah",
  },
  {
    id: 4,
    name: "AutoMate Mechanics",
    providerName: "David K.",
    gender: "male",
    category: "Mechanic",
    rating: 4.6,
    reviews: 72,
    experience: "12 years",
    pricePerHour: 75,
    description:
      "Doorstep vehicle servicing, diagnostics, battery replacement, and routine maintenance. Specializing in all makes and models.",
    phone: "+91 98765 10004",
    tags: ["Servicing", "Diagnostics", "Battery"],
    successRate: 94,
    backgroundImage: "https://images.unsplash.com/photo-1487700492927-ba52a2d26405?w=600&h=400&fit=crop",
    profileImage: "https://i.pravatar.cc/150?img=3&u=david",
  },
  {
    id: 5,
    name: "Sparkle Home Cleaning",
    providerName: "Sarah J.",
    gender: "female",
    category: "Cleaning",
    rating: 4.7,
    reviews: 103,
    experience: "5 years",
    pricePerHour: 60,
    description:
      "Deep cleaning expert focusing on move-in/move-out cleans and post-renovation cleanup. Eco-friendly products used.",
    phone: "+91 98765 10005",
    tags: ["Deep Clean", "Move-in", "Eco-Friendly"],
    successRate: 96,
    backgroundImage: "https://images.unsplash.com/photo-1584622181563-430f63602d4b?w=600&h=400&fit=crop",
    profileImage: "https://i.pravatar.cc/150?img=6&u=sarah-j",
  },
  {
    id: 6,
    name: "CoolCare AC Service",
    providerName: "Anil M.",
    gender: "male",
    category: "AC Repair",
    rating: 4.7,
    reviews: 67,
    experience: "9 years",
    pricePerHour: 70,
    description:
      "AC installation, gas refill, cooling checks, filter cleaning, and seasonal servicing for all brands.",
    phone: "+91 98765 10006",
    tags: ["Installation", "Gas Refill", "Maintenance"],
    successRate: 95,
    backgroundImage: "https://images.unsplash.com/photo-1584622181563-430f63602d4b?w=600&h=400&fit=crop",
    profileImage: "https://i.pravatar.cc/150?img=4&u=anil",
  },
  {
    id: 7,
    name: "GreenTouch Gardeners",
    providerName: "Priya N.",
    gender: "female",
    category: "Gardening",
    rating: 4.5,
    reviews: 48,
    experience: "7 years",
    pricePerHour: 50,
    description:
      "Garden maintenance, balcony plant setup, lawn care, pruning, and plant health support for homes and offices.",
    phone: "+91 98765 10007",
    tags: ["Lawn Care", "Pruning", "Plant Setup"],
    successRate: 92,
    backgroundImage: "https://images.unsplash.com/photo-1591857291786-8ec5a6904df0?w=600&h=400&fit=crop",
    profileImage: "https://i.pravatar.cc/150?img=7&u=priya",
  },
  {
    id: 8,
    name: "CarePlus Nursing",
    providerName: "Emma W.",
    gender: "female",
    category: "Home Care",
    rating: 4.9,
    reviews: 134,
    experience: "11 years",
    pricePerHour: 90,
    description:
      "Trained attendants and nurses for elderly care, post-surgery assistance, and daily health support. Compassionate and professional.",
    phone: "+91 98765 10008",
    tags: ["Elderly Care", "Nursing", "Post-Surgery"],
    successRate: 99,
    backgroundImage: "https://images.unsplash.com/photo-1631217314831-c02b2e9de66e?w=600&h=400&fit=crop",
    profileImage: "https://i.pravatar.cc/150?img=8&u=emma",
  },
  {
    id: 9,
    name: "QuickPaint Studio",
    providerName: "Arjun P.",
    gender: "male",
    category: "Painter",
    rating: 4.6,
    reviews: 58,
    experience: "8 years",
    pricePerHour: 65,
    description:
      "Meticulous interior painting, wallpaper removal, and trim work. We protect your furniture and deliver flawless results.",
    phone: "+91 98765 10009",
    tags: ["Interior", "Wallpaper", "Texture"],
    successRate: 93,
    backgroundImage: "https://images.unsplash.com/photo-1581092916550-e323be2ae537?w=600&h=400&fit=crop",
    profileImage: "https://i.pravatar.cc/150?img=9&u=arjun",
  },
  {
    id: 10,
    name: "FitForm Trainers",
    providerName: "Neha R.",
    gender: "female",
    category: "Fitness",
    rating: 4.8,
    reviews: 91,
    experience: "6 years",
    pricePerHour: 55,
    description:
      "At-home personal training, weight management, mobility routines, and beginner fitness plans tailored to your goals.",
    phone: "+91 98765 10010",
    tags: ["Personal Training", "Weight Loss", "Mobility"],
    successRate: 96,
    backgroundImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
    profileImage: "https://i.pravatar.cc/150?img=10&u=neha",
  },
  {
    id: 11,
    name: "TechRepair Pro",
    providerName: "Vikram S.",
    gender: "male",
    category: "Electrician",
    rating: 4.7,
    reviews: 82,
    experience: "7 years",
    pricePerHour: 80,
    description:
      "Expert in home automation, smart lighting, EV charging station setup, and electrical troubleshooting. Certified and certified professional.",
    phone: "+91 98765 10011",
    tags: ["Home Automation", "Smart Lighting", "EV Charging"],
    successRate: 96,
    backgroundImage: "https://images.unsplash.com/photo-1574697365382-c4b0aad996b8?w=600&h=400&fit=crop",
    profileImage: "https://i.pravatar.cc/150?img=11&u=vikram",
  },
  {
    id: 12,
    name: "Premium Home Repair",
    providerName: "Ravi K.",
    gender: "male",
    category: "Home Care",
    rating: 4.8,
    reviews: 95,
    experience: "9 years",
    pricePerHour: 85,
    description:
      "General maintenance, carpentry, drywall repair, and handyman services. Quick response and professional workmanship guaranteed.",
    phone: "+91 98765 10012",
    tags: ["Carpentry", "Drywall", "Maintenance"],
    successRate: 97,
    backgroundImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
    profileImage: "https://i.pravatar.cc/150?img=12&u=ravi",
  },
  {
    id: 13,
    name: "Elite Coaching Center",
    providerName: "Anjali M.",
    gender: "female",
    category: "Tutor",
    rating: 4.9,
    reviews: 142,
    experience: "9 years",
    pricePerHour: 50,
    description:
      "Advanced coaching for STEM subjects, competitive exams, and entrance prep. Experienced in online and offline tutoring with proven results.",
    phone: "+91 98765 10013",
    tags: ["STEM", "Exam Prep", "Competitive"],
    successRate: 98,
    backgroundImage: "https://images.unsplash.com/photo-1427504494785-cdacf02fab4b?w=600&h=400&fit=crop",
    profileImage: "https://i.pravatar.cc/150?img=13&u=anjali",
  },
  {
    id: 14,
    name: "AutoCare Excellence",
    providerName: "Karthik R.",
    gender: "male",
    category: "Mechanic",
    rating: 4.7,
    reviews: 88,
    experience: "11 years",
    pricePerHour: 80,
    description:
      "Specialized in 2-wheeler and 4-wheeler maintenance, brake service, transmission repair, and engine diagnostics.",
    phone: "+91 98765 10014",
    tags: ["2-Wheeler", "Transmission", "Engine"],
    successRate: 95,
    backgroundImage: "https://images.unsplash.com/photo-1487700492927-ba52a2d26405?w=600&h=400&fit=crop",
    profileImage: "https://i.pravatar.cc/150?img=14&u=karthik",
  },
  {
    id: 15,
    name: "Fresh & Clean Services",
    providerName: "Divya P.",
    gender: "female",
    category: "Cleaning",
    rating: 4.8,
    reviews: 120,
    experience: "6 years",
    pricePerHour: 65,
    description:
      "Professional carpet cleaning, upholstery cleaning, and specialized disinfection services using advanced equipment.",
    phone: "+91 98765 10015",
    tags: ["Carpet Clean", "Disinfection", "Upholstery"],
    successRate: 97,
    backgroundImage: "https://images.unsplash.com/photo-1584622181563-430f63602d4b?w=600&h=400&fit=crop",
    profileImage: "https://i.pravatar.cc/150?img=15&u=divya",
  },
];

/*
 * ============================================
 *  EXTRACTING UNIQUE CATEGORIES (Step by Step)
 * ============================================
 *
 *  GOAL: We need a list of unique category names like:
 *        ["Electrician", "Plumber", "Tutor", "Mechanic", ...]
 *
 *  PROBLEM: servicesList has 10 items, but some might share the
 *           same category. We don't want duplicates.
 *
 *  SOLUTION: Loop through every service. For each one, check:
 *            "Is this category ALREADY in our list?"
 *              → YES → skip it (don't add a duplicate)
 *              → NO  → add it to the list
 *
 *  HOW IT WORKS (first 3 iterations):
 *
 *    Iteration 1: category = "Electrician"
 *                 categoryList = []  (empty)
 *                 Is "Electrician" in the list? → NO
 *                 → Push it! → categoryList = ["Electrician"]
 *
 *    Iteration 2: category = "Plumber"
 *                 categoryList = ["Electrician"]
 *                 Is "Plumber" in the list? → NO
 *                 → Push it! → categoryList = ["Electrician", "Plumber"]
 *
 *    Iteration 3: category = "Tutor"
 *                 categoryList = ["Electrician", "Plumber"]
 *                 Is "Tutor" in the list? → NO
 *                 → Push it! → categoryList = ["Electrician", "Plumber", "Tutor"]
 *
 *    ...and so on for all 10 services.
 */

// Step 1: Create an empty array to store unique categories
const categoryList = [];

// Step 2: Loop through each service in the list
servicesList.forEach(function (eachService) {

  // Step 3: Get the category name of this service
  let categoryName = eachService.category;

  // Step 4: Check — is this category already in our list?
  let alreadyExists = categoryList.includes(categoryName);

  // Step 5: If it's NOT already there, add it
  if (alreadyExists === false) {
    categoryList.push(categoryName);
  }

});

// Final result: ["Electrician", "Plumber", "Tutor", "Mechanic", "Cleaning", ...]

export { servicesList, categoryList };
