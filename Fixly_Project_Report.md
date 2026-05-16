# Fixly - Local Service Finder

## Project Report

### Frontend Web Development Project

**Project Title:** Fixly - Local Service Finder  
**Technology Used:** React, Vite, JavaScript, CSS, React Router DOM  
**Project Type:** Frontend Web Application  
**Domain:** Local Service Discovery and Booking  

---

# Certificate

This is to certify that the project report titled **"Fixly - Local Service Finder"** is prepared as part of a Frontend Web Development project. The project focuses on designing and developing a responsive React-based web application that helps users find and book local service providers.

The project demonstrates the use of React components, routing, state handling, API integration, authentication flow, protected routes, localStorage, filtering, sorting, form handling, and responsive user interface design.

---

# Declaration

I hereby declare that the project titled **"Fixly - Local Service Finder"** is prepared as a frontend web development project. The content of this report is based on the project structure, implementation logic, and features planned and developed in the Fixly React application.

---

# Acknowledgement

I would like to express my sincere gratitude to my faculty and mentors for their guidance and support throughout the development of this project. I also acknowledge the resources, documentation, and tools that helped me understand React, Vite, React Router, JavaScript, CSS, API integration, and frontend application development.

---

# Abstract

Frontend web development plays an important role in creating interactive, responsive, and user-friendly digital platforms. The project **Fixly - Local Service Finder** is designed as a React-based frontend web application that helps users find and book nearby local service providers. The platform includes services such as electricians, plumbers, tutors, mechanics, cleaners, AC repair technicians, gardeners, painters, home care workers, and fitness trainers.

The main objective of this project is to provide a simple and organized platform where users can browse verified professionals, filter services by category, sort results by rating, price, or experience, view complete provider details, and book a service by selecting a suitable date and time slot. The project is inspired by real-world service platforms that connect customers with local professionals.

The application is developed using Vite, React JSX, React Router DOM, JavaScript, and CSS. It follows a single-page application structure where different pages are rendered based on the route without loading separate HTML pages. The project includes Login, Register, Home, Services, Service Details, Booking, My Bookings, and Not Found pages.

The project also includes authentication using the provided login and registration APIs. After successful login, the authentication token is stored in localStorage and global login state is managed using AuthContext. PublicRoute and PrivateRoute components are used to control navigation based on authentication status. Booking details are stored in localStorage and displayed in the My Bookings page.

This project is useful because it solves a real-world problem of finding reliable local service providers. It also helps in learning important frontend concepts such as reusable components, props, state handling, conditional rendering, list rendering, route parameters, URL query parameters, API calls, controlled forms, localStorage, and responsive UI design.

---

# Table of Contents

1. Introduction  
2. Problem Statement  
3. Objectives of the Project  
4. Scope of the Project  
5. Existing System  
6. Proposed System  
7. Feasibility Study  
8. Requirement Analysis  
9. Hardware and Software Requirements  
10. Technology Stack  
11. System Architecture  
12. Project Modules  
13. Workflow of the Project  
14. Implementation Details  
15. User Interface Design  
16. Testing  
17. Advantages  
18. Limitations  
19. Future Enhancements  
20. Conclusion  
21. Bibliography  

---

# 1. Introduction

Local services are required in daily life for repair, maintenance, education, cleaning, health care, and personal support. Users often need electricians, plumbers, tutors, mechanics, cleaners, AC technicians, gardeners, painters, home care workers, and fitness trainers. However, finding a reliable local service provider can be difficult when users depend only on offline contacts, phone calls, or local advertisements.

The Fixly project provides a frontend solution for this problem. It is a React-based local service finder application where users can login, browse services, filter professionals by category, view provider details, and book a service by selecting a date and time slot. The application is designed to provide a modern, clean, and responsive user experience.

The project demonstrates the practical use of React in building a single-page application. It includes routing, reusable components, mock data rendering, authentication state management, protected routes, booking form validation, and localStorage-based data persistence.

---

# 2. Problem Statement

The main problem addressed by this project is the difficulty users face when searching for trusted local service providers. In traditional offline systems, users may not get enough information about provider experience, rating, price, or availability before making contact.

The major issues in the existing process are:

