# A

# Project report on

# Fixly - Local Service Finder

Submitted in fulfilment of the laboratory project requirement

in

### Department of Computer Science and Engineering

by

### Student Name: ____________________

### Roll No: ____________________

Department of Computer Science and Engineering

### AURORA HIGHER EDUCATION AND RESEARCH ACADEMY

### (Deemed to be University)

Bhongir, Yadadri-508116 (2025-26)

---

# CERTIFICATE

This is to certify that the project report entitled "Fixly - Local Service Finder" has been submitted by ____________________ holding roll no ____________________ in fulfilment for laboratory project in Computer Science and Engineering. This report is a record of bonafide work carried out under the guidance and supervision of the concerned faculty.

The project has been developed using React.js and related frontend technologies. It focuses on designing a responsive local service finder application where users can register, login, browse local professionals, view service details, and book appointments through a simple web interface.

Date: 18-05-2026

Mr. ____________________

Bhongir

Department of Computer Science and Engineering

---

# CERTIFICATE

This is to certify that the project report entitled "Fixly - Local Service Finder" has been submitted by ____________________ holding roll no ____________________ in fulfilment for laboratory project in Computer Science and Engineering. The project work presented in this report is a record of work carried out for the development of a React-based local service booking web application.

The project demonstrates the use of React components, React Router DOM, authentication flow, protected routes, service listing, provider details, booking form validation, localStorage persistence, and responsive user interface design.

Dr. ____________________

Date: 18-05-2026

Head of the Department

Bhongir

Department of Computer Science and Engineering

School of Engineering

---

### Acknowledgement

I profoundly express my deep sense of gratitude and respect towards my guide, ____________________, Department of Computer Science and Engineering, School of Engineering, Aurora Higher Education and Research Academy, Bhongir, for excellent guidance right from the selection of the project and for valuable suggestions throughout the project work.

I am thankful to the Department of Computer Science and Engineering for providing support and encouragement during the completion of this project. The guidance received during project planning, development, testing, and documentation helped in completing the project successfully.

I am also thankful to the university management, faculty members, and friends for their support, cooperation, and encouragement. I acknowledge the official documentation of React.js, Vite, React Router DOM, and the research papers used for preparing the literature survey of this project.

---

# ABSTRACT

The Fixly - Local Service Finder web application is a modern and responsive web-based platform designed to simplify the process of finding and booking local service providers. In today's digital era, users prefer online systems because they provide convenience, save time, and improve accessibility. Local services such as electricians, plumbers, tutors, mechanics, cleaners, AC repair technicians, gardeners, painters, home care workers, and fitness trainers are required in daily life. However, users often face difficulty in finding reliable providers through offline contacts, phone calls, or local advertisements. The main objective of this project is to create an interactive and user-friendly application where users can browse services, explore categories, compare provider details, and book appointments efficiently.

The application is developed using React.js, a popular JavaScript library used for building dynamic and fast user interfaces. React's component-based architecture is used to divide the application into reusable components such as Navbar, Footer, ServiceCard, CategoryCard, Button, PrivateRoute, PublicRoute, and ScrollToTop. This structure improves code reusability, scalability, and maintainability. React Router DOM is implemented to provide smooth navigation between different pages including Login, Register, Home, Services, Service Details, Booking, My Bookings, and Not Found pages without refreshing the browser. AuthContext is used for global authentication state management, while localStorage is used to store login tokens and booking information.

One of the important features of the project is the service booking system, where users can select a provider, enter booking details, choose a date and time slot, and save the appointment details. The application also includes category-based filtering and sorting, which helps users easily browse local service providers based on rating, price, and experience. The service detail page provides complete provider information such as category, rating, reviews, experience, price per hour, success rate, tags, description, and contact details. The responsive layout ensures compatibility across desktops, tablets, and mobile phones, improving the accessibility of the application.

This project helps in understanding important frontend development concepts such as component-based architecture, state management, routing, event handling, conditional rendering, controlled forms, route parameters, protected routes, API integration, and responsive web design. It serves as a strong foundation for building advanced full-stack applications in the future. Although the current version mainly focuses on frontend functionality, the project can be further enhanced by integrating backend technologies, databases, payment gateways, provider dashboards, review systems, notifications, and real-time booking status tracking. Overall, Fixly successfully demonstrates the use of React.js for developing efficient, scalable, and user-friendly web applications while improving practical knowledge of modern web development technologies.

