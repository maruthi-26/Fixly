# Fixly - Abstract and Workflow Case Study

## Abstract

Frontend web development plays an important role in building modern digital platforms that help users access services quickly, clearly, and efficiently. The proposed project, **Fixly - Local Service Finder**, is planned as a React-based frontend web application that will help users find and book nearby local service providers such as electricians, plumbers, tutors, mechanics, cleaners, AC repair technicians, gardeners, painters, home care workers, and fitness trainers.

The main objective of this project is to create a user-friendly local service discovery platform where users can browse verified professionals, filter them by service category, view detailed provider information, and select a suitable date and time slot for booking. The project is inspired by real-world service platforms such as Urban Company and other local service marketplaces, but it is planned as a frontend-focused academic and portfolio project using React.

The core problem this project aims to address is the difficulty users face when searching for reliable local service providers. In many situations, users depend on offline contacts, phone calls, local advertisements, or uncertain references. This process can be time-consuming and may not provide enough information about the provider's experience, rating, price, or availability. Fixly is planned to solve this problem by presenting local professionals in an organized digital interface with important details such as category, provider name, rating, reviews, experience, price per hour, contact information, service tags, and success rate.

The project is planned to be developed using **Vite, React JSX, React Router DOM, JavaScript, and CSS**. The application will follow a single-page application structure where React Router will handle page navigation without loading separate HTML files. The planned pages include Login, Register, Home, Services, Service Details, and Not Found. The first screen will allow users to login, while the home page will introduce the platform, show trust-focused sections, service categories, featured providers, and a call-to-action for exploring services.

The system is planned to use mock service data in the initial version. This data will include multiple service providers from different categories. The Services page will allow users to filter providers by category and sort results based on rating, price, or experience. The Service Details page will display full provider information and include a booking interface where users can choose a date and available time slot. The booking UI will also prevent users from selecting past time slots for the current date. Signup and login are planned to connect with the provided authentication API, and successful login will store the token in localStorage.

This project is helpful from both a user perspective and a frontend development learning perspective. From the user perspective, it will provide an easy way to discover service providers and understand their quality before booking. From the learning perspective, it will help practice React concepts such as components, props, state, event handling, conditional rendering, list rendering, routing, path parameters, URL search parameters, forms, API calls, localStorage, and responsive UI design.

The project is planned as a frontend-first application. Advanced features such as backend service storage, real payment integration, real-time tracking, provider dashboard, admin dashboard, booking history database, and notification system will not be included in the first version. These features can be added later as future enhancements after completing the core frontend workflow.

Overall, Fixly is planned as a practical React frontend project that connects a real-world local service problem with modern web development concepts. The project will begin with a simple but useful service discovery and booking interface and can later be expanded into a full-stack local service marketplace.

## 1. Introduction

Local services are required in daily life for repair, maintenance, education, health care, cleaning, and personal support. However, finding a trusted service provider is often difficult because users may not know the provider's quality, experience, price, or availability before contacting them.

The Fixly project is planned to provide a digital solution for this problem. It will allow users to browse service providers from one interface, filter professionals by category, view provider details, and select a date and time slot for booking. The application will be designed with a modern user interface and responsive layout so that it can be used on desktop, tablet, and mobile screens.

The project will mainly focus on frontend development. Instead of creating a production-level backend immediately, the first version will use mock data and frontend state handling to demonstrate the complete user experience.

## 2. Problem Statement

The main problem addressed by this project is the lack of a simple and organized frontend platform for finding local service providers.

Users commonly face the following issues:

1. Difficulty finding trusted local professionals.
2. Lack of clear information about provider rating, experience, and price.
3. No simple way to compare service providers.
4. No organized category-based browsing system.
5. No quick method to check availability or choose a time slot.
6. Poor user experience in offline service searching.

Fixly is planned to solve these issues by creating a responsive frontend application that gives users a clear service browsing and booking workflow.

## 3. Planned Features

The first version of Fixly is planned to include the following features:

1. Login page with API-based login.
2. Register page with API-based user registration.
3. Home page with hero section, trust highlights, categories, featured services, and call-to-action.
4. Category cards for service discovery.
5. Services listing page with category filtering.
6. Sorting options based on rating, price, and experience.
7. Result count display.
8. Service detail page using route parameters.
9. Provider profile section with rating, reviews, experience, and success rate.
10. Contact information section.
11. Recent reviews section.
12. Date selection for booking.
13. Time-slot selection for booking.
14. Prevention of past time-slot selection for the current date.
15. Booking confirmation message.
16. Not Found page for invalid routes.
17. Reusable components such as Navbar, Footer, ServiceCard, CategoryCard, Button, and AnimatedBlob.

## 4. Technologies Planned

### Vite

Vite will be used for creating and running the React application. It provides fast development startup and an efficient build process.

### React JSX

React JSX will be used to build the UI using reusable components. Components such as Navbar, Footer, ServiceCard, CategoryCard, HomePage, ServicesPage, and ServiceDetailsPage will help keep the code modular.

### React Router DOM

React Router DOM will be used for navigation between pages. It will support routes such as `/`, `/home`, `/services`, `/service/:id`, `/login`, and `/register`.

### JavaScript

JavaScript will be used for state handling, filtering, sorting, event handling, API requests, date handling, and booking logic.

### CSS

CSS will be used for page styling, responsive layouts, animations, cards, buttons, forms, and visual design.

### localStorage

localStorage will be used to store the login token after successful authentication.

### Fetch API

The Fetch API will be used to connect login and register forms with the provided authentication endpoints.

## 5. Planned Architecture

The project is planned as a client-side React single-page application. The application can be understood in three layers:

1. **Presentation Layer** - React components and CSS will manage the visual interface.
2. **Logic Layer** - React state, filtering, sorting, event handling, routing, and booking logic will manage the application behavior.
3. **Data Layer** - Mock service data, API responses, and localStorage will provide data for the application.

This separation will help make the application easier to understand, debug, and extend.

## 6. Planned Workflow of the Project

### 6.1 Login Flow

The user will first open the login page. The login form will collect email and password. When the form is submitted, the data will be sent to the login API using the Fetch API. If the login is successful, the received token will be stored in localStorage and the user will be navigated to the Home page.

### 6.2 Register Flow

New users will be able to open the Register page. The registration form will collect full name, email, and password. After submission, the details will be sent to the register API. If registration is successful, the user will be redirected to the Login page.

### 6.3 Home Page Flow

After login, the user will reach the Home page. The page will introduce Fixly as a local service finder platform. It will include a hero section, trust-based highlights, category cards, featured services, and call-to-action buttons. The purpose of this page will be to guide users toward exploring available services.

### 6.4 Category Browsing Flow

The Home page will display service categories such as Electrician, Plumber, Tutor, Mechanic, Cleaning, AC Repair, Gardening, Home Care, Painter, and Fitness. When users choose a category, they can move toward the Services page to view matching professionals.

### 6.5 Services Listing Flow

The Services page will display all available professionals from the mock service dataset. Users will be able to filter results by category using category pills. The page will also show how many professionals are found for the selected category.

### 6.6 Sorting Flow

The Services page will include sorting controls. Users will be able to sort service providers by:

1. Top rated
2. Price low to high
3. Price high to low
4. Most experienced

This will help users compare professionals according to their needs.

### 6.7 Service Details Flow

When the user selects a provider, the application will open a dynamic route such as `/service/:id`. The service ID will be read using `useParams`. The application will then find the matching provider from the service data and display detailed information.

### 6.8 Provider Information Flow

The Service Details page will show provider information such as provider name, category, company/service name, rating, number of reviews, years of experience, success rate, description, tags, phone number, and sample reviews.

### 6.9 Booking Date Flow

The user will be able to choose a booking date from the date input. The application will set the minimum date as the current date so that past dates cannot be selected.

### 6.10 Booking Time Slot Flow

The user will be able to choose a time slot from available slots between morning and night. If the selected date is the current date, the application will disable time slots that have already passed. This will improve the correctness of the booking flow.

### 6.11 Booking Confirmation Flow

After selecting both date and time, the user will be able to confirm the booking. The UI will show a booking confirmation message with the selected provider, date, time, and contact information. In the first version, this confirmation will be handled on the frontend.