1. Users do not have one organized platform for local services.
2. Service provider details are often unavailable.
3. It is difficult to compare providers by rating, experience, and price.
4. Booking a service usually depends on manual calls.
5. There is no proper booking history in offline searching.
6. Users cannot easily filter services by category.

Fixly aims to solve these problems through a structured frontend application.

---

# 3. Objectives of the Project

The objectives of the Fixly project are:

1. To develop a responsive React-based local service finder application.
2. To allow users to register and login using API-based authentication.
3. To protect important routes using authentication state.
4. To display local service providers using reusable components.
5. To allow users to filter services by category.
6. To allow users to sort services by rating, price, and experience.
7. To display provider details using route parameters.
8. To provide a service booking form.
9. To validate booking date and time slot.
10. To store booking details in localStorage.
11. To display and manage user bookings.
12. To create a clean and responsive user interface.

---

# 4. Scope of the Project

The scope of this project is limited to frontend development. The application includes the main customer-side workflow for discovering and booking local services. The project uses mock service data and localStorage for storing booking details.

The current scope includes:

1. User registration and login.
2. Home page with service highlights.
3. Services listing page.
4. Category filtering.
5. Sorting of service providers.
6. Service details page.
7. Booking page.
8. My Bookings page.
9. Booking cancellation.
10. Protected route handling.
11. Responsive design.

The project does not include a real backend database for services and bookings in the current version.

---

# 5. Existing System

In the existing offline system, users usually find service providers through phone contacts, local advertisements, references from friends, or physical shops. This process has several disadvantages.

Users may not know whether the provider is reliable. They may not know the provider's rating, experience, price, or availability. There is also no proper digital booking record. Comparing multiple service providers becomes difficult because information is scattered.

This creates a need for a web-based service finder platform where service details can be displayed clearly.

---

# 6. Proposed System

The proposed system is **Fixly - Local Service Finder**, a React-based frontend application. It allows users to browse local service providers, filter services, view provider details, and book appointments.

The proposed system includes:

1. API-based login and registration.
2. Protected navigation using AuthContext.
3. Category-based service browsing.
4. Sorting by rating, price, and experience.
5. Dynamic service detail pages.
6. Booking form with validation.
7. localStorage-based booking history.
8. Booking cancellation feature.
9. Responsive and interactive UI.

This system improves the user experience by presenting service information in an organized and interactive way.

---

# 7. Feasibility Study

## Technical Feasibility

The project is technically feasible because it uses standard frontend technologies such as React, JavaScript, CSS, Vite, and React Router DOM. These technologies are widely supported and suitable for building responsive single-page applications.

## Operational Feasibility

The application is easy to use because users can login, browse services, filter professionals, view details, and book services through a clear workflow. The interface is designed to be simple and understandable.

## Economic Feasibility

The project does not require paid tools or infrastructure in the first version. It uses free and open-source frontend technologies. Mock data and localStorage are used to avoid backend cost during the learning stage.

---

# 8. Requirement Analysis

## Functional Requirements

1. The system should allow users to register.
2. The system should allow users to login.
3. The system should store login token in localStorage.
4. The system should protect private routes.
5. The system should display service categories.
6. The system should display all service providers.
7. The system should filter providers by category.
8. The system should sort providers by rating, price, and experience.
9. The system should display service details using route parameters.
10. The system should allow users to book a service.
11. The system should validate booking date and time slot.
12. The system should save bookings in localStorage.
13. The system should display booking history.
14. The system should allow cancellation of pending bookings.

## Non-Functional Requirements

1. The application should be responsive.
2. The UI should be clean and easy to understand.
3. Navigation should be smooth.
4. The code should be modular.
5. The application should load quickly.
6. The form validation should improve user experience.

---

# 9. Hardware and Software Requirements

## Hardware Requirements

1. Processor: Intel i3 or above
2. RAM: Minimum 4 GB
3. Storage: Minimum 500 MB free space
4. Display: Desktop or laptop monitor
5. Internet connection for API calls

## Software Requirements

1. Operating System: Windows
2. Code Editor: Visual Studio Code
3. Browser: Chrome, Edge, or Firefox
4. Node.js
5. npm
6. Vite
7. React
8. React Router DOM

---

# 10. Technology Stack

## React