---

# Table of contents

| S. No. | Title | Page No. |
|---|---|---|
| 1. | Introduction | 7 - 8 |
| 2. | Literature Review | 9 - 19 |
| 3. | Methodology | 20 - 22 |
| 4. | Implementation | 23 - 31 |
| 5. | Results | 32 - 35 |
| 6. | Discussion | 36 |
| 7. | Conclusion | 37 - 38 |
| 8. | References | 39 |

---

# INTRODUCTION

The Fixly - Local Service Finder web application is a modern and responsive web-based platform developed to simplify and improve the local service booking experience. In recent years, the rapid growth of internet services and digital technology has transformed the way people access daily services. Customers now prefer online service platforms because they provide convenience, save time, and offer easy access to different service categories from one place. Traditional service searching methods often involve phone calls, personal references, local advertisements, and manual communication, whereas online service applications provide a faster, more efficient, and user-friendly solution.

The application is developed using React.js, which is one of the most widely used JavaScript libraries for building dynamic and interactive user interfaces. React.js provides a component-based architecture that allows the application to be divided into smaller reusable components, improving code maintainability, scalability, and efficiency. In this project, multiple reusable components such as Navbar, Footer, ServiceCard, CategoryCard, Button, PrivateRoute, and PublicRoute are created to ensure a structured and modular development approach. The use of reusable components helps reduce repetitive code and makes the application easier to manage and upgrade in the future.

One of the important functionalities implemented in this project is the authentication and protected routing system. The application allows users to register and login using API-based authentication. After successful login, the authentication token is stored in localStorage and global login state is managed using AuthContext. PrivateRoute components are used to restrict access to important pages such as Home, Services, Service Details, Booking, and My Bookings. PublicRoute components are used to prevent logged-in users from returning unnecessarily to Login and Register pages.

The user interface of the application is designed using HTML5, CSS3, JavaScript, React.js, and Vite with a focus on responsiveness and modern UI/UX principles. The layout is optimized to work effectively on desktops, tablets, and mobile devices, ensuring better accessibility and usability for users across different platforms. Attractive styling, smooth navigation, organized content display, filtering options, sorting options, provider details, and interactive forms enhance the overall visual appearance and user engagement of the application.

This project serves as an example of modern frontend web development and demonstrates the practical implementation of technologies such as React.js, JavaScript, React Router DOM, Vite, CSS, API integration, and browser localStorage. It helps in understanding important concepts like component-based architecture, state management, event handling, conditional rendering, route parameters, controlled forms, protected routing, and responsive design. Although the current version mainly focuses on frontend functionality, the project can be further enhanced by integrating backend technologies, databases, payment gateways, provider dashboards, real-time notifications, and review systems.

In addition to providing essential service discovery functionalities, the application is designed to deliver a seamless and engaging user experience through efficient performance and intuitive navigation. The homepage is structured in a way that allows users to understand the platform and move quickly to service categories. The Services page allows users to browse service providers, filter them based on category, and sort them according to rating, price, or experience. Each provider is displayed with important details that help users make better decisions before booking.

From an educational perspective, this project provides valuable practical exposure to frontend web development technologies and software design principles. It helps in developing skills related to React.js development, component creation, routing, authentication state management, form handling, data rendering, and responsive UI design. The project also demonstrates the importance of structured coding practices and modular development in creating scalable applications. The experience gained through developing this application can be applied in building more advanced full-stack projects and real-world commercial applications in the future.

Furthermore, the project has strong potential for future enhancements and scalability. Backend technologies such as Node.js and Express.js can be integrated to manage server-side operations, while databases like MongoDB or MySQL can be used for storing user, provider, and booking information. Features such as secure authentication, online payment integration, provider verification, customer reviews, live appointment tracking, push notifications, and admin dashboards can also be added to improve the overall functionality of the platform. These future improvements would transform the application into a complete real-world local service marketplace.

---

# LITERATURE REVIEW