### 6.12 Invalid Route Flow

If the user opens a route that does not exist, the Not Found page will be displayed. This will improve the user experience by avoiding blank pages.

## 7. Planned Implementation Strategy

### Phase 1: Project Setup

The project will be created using Vite and React. Required dependencies such as React Router DOM will be installed. The base folder structure will be created.

### Phase 2: Layout Components

The Navbar, Footer, Button, and background visual components will be created. These components will be reused across multiple pages.

### Phase 3: Mock Service Data

Mock service data will be prepared with provider details such as name, category, rating, reviews, experience, price per hour, description, phone number, tags, and success rate.

### Phase 4: Home Page

The Home page will be created with a hero section, trust explanation, category section, featured services, and final call-to-action section.

### Phase 5: Services Page

The Services page will be created to display all providers. Category filtering and sorting will be implemented using React state.

### Phase 6: Service Details Page

The Service Details page will be implemented using route parameters. It will display provider details and booking UI.

### Phase 7: Authentication Pages

Login and Register pages will be implemented using controlled forms. The forms will be connected to the provided authentication API using the Fetch API.

### Phase 8: Booking UI

Date selection, time-slot selection, disabled past slots, and frontend booking confirmation will be implemented.

### Phase 9: Responsive Design

CSS will be used to make the app responsive across desktop, tablet, and mobile devices.

### Phase 10: Testing and Refinement

The application will be tested for navigation, category filtering, sorting, service details display, login/register API calls, booking slot selection, and responsive behavior.

## 8. Problem-Solving Approach

The project problem is planned to be solved by breaking the application into smaller modules:

1. **Data Module** - Store and export service provider data.
2. **Routing Module** - Manage navigation and dynamic routes.
3. **Authentication Module** - Handle login and registration API calls.
4. **Listing Module** - Display and filter service providers.
5. **Sorting Module** - Sort providers by rating, price, and experience.
6. **Details Module** - Display full provider details using route parameters.
7. **Booking Module** - Manage date and time-slot selection.
8. **UI Module** - Provide reusable components and responsive styling.

This modular approach will make the project easier to maintain and explain.

## 9. Expected Benefits

The proposed Fixly project is expected to provide the following benefits:

1. It will help users discover local service providers easily.
2. It will provide clear provider information before booking.
3. It will demonstrate category filtering and sorting logic.
4. It will demonstrate dynamic route handling in React.
5. It will demonstrate API-based login and registration.
6. It will improve understanding of forms and controlled inputs.
7. It will improve frontend UI and responsive design skills.
8. It will become a strong React portfolio project.

## 10. Limitations of Version 1

The first version is planned with the following limitations:

1. Service data will be stored as mock data.
2. Booking confirmation will be handled on the frontend only.
3. There will be no real backend booking database.
4. There will be no online payment system.
5. There will be no admin dashboard.
6. There will be no service provider dashboard.
7. There will be no live location tracking.
8. There will be no real notification system.

These limitations are acceptable for the first version because the goal is to focus on frontend development and React fundamentals.

## 11. Future Scope

In future versions, Fixly can be extended with:

1. Backend API for service providers.
2. Real booking database.
3. JWT-based protected routes.
4. User dashboard with booking history.
5. Service provider dashboard.
6. Admin dashboard.
7. Online payment gateway.
8. Google Maps integration.
9. Live provider tracking.
10. Ratings and reviews submission.
11. Notification system.
12. Provider verification system.
13. Service availability calendar.
14. Search by location.
15. Chat between user and provider.

## Conclusion

Fixly is planned as a React-based local service finder project that will help users discover and book nearby service providers through a clean and responsive frontend interface. The project will focus on practical frontend concepts such as routing, reusable components, state handling, controlled forms, filtering, sorting, API calls, localStorage, and dynamic service detail pages.

The proposed system will start with a frontend-focused version using mock data and API-based authentication. Although some production-level features will be planned for later stages, the first version will provide a complete and understandable service discovery and booking workflow. Overall, Fixly will be a useful academic and portfolio project that connects real-world problem solving with frontend web development skills.

