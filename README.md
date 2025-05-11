# SuperSUB || One-stop Subscription Services

SuperSUB is a comprehensive subscription management platform designed to help students, researchers, and professionals manage their subscription services for engineering tools, academic resources, and more. With SuperSUB, users can explore, manage, and review their subscriptions in one centralized location.

## Features

- **Subscription Management**: View and manage your active subscription services.
- **Service Details**: Explore detailed information about each subscription, including features, benefits, and pricing.
- **User Reviews**: Submit and view reviews and ratings for subscription services.
- **Authentication**: Secure login and registration with email/password or Google authentication.
- **Profile Management**: Update your profile details, including name and photo.
- **Responsive Design**: Fully responsive UI for seamless use across devices.
- **Coming Soon Section**: Stay updated on upcoming features and services.
- **Trusted Partners**: View a list of trusted partners and collaborators.

---

## Table of Contents

1. [Getting Started](#getting-started)
2. [Project Structure](#project-structure)
3. [Technologies Used](#technologies-used)
4. [Features in Detail](#features-in-detail)

---

## Getting Started

Follow these steps to set up and run the project locally:

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Firebase account for backend services

### Installation

1. Install Dependencies:
   ```bash
   npm install
   ```
2. Set up Firebase:

    Create a Firebase project.
    Enable Authentication (Email/Password and Google).
    Add your Firebase configuration to a .env.local file (see Environment Variables).

3. Start the development server:
    ```bash
    npm run dev
    ```
4. Open the app in your browser at http://localhost:5173
---

## Project Structure

```
.
├── .firebase
├── public/
│ ├── myServices.json
│ ├── subscriptions.json
│ └── vite.svg
├── src/
│  ├── assets/
│  │   └── react.svg
│  ├── components/
│  │   ├── ComingSoon.jsx
│  │   ├── Footer.jsx
│  │   ├── MyServiceTool.jsx
│  │   ├── MyServiceToolDetails.jsx
│  │   ├── Navbar.jsx
│  │   ├── Navbar.css
│  │   ├── Partners.jsx
│  │   ├── SideMenu.jsx
│  │   ├── SubscriptionService.jsx
│  │   ├── SubscriptionServices.jsx
│  │   └── UserReview.jsx
│  ├── context/
│  ├── layouts/
│  │   ├── AuthLayout.jsx
│  │   └── HomeLayout.jsx
│  ├── pages/
│  │   ├── ErrorPage.jsx
│  │   ├── ForgotPassword.jsx
│  │   ├── Home.jsx
│  │   ├── Loader.jsx
│  │   ├── Login.jsx
│  │   ├── MyProfile.jsx
│  │   ├── MyServices.jsx
│  │   ├── Register.jsx
│  │   └── ServiceDetails.jsx
│  ├── providers/
│  │   ├── AuthProvider.jsx
│  │   └── PrivateRoute.jsx
│  ├── routes/
│  │    └── Router.jsx
│  ├── utilities/
├── App.css 
├── App.jsx 
├── index.css 
├── main.jsx 
├── .firebaserc 
├── .gitignore
├── README.md
├── eslint.config.js 
├── firebase.config.js 
├── firebase.json 
├── index.html 
├── package-lock.json
├── package.json 
├── README.md
└── vite.config.js 
```
---

## Technologies Used

## 🛠️ Tech Stack

**Frontend:**
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/) (Tailwind CSS Component Library)

**Routing:**
- [React Router](https://reactrouter.com/)

**State Management:**
- [React Context API](https://reactjs.org/docs/context.html)

**Authentication:**
- [Firebase Authentication](https://firebase.google.com/products/auth)

**Backend:**
- [Firebase Realtime Database](https://firebase.google.com/products/realtime-database)

**Build Tool:**
- [Vite](https://vitejs.dev/)

**Linting:**
- [ESLint](https://eslint.org/)

**Icons:**
- [React Icons](https://react-icons.github.io/react-icons/)

**Date formatting:**
- [date-fns](https://date-fns.org/)

**Marquee:**
- [React Fast Marquee](https://www.react-fast-marquee.com/)

**Carousel:**
- [Swiper.js](https://swiperjs.com/)

**Notifications:**
- [React Toastify](https://fkhadra.github.io/react-toastify/)

---

## Features in Detail

1. **Home Page**
   - Displays a carousel of featured subscription services.
   - Highlights trusted partners and upcoming features.

2. **My Profile**
   - View and update user profile details (name, photo, email).
   - Displays the last login time.

3. **My Services**
   - Lists all active subscriptions with collapsible details.
   - Displays credentials for each subscribed tool.

4. **Service Details**
   - Provides detailed information about a subscription service.
   - Allows users to submit reviews and ratings.

5. **Authentication**
   - Secure login and registration with Firebase Authentication.
   - Supports Google Sign-In.

6. **Error Handling**
   - Custom 404 error page for invalid routes.

---

## License
This project is done for learning purpose only.