The rapid development of internet technologies, mobile applications, and digital services has transformed the way users search for daily services. Online service platforms and home service applications have become increasingly popular because they provide convenience, reduce manual effort, and improve customer accessibility. Users can now search for service providers, compare details, view ratings, and book appointments through digital platforms without depending only on offline references. Researchers have studied different aspects of online service systems, including customer behavior, trust, service quality, user satisfaction, application usability, platform reliability, and digital transformation. The following literature survey presents an overview of research works related to online home service applications and service booking platforms, which provide a strong foundation for the development of the proposed Fixly application.

Chauhan et al. (2023) examined consumers' behavioral intentions towards online home service applications. Their research focused on how users adopt and continue using home service applications on mobile phones. The study used consumer-perceived value, trust transfer theory, and commitment-trust theory to identify important factors influencing sharing intention and repurchase intention. The research found that utilitarian value and social value influence trust in home service applications, and trust affects repurchase intention, commitment, and sharing intention. This study is directly related to Fixly because the project aims to provide useful service information, category browsing, provider details, and booking features that improve user trust and convenience.

Mehrwald, Willy, and Binder (2020) conducted an exploratory study on online platforms and personal services. Their study analyzed trust-building measures used by online platforms in the personal service domain. The research explained that personal services require a higher level of trust because users often allow unknown service providers to enter their personal or household space. The authors identified different trust-building measures such as reputation systems, profile details, verification methods, photos, and platform information. This research supports the design of Fixly, where provider names, ratings, reviews, experience, price, success rate, service tags, and profile images are displayed to help users make confident decisions.

K et al. (2023) developed an online service booking platform with payment integration for home services such as plumbing and electrical work. Their work focused on creating a user-friendly system that allows users to book services and make payments online. The study emphasized better user experience, mobile and desktop compatibility, and convenient access to home services. Fixly follows a similar service booking concept, but the current version focuses mainly on frontend functionality such as service browsing, provider details, booking validation, authentication, and booking history.

Ighomereho et al. (2022) studied the shift from traditional service quality to e-service quality. Their research proposed important e-service quality dimensions such as website appearance, ease of use, reliability, security, personalization, fulfilment, and responsiveness. The study concluded that reliability, security, fulfilment, ease of use, and responsiveness strongly influence overall e-service quality. These findings are relevant to Fixly because the application focuses on a clean interface, protected routing, clear provider information, responsive layout, form validation, and smooth navigation to improve perceived service quality.

Athey, Castillo, and Chandar (2024) studied service quality on online platforms using evidence from Uber. Their research discussed how online marketplaces use ratings, incentives, behavioral feedback, and quality control mechanisms to manage a flexible pool of service providers. The study showed that ratings and feedback mechanisms can improve provider behavior and maintain platform service quality. In Fixly, provider ratings, reviews, success rates, and booking status act as basic quality indicators. Future versions of Fixly can extend this idea by adding verified reviews, provider performance analytics, and automated quality monitoring.

Gu and Zhu (2021) examined trust and disintermediation in an online freelance marketplace. Their research showed that trust improves the chance of high-quality providers being hired, but very high trust can sometimes encourage users and providers to bypass the platform. This finding is useful for service marketplace design because the platform must continuously provide value beyond initial matching. Fixly can provide this value through booking records, secure payments, reminders, customer support, dispute handling, and review systems in future versions.

Research on online marketplace trust highlights that trust is one of the most important factors in digital transactions. Users must trust the platform, the service provider, and the transaction process before booking a service. In home service applications, this trust requirement is stronger because service providers may visit a user's home and perform personal or household tasks. Therefore, visible provider details, transparent prices, service descriptions, ratings, reviews, and authentication become necessary interface elements. Fixly uses these elements to reduce uncertainty and improve user confidence.

Studies related to online service booking systems show that digital booking platforms reduce manual effort and improve communication between customers and providers. Traditional booking often requires repeated phone calls, unclear availability, and no proper booking record. A structured web-based form can capture user details, date, time slot, address, and problem description in one place. Fixly implements this through the Booking page, where users enter appointment details and the system stores booking records in localStorage.