React is used to build reusable UI components and manage frontend logic. Pages and components are written using JSX.

## Vite

Vite is used as the build tool and development server. It provides fast startup and efficient development experience.

## JavaScript

JavaScript is used for event handling, state updates, filtering, sorting, validation, and API calls.

## CSS

CSS is used for styling pages, layout, cards, forms, buttons, and responsive behavior.

## React Router DOM

React Router DOM is used for page navigation, dynamic routes, public routes, and private routes.

## Fetch API

Fetch API is used for login and registration API requests.

## localStorage

localStorage is used to store authentication token and booking history.

---

# 11. System Architecture

The Fixly application follows a client-side single-page application architecture.

## Presentation Layer

This layer includes React components and CSS files. It controls the visual layout and user interface.

Examples:

- Navbar
- Footer
- ServiceCard
- CategoryCard
- Login page
- Services page
- Booking page

## Logic Layer

This layer includes React state, event handlers, route guards, filtering logic, sorting logic, and booking validation.

Examples:

- useState for form values
- useEffect for loading bookings
- PrivateRoute and PublicRoute
- Filtering services by category
- Sorting providers
- Validating date and time slots

## Data Layer

This layer includes mock service data, API responses, and localStorage data.

Examples:

- `servicesList`
- `categoryList`
- Login token
- Saved bookings

---

# 12. Project Modules

## Authentication Module

This module includes Login and Register pages. It communicates with the provided authentication APIs. After login, the token is stored in localStorage and login state is managed using AuthContext.

## Route Protection Module

This module includes PublicRoute and PrivateRoute. PublicRoute prevents logged-in users from accessing login/register pages again. PrivateRoute prevents unauthenticated users from accessing protected pages.

## Home Module

The Home page introduces the platform. It includes hero section, trust highlights, categories, featured services, and call-to-action sections.

## Services Module

The Services page displays all available professionals. It includes category pills, result count, sorting options, service cards, and empty-state handling.

## Service Details Module

The Service Details page displays detailed provider information. It uses route parameters to find the selected service provider from the mock data.

## Booking Module

The Booking page collects customer booking details such as name, phone, address, date, time slot, and problem description. It validates input and stores booking details in localStorage.

## My Bookings Module

The My Bookings page displays all saved bookings. It allows users to cancel pending bookings.

---

# 13. Workflow of the Project

## Step 1: User Opens the Application

The application starts from the login route. If the user is not logged in, they can access Login or Register pages.

## Step 2: User Registers

New users can enter their name, email, and password. The data is sent to the registration API.

## Step 3: User Logs In

Existing users enter email and password. The login API verifies the credentials. If successful, the token is saved and the user is redirected to the Home page.

## Step 4: Route Protection

AuthContext checks whether the user is logged in. PrivateRoute allows access to protected pages only if the user has a valid login state.

## Step 5: Home Page

The user sees the home page with platform introduction, service categories, featured services, and trust information.

## Step 6: Service Browsing

The user opens the Services page and views all available professionals.

## Step 7: Filtering and Sorting

The user selects a category and sorts professionals by rating, price, or experience.

## Step 8: Service Details

The user clicks a provider card. The application opens the Service Details page using the provider ID in the route.

## Step 9: Booking

The user opens the Booking page and enters customer details, address, date, time slot, and service problem.

## Step 10: Validation

The application validates required fields, prevents past dates, and disables past time slots for the current date.

## Step 11: Save Booking

After successful validation, the booking is stored in localStorage.

## Step 12: My Bookings

The user is redirected to My Bookings page, where saved bookings are displayed.

## Step 13: Cancel Booking

The user can cancel a pending booking. The booking status is updated to Cancelled.

---

# 14. Implementation Details

## App Routing

The main routes are configured in `App.jsx`. Public routes are used for login and registration. Private routes are used for authenticated pages.

Important routes:

- `/` - Login page
- `/login` - Login page
- `/register` - Register page
- `/home` - Home page
- `/services` - Services page
- `/service/:id` - Service Details page
- `/booking/:id` - Booking page
- `/bookings` - My Bookings page
- `*` - Not Found page

## Authentication

Authentication is handled using the Login and Register pages. The login page sends email and password to the login API. If login succeeds, the token is stored in localStorage and AuthContext updates the login state.