Research on user satisfaction in digital platforms explains that ease of use and usefulness strongly influence adoption. If users can quickly find what they need and complete tasks without confusion, they are more likely to continue using the system. In Fixly, the services are displayed category-wise, and users can filter providers by category. Sorting by rating, price, and experience improves comparison and supports faster decision-making. This feature reflects the usability principles discussed in e-service quality research.

Single-page applications have become popular in modern web development because they provide smooth navigation without full-page reloads. React.js supports single-page applications by rendering components dynamically based on state and route changes. React Router DOM allows developers to create multiple views inside one application. Fixly uses React Router DOM for Login, Register, Home, Services, Service Details, Booking, My Bookings, and Not Found pages. This improves the user experience by making navigation faster and more application-like.

React's component-based architecture is widely used because it improves reusability and maintainability. In a service marketplace application, many interface elements are repeated, such as service cards, category cards, buttons, navigation bars, and footers. By converting these repeated elements into reusable components, developers can maintain consistent design and reduce code duplication. Fixly follows this approach through components such as ServiceCard, CategoryCard, Button, Navbar, Footer, PrivateRoute, PublicRoute, and ScrollToTop.

Authentication is another important area in web application development. Online platforms usually protect user-specific information and restrict sensitive actions to authenticated users. Fixly implements login and registration using API service functions. AuthContext manages global login status, while localStorage stores the authentication token. PrivateRoute ensures that only logged-in users can access services, provider details, booking pages, and booking history. This structure follows common frontend authentication patterns in React applications.

Responsive web design is also an important requirement for modern applications. Users may search for service providers from desktops, laptops, tablets, or mobile phones. If the layout does not adapt properly, users may face difficulty reading information or submitting forms. Fixly uses CSS files and a design-system stylesheet to create responsive layouts for navigation, cards, forms, and pages. This improves accessibility and usability across different device sizes.

The literature also indicates that provider transparency is important in service platforms. Users prefer platforms that show detailed information about who will provide the service, how experienced the provider is, how much the service costs, and what other users think about the provider. Fixly addresses this by displaying provider name, experience, price per hour, rating, reviews, service tags, phone number, success rate, profile image, and service description.

Studies on platform-based service quality suggest that rating systems and review mechanisms can help maintain provider performance. Although Fixly currently uses mock rating and review data, the design supports future integration of real customer feedback. A full-stack version can allow customers to submit reviews after service completion, and the platform can use this feedback to rank providers and improve quality control.

Research related to digital transformation shows that many traditional service activities are moving to online platforms. Activities that were previously handled through offline communication are now supported by web and mobile applications. Fixly is aligned with this transformation because it converts offline local service searching and appointment booking into a digital workflow.

The literature review clearly shows that successful online service platforms require trust, usability, transparent provider information, service quality indicators, responsive design, secure authentication, and simple booking workflows. Fixly applies these findings through its frontend design and creates a foundation for future full-stack development. The current application can be extended with real databases, secure payment systems, provider verification, reviews, admin management, notifications, and real-time appointment tracking.

From the above literature review, it can be concluded that online service booking systems have become an essential part of modern digital service delivery. Research works related to home service applications, trust-building measures, e-service quality, and online platform quality provide useful guidance for designing a local service finder application. The proposed Fixly project applies these ideas by developing a responsive React-based platform that supports service discovery, provider comparison, authentication, and appointment booking.

---

# METHODOLOGY

The methodology for the Fixly - Local Service Finder application follows a structured and systematic approach to ensure proper planning, development, testing, and documentation. The project was divided into different phases so that each part of the application could be designed and implemented clearly.

Phase One: Planning and Analysis

The Planning and Analysis phase is the initial stage of the project where the objectives, requirements, and scope of the Fixly application were identified. The main problem selected for the project was the difficulty users face when searching for reliable local service providers. The project scope was defined to include user authentication, service browsing, category filtering, provider details, booking form, booking history, and responsive design.

The technologies required for the project were also selected in this stage. React.js was chosen as the frontend library because of its component-based architecture and efficient rendering. Vite was selected as the development tool because it provides fast project setup and development server support. React Router DOM was selected for routing, while CSS was used for styling and responsive design.

Phase Two: Design

The Design phase focuses on creating the structure, layout, and visual appearance of the application. The user interface was planned to provide a simple and clean experience for users. The application was divided into pages such as Login, Register, Home, Services, Service Details, Booking, My Bookings, and Not Found. Reusable components such as Navbar, Footer, ServiceCard, CategoryCard, Button, PrivateRoute, and PublicRoute were planned to maintain consistency.

Navigation flow between pages was designed using React Router DOM. Responsive web design principles were considered so that the application could work properly on desktops, tablets, and mobile devices. The service data structure was planned with fields such as id, name, provider name, category, rating, reviews, experience, price, description, phone number, tags, success rate, background image, and profile image.

Phase Three: Development

The Development phase involves the actual implementation of the Fixly application using React.js, JavaScript, CSS, Vite, and React Router DOM. During this phase, the project folder structure was created and different pages and components were implemented. The service data was stored in a separate services.js file and imported wherever required.

React Router DOM was implemented to provide smooth navigation between different pages without reloading the browser. AuthContext was used to manage login state globally. PrivateRoute and PublicRoute were implemented to control page access based on authentication status. The booking form was developed using controlled inputs and validation logic.

Phase Four: Testing

The Testing phase was conducted to ensure that the application functions correctly and efficiently without errors. Functional testing was performed on login, registration, service listing, filtering, sorting, service details, booking form, booking validation, booking storage, and booking cancellation. Route protection was tested by accessing private pages before and after login.

Responsive testing was also performed to ensure the application works properly on desktops, tablets, and mobile devices. User interface testing helped check whether forms, cards, buttons, navigation links, and content sections were displayed correctly. LocalStorage testing was performed to confirm that authentication tokens and booking records were saved and retrieved properly.

Phase Five: Deployment and Documentation

The Deployment and Documentation phase is the final stage of the project where the application was prepared for execution and presentation. The project can be executed using npm install and npm run dev. Documentation, report content, references, folder structure, and code snippets were prepared for submission. The final report explains the project objectives, literature survey, methodology, implementation, results, discussion, conclusion, references, and project structure.

---

# IMPLEMENTATION

The implementation of the Fixly - Local Service Finder application was carried out using modern frontend development technologies and component-based architecture. The application was developed with React.js, Vite, JavaScript, CSS, React Router DOM, API service functions, AuthContext, and browser localStorage.

Project Setup and Technology Stack

The project was initialized using Vite because it provides fast server startup and hot module replacement during development. React.js was used as the main frontend library for building dynamic user interfaces. JavaScript was used for logic implementation, CSS was used for styling, and React Router DOM was used for navigation between pages.

The application follows a component-based architecture where each functionality is divided into independent and reusable components. This approach improves maintainability and scalability. The main dependencies used in the project include React, React DOM, React Router DOM, Vite, ESLint, and related development packages.

Application Routing Implementation

The root application component App.jsx defines all major routes of the project. Public routes include Login and Register pages. Private routes include Home, Services, Service Details, Booking, and My Bookings pages. The Not Found page handles invalid routes. Navbar and Footer are placed in the main application shell so that they appear across the application.

Authentication Implementation

AuthContext manages user authentication state across the application. When the application loads, AuthContext checks whether a token exists in localStorage. If a token is present, the user is considered logged in. The login function saves the token and updates the login state. The logout function removes the token and resets the login state. This avoids repeated localStorage checks in every component and provides a clean authentication workflow.

Public and Private Route Implementation

PrivateRoute is used to protect pages that should be accessed only by logged-in users. If a user is not logged in, the PrivateRoute redirects the user to the login page. PublicRoute is used for Login and Register pages. If the user is already logged in, PublicRoute redirects the user to the home page. This improves application flow and prevents unauthorized access.

Service Data Implementation

The service provider data is stored in src/data/services.js. Each service object contains details such as id, name, providerName, gender, category, rating, reviews, experience, pricePerHour, description, phone, tags, successRate, backgroundImage, and profileImage. This mock data is used to display providers in the Services page and Service Details page.

Services Page Implementation

The Services page displays all service providers using reusable ServiceCard components. Users can filter providers by category and sort providers by rating, price, or experience. This improves the usability of the platform because users can quickly find providers based on their needs. The page uses array methods such as filter, sort, and map to process and display data dynamically.