## Service Data

The service provider data is stored in `services.js`. Each service contains details such as ID, provider name, category, rating, reviews, experience, price per hour, description, phone number, tags, and success rate.

## Filtering

The Services page filters service providers by category. If the selected category is "All", all services are displayed. Otherwise, only matching category services are shown.

## Sorting

The Services page sorts services based on selected criteria:

- Rating
- Price low to high
- Price high to low
- Experience

## Booking Validation

The Booking page validates:

1. Required customer fields
2. Date should not be in the past
3. Time slot should not be in the past when the selected date is today

## Booking Storage

Booking details are stored in localStorage. The My Bookings page reads this data and displays booking history.

---

# 15. User Interface Design

The UI is designed to be modern, clean, and easy to use. The application uses cards, buttons, category pills, provider profiles, forms, and status badges.

Important UI elements include:

1. Navbar for navigation
2. Hero section on Home page
3. Category cards
4. Service provider cards
5. Sorting dropdown
6. Booking form
7. Booking history cards
8. Status badges
9. Empty state messages

The design focuses on readability, spacing, responsive layout, and clear user actions.

---

# 16. Testing

The following testing scenarios can be used:

## Authentication Testing

1. Submit login form with empty fields.
2. Submit register form with empty fields.
3. Login with valid credentials.
4. Check whether token is stored.
5. Try accessing private routes without login.

## Services Testing

1. Open Services page.
2. Select different categories.
3. Sort by rating.
4. Sort by price low to high.
5. Sort by price high to low.
6. Sort by experience.

## Service Details Testing

1. Open a valid service details route.
2. Open an invalid service ID.
3. Check provider details display.

## Booking Testing

1. Submit booking form with empty fields.
2. Select past date.
3. Select today's date and check past time slots.
4. Submit valid booking.
5. Check My Bookings page.
6. Cancel a pending booking.

## Responsive Testing

1. Test on desktop screen.
2. Test on tablet screen.
3. Test on mobile screen.
4. Check whether forms and cards remain readable.

---

# 17. Advantages

1. Easy service discovery.
2. Organized provider details.
3. Category-based filtering.
4. Sorting improves comparison.
5. Dynamic service details page.
6. Protected routes improve navigation control.
7. Booking validation improves correctness.
8. localStorage preserves booking data.
9. Responsive interface supports different devices.
10. Modular React components improve maintainability.

---

# 18. Limitations

1. Service provider data is mock data.
2. Booking data is stored only in localStorage.
3. There is no real backend booking database.
4. There is no payment gateway.
5. There is no real-time provider tracking.
6. There is no provider dashboard.
7. There is no admin dashboard.
8. There is no real notification system.
9. Login depends on an external API.

---

# 19. Future Enhancements

Future enhancements can include:

1. Backend database for services.
2. Backend database for bookings.
3. JWT-based authentication validation.
4. User dashboard.
5. Service provider dashboard.
6. Admin dashboard.
7. Online payment integration.
8. Google Maps integration.
9. Location-based search.
10. Live provider tracking.
11. Real-time booking status updates.
12. Ratings and reviews submission.
13. Notification system.
14. Chat between user and provider.
15. Invoice generation.

---

# 20. Conclusion

The Fixly project demonstrates the development of a responsive and interactive frontend web application using React. It solves a practical problem by providing a platform where users can find and book local service providers.

The project includes important frontend features such as authentication, route protection, service listing, filtering, sorting, dynamic details page, booking form, validation, localStorage, and booking history. It also demonstrates modular component-based development using React.

Although the current version uses mock data and localStorage, it provides a strong foundation for future full-stack development. The project is suitable for academic submission and portfolio presentation because it connects real-world problem solving with modern frontend development concepts.

---

# 21. Bibliography

1. React Documentation. https://react.dev/
2. Vite Documentation. https://vitejs.dev/
3. React Router Documentation. https://reactrouter.com/
4. MDN Web Docs - JavaScript. https://developer.mozilla.org/en-US/docs/Web/JavaScript
5. MDN Web Docs - Fetch API. https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
6. MDN Web Docs - localStorage. https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
7. MDN Web Docs - CSS. https://developer.mozilla.org/en-US/docs/Web/CSS