Service Details Implementation

The Service Details page uses route parameters to identify the selected provider. The id from the URL is used to find the matching service object from the services list. Complete provider information is displayed on this page, including service category, provider name, rating, reviews, experience, price, success rate, phone number, tags, description, profile image, and booking option. This page helps users review service information before booking.

Booking Implementation

The Booking page handles appointment booking for a selected service provider. It displays a service summary and a booking form. The form collects customer name, phone number, address, booking date, time slot, and problem description. The form is implemented using controlled inputs, where React state stores the value of every field.

Booking Validation Implementation

The booking form validates required fields before submission. It prevents users from selecting past dates and invalid time slots. If the selected date is today, the application checks whether the selected time slot has already passed. If a slot is invalid, an error message is displayed and the booking is not submitted. This improves reliability and prevents incorrect booking data.

Storage Implementation

The application uses localStorage to store authentication tokens and booking details. A storage utility file provides functions for getting and saving booking records. When a valid booking is submitted, the application creates a booking object with a unique id, service id, service name, provider name, customer information, status, and booking time. The new booking is saved with existing bookings in localStorage.

My Bookings Implementation

The My Bookings page displays booking records stored in localStorage. Users can view details of their appointments, including service name, provider name, date, time slot, address, and status. Pending bookings can be cancelled by updating or removing booking data. This page demonstrates frontend data persistence and booking history management.

User Interface Implementation

The user interface is implemented using separate CSS files for pages and components. The design-system stylesheet defines common visual styles. The application uses clean layouts, cards, buttons, responsive grids, and organized spacing. The interface is designed to be simple and easy to use so that users can browse, compare, and book services without confusion.

Responsive Design Implementation

Responsive design was implemented to make the application usable across different device sizes. Service cards, category sections, forms, navigation links, and page layouts adjust according to the screen width. This ensures that users can access the application from desktops, tablets, and mobile phones.

---

# RESULTS

The Fixly - Local Service Finder application was successfully implemented as a responsive React-based local service booking platform. The final application supports user registration, login, protected navigation, service browsing, provider comparison, service detail viewing, appointment booking, booking history, and booking cancellation.

The authentication module worked successfully. Users can access Login and Register pages when they are not logged in. After successful login, the token is stored in localStorage and the global authentication state is updated through AuthContext. Private pages become accessible only after login, which confirms the correct working of protected routes.

The service listing module displayed multiple service providers across categories such as Electrician, Plumber, Tutor, Mechanic, Cleaning, AC Repair, Gardening, Home Care, Painter, and Fitness. Users were able to filter providers based on category and sort providers based on rating, price, and experience. This result shows that the application provides a useful and organized service browsing experience.

The service detail module worked successfully by displaying complete information about selected providers. The route parameter was used to identify the selected provider and render the related data. This helped users view important provider details before booking an appointment.

The booking module was implemented successfully. The booking form collected customer name, phone number, address, date, time slot, and problem description. Validation prevented incomplete submissions, past dates, and invalid same-day time slots. After successful submission, booking data was stored in localStorage and displayed on the My Bookings page.

The My Bookings page successfully displayed saved booking records. Users were able to view booking history and cancel pending bookings. This demonstrated frontend data persistence using localStorage. Although the system does not use a backend database in the current version, localStorage is sufficient for demonstrating booking workflow in a frontend project.

Performance and responsive testing confirmed that the application functioned efficiently across different pages. React.js dynamic rendering ensured smooth component updates without full-page reloads. The modular project structure improved code maintainability and scalability by separating pages, components, context, data, services, utilities, and styles.

The project also achieved important educational and technical outcomes. It provided practical experience in frontend web development using React.js, Vite, React Router DOM, JavaScript, CSS, AuthContext, API integration, controlled forms, and localStorage. Concepts such as component-based architecture, routing, state management, conditional rendering, validation, and responsive UI design were implemented successfully.

Although the current version primarily focuses on frontend implementation and simulated storage through localStorage, the project provides a strong foundation for future full-stack development. The system can be enhanced by integrating backend technologies such as Node.js and Express.js along with MongoDB or MySQL databases for permanent storage and real-time synchronization.

Overall, Fixly was successfully implemented as a complete and responsive local service finder platform. The project effectively achieved its objectives by combining modern frontend technologies, modular architecture, responsive design, and interactive functionalities into a scalable web application.

---

# DISCUSSION

The development and implementation of the Fixly - Local Service Finder application demonstrated the practical use of modern frontend technologies in creating a responsive and interactive local service booking platform. The project successfully combined React.js, React Router DOM, AuthContext, JavaScript, CSS, API service functions, and localStorage to create a complete frontend application capable of handling service browsing, provider details, authentication, booking, and booking history.

One of the major strengths of the project is the use of React.js for building reusable components and managing dynamic user interfaces efficiently. The component-based structure helped organize the application into smaller independent modules such as Navbar, Footer, ServiceCard, CategoryCard, Login, Register, Services, Service Details, Booking, and My Bookings. This improved code maintainability and scalability while reducing code duplication.

The implementation of AuthContext played a significant role in managing global authentication state efficiently. The context simplified data sharing across components and allowed PrivateRoute and PublicRoute to work properly. LocalStorage integration further improved usability by preserving user session tokens and booking information even after browser refreshes.

The project also highlighted the importance of responsive web design in modern application development. The application adapted across desktops, tablets, and mobile devices, ensuring accessibility for users on different devices. Organized content display, responsive cards, and clean forms improved the overall user experience.

Despite its successful implementation, the project also revealed certain limitations. Since the application currently relies on mock service data and localStorage, the system does not support real-time database synchronization or multi-user connectivity. Backend integration, secure authentication systems, payment gateway functionality, provider dashboards, verified reviews, and notification systems are not implemented in the current version.

Overall, Fixly successfully demonstrated the use of modern frontend technologies in developing a responsive, scalable, and user-friendly web platform. The project provided valuable practical experience in React.js development, state management, routing, form validation, responsive design, and modular application architecture while establishing a strong foundation for future full-stack web application development.

---

# CONCLUSION

The Fixly - Local Service Finder application was successfully designed and implemented as a modern, responsive, and interactive local service booking platform using React.js and related frontend technologies. The project achieved its primary objective of providing users with an efficient system for browsing local service providers, viewing provider details, filtering services, sorting providers, booking appointments, and managing booking history through a user-friendly interface.

The application demonstrated the practical implementation of component-based architecture, state management, protected routing, responsive web design, API integration, controlled forms, localStorage persistence, and modular frontend development practices. Technologies such as React.js, Vite, React Router DOM, JavaScript, CSS, AuthContext, and localStorage were effectively integrated to build a scalable and well-structured application.

One of the major achievements of the project was the successful implementation of authentication and protected routing. Users can register, login, access private pages, browse services, view provider details, and book appointments. Features such as category filtering, sorting, service detail pages, booking validation, booking history, and cancellation improved the overall functionality and user experience of the platform.

Although the current implementation mainly focuses on frontend functionality with localStorage-based data management, the project provides a strong foundation for future full-stack development. In the future, the application can be enhanced by integrating backend technologies such as Node.js and Express.js along with databases like MongoDB or MySQL for permanent data storage and real-time synchronization. Additional features such as secure authentication, online payment gateways, cloud deployment, provider verification, customer reviews, live service tracking, push notifications, admin dashboards, and analytics can also be implemented to improve the platform further.

Overall, Fixly successfully demonstrated the practical use of modern web technologies in developing a complete local service booking platform while improving technical knowledge, frontend development skills, problem-solving abilities, and understanding of real-world application development. The project serves as a valuable learning experience as well as a scalable foundation for future advanced service marketplace systems.

---

# REFERENCES

[1] Chauhan, Sumedha, et al. "Examining Consumers' Behavioral Intentions Towards Online Home Services Applications." Journal of Global Information Management, 31.1 (2023).

[2] Mehrwald, Pascal, Marlene Sophia Willy, and Kim-Kelly Binder. "Online-Platforms and Personal Services: an Exploratory Study About Trust Building Measures." HMD Praxis der Wirtschaftsinformatik 57 (2020): 799-815.

[3] K, Shashikala, Ankur Singh, Gulshan Kumar, Vrindwan Kumar, and Mahesh T R. "Online Service Booking Platform with Payment Integration." International Journal of Information Technology, Research and Applications 2.2 (2023): 41-46.

[4] Ighomereho, Salome O., Afolabi A. Ojo, Samuel O. Omoyele, and Samuel O. Olabode. "From Service Quality to E-Service Quality: Measurement, Dimensions and Model." Journal of Management Information and Decision Sciences 25 (2022): 1-15.

[5] Athey, Susan, Juan Camilo Castillo, and Bharat Chandar. "Service Quality on Online Platforms: Empirical Evidence about Driving Quality at Uber." NBER Working Paper No. 33087 (2024).

[6] Gu, Grace, and Feng Zhu. "Trust and Disintermediation: Evidence from an Online Freelance Marketplace." Management Science 67.2 (2021): 794-807.

[7] React Documentation. "React: The library for web and native user interfaces." Meta Open Source.

[8] React Router Documentation. "Declarative routing for React." Remix Software.

[9] Vite Documentation. "Next Generation Frontend Tooling." Vite Team.

---

# Project Folder Structure

```text
Fixly/
|
|-- public/
|   |-- favicon.svg
|
|-- src/
|   |-- App.jsx
|   |-- main.jsx
|   |
|   |-- components/
|   |   |-- Button/
|   |   |-- CategoryCard/
|   |   |-- Layout/
|   |   |-- ServiceCard/
|   |   |-- common/
|   |   |-- ui/
|   |
|   |-- context/
|   |   |-- AuthContext.jsx
|   |
|   |-- data/
|   |   |-- services.js
|   |
|   |-- pages/
|   |   |-- Home/
|   |   |-- Login/
|   |   |-- Register/
|   |   |-- Services/
|   |   |-- ServiceDetails/
|   |   |-- Booking/
|   |   |-- Bookings/
|   |   |-- NotFound/
|   |
|   |-- services/
|   |   |-- api.js
|   |
|   |-- styles/
|   |   |-- design-system.css
|   |   |-- index.css
|   |
|   |-- utils/
|       |-- localStorage.js
|       |-- storage.js
|
|-- index.html
|-- package.json
|-- package-lock.json
|-- vite.config.js
|-- eslint.config.js
|-- README.md
```

---

# App.jsx

```jsx
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Layout/Navbar/Navbar.jsx";
import Footer from "./components/Layout/Footer/Footer.jsx";
import HomePage from "./pages/Home/Home.jsx";
import ServicesPage from "./pages/Services/Services.jsx";
import ServiceDetailsPage from "./pages/ServiceDetails/ServiceDetails.jsx";
import BookingPage from "./pages/Booking/Booking.jsx";
import BookingsPage from "./pages/Bookings/Bookings.jsx";
import LoginPage from "./pages/Login/Login.jsx";
import RegisterPage from "./pages/Register/Register.jsx";
import NotFoundPage from "./pages/NotFound/NotFound.jsx";
import PrivateRoute from "./components/common/PrivateRoute.jsx";
import PublicRoute from "./components/common/PublicRoute.jsx";

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<PublicRoute><LoginPage /></PublicRoute>} />
          <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
          <Route path="/register" element={<PublicRoute><RegisterPage /></PublicRoute>} />
          <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute>} />
          <Route path="/services" element={<PrivateRoute><ServicesPage /></PrivateRoute>} />
          <Route path="/service/:id" element={<PrivateRoute><ServiceDetailsPage /></PrivateRoute>} />
          <Route path="/booking/:id" element={<PrivateRoute><BookingPage /></PrivateRoute>} />
          <Route path="/bookings" element={<PrivateRoute><BookingsPage /></PrivateRoute>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
```

# AuthContext.jsx

```jsx
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
    setIsLoading(false);
  }, []);

  function login(token) {
    localStorage.setItem("token", token);
    setIsLoggedIn(true);
  }

  function logout() {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
```

# Booking Object

```jsx
const newBooking = {
  id: `${Date.now()}-${service.id}`,
  serviceId: service.id,
  serviceName: service.name,
  providerName: service.providerName,
  ...formData,
  status: "Pending",
  bookingTime: new Date().toISOString()
};
```
