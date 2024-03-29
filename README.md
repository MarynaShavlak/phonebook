# 🧞‍♂️📱 LET PHONE GENIE GRANT YOUR EVERY CONNECTION WISH!

Feel free to test it with test account or create a new one:
- **email:** testshavlak@mail.com
- **password:** testshavlak2024

## :fire: Project Overview
   "Phone Genie" is a comprehensive phonebook application meticulously crafted to redefine user interaction with contact management. This individual project is driven by a robust Swagger backend API for a seamless user experience. Effortlessly manage contacts, including secure registration, easy input of international numbers, and intuitive organization features. Enjoy swift search, batch actions, and a recycle bin for added safety. 

   "Phone Genie" prioritizes user convenience, offering a comprehensive suite of tools for effortless contact and group management. Elevate your experience with its intuitive interface and powerful features.

## 🔍 Introduction

Welcome to "Phone Genie," a cutting-edge React application transforming contact management. Fueled by a robust Swagger backend API, it offers a seamless and secure user experience. Prioritizing user convenience, the app provides intuitive features for effortless contact and group management, including secure registration, batch actions, and a click-to-call function. With streamlined features and real-time updates, "Phone Genie" redefines contact management for a future of seamless user experiences.

## :rocket: Get Started

To get started with Phone Genie,
[visit  website](https://marynashavlak.github.io/phonebook/).

## :computer: Technologies

Phone Genie web-application is built using a variety of technologies to ensure a seamless
user experience:
- Backend API: The application's backend API is built on **Swagger**  providing a robust set of       functionalities for users.
- ![Git and GitHub](https://img.shields.io/badge/Git%20and%20GitHub-Used-green)
  **Git and GitHub** are used for version control, enabling efficient
  collaboration, code sharing, and tracking of modifications. GitHub serves as a
  centralized repository for storing the codebase, facilitating version control,
  issue tracking, and collaboration among developers.
- ![Responsive Design](https://img.shields.io/badge/Responsive%20Design-Implemented-blue)
  **Responsive design** ensures that the website adapts to different screen sizes
  and devices. By utilizing CSS media queries and flexible layouts, it provides
  an optimal user experience across various platforms, enhancing accessibility,
  satisfaction, and engagement.
 - **Frontend Technologies**: 
      - React: The foundation of the frontend, enabling the creation of dynamic and interactive user interfaces.
      - React Router DOM: Facilitating seamless navigation within the application.
      - Redux Toolkit and React Redux: Managing the state of the application efficiently, ensuring a smooth and predictable user experience.
      - Axios: Handling HTTP requests to interact with the backend API.
      - Formik and Yup: Streamlining form management and validation.
      - Redux Persist: Ensuring persistent state across user sessions.
      - Styled Components, Classnames, Clsx: Enabling the styling of components for a visually appealing design.
      - Slugify, Nanoid: Supporting URL and unique identifier generation.
      - React Icons, React Select, React Modal: Enhancing the UI with iconography, selectable components, and modal dialogs.
      - React Loader Spinner, React Avatar, React Highlight Words: Improving user experience with loading indicators, avatar displays, and highlighted text.
      - React Toastify: Providing user-friendly notifications.
      - Randomcolor: Generating random colors for visual elements.
      - Downshift, React-beautiful-dnd: Implementing dropdowns and drag-and-drop functionality.
      - Modern Normalize: Ensuring consistent rendering across different browsers.
      - Material UI: Incorporating Material Design components for a cohesive and polished look.


### Prerequisites
Before you begin, make sure you have:

- Node.js and npm installed on your machine.



## Getting Started

Follow these steps to run the project on your local machine:

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/MarynaShavlak/phonebook.git
    ```

2. Navigate to the project directory:

    ```bash
    cd phonebook
    ```

3. Install project dependencies:

    ```bash
    npm install
    ```

## Available Scripts

In the project directory, you can run the following scripts:

- **Start the Development Server:**

    ```bash
    npm start
    ```

    This command runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- **Build the Project for Production:**

    ```bash
    npm run build
    ```

    Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.


## :file_folder: Project Structure

Here's an overview of the directory structure of the Phone Genie phonebook web aplication project:
```
phonebook/
├── src/
│   ├── components/
│   │   ├── ... (other component files)
│   ├── constants/
│   │   ├── ... (other constant files)
│   ├── contexts/
│   │   ├── ... (other context files)
│   ├── hooks/
│   │   ├── ... (other hook files)
│   ├── pages/
│   │   ├── ... (other page files)
│   ├── redux/
│   │   ├── ... (other Redux-related files)
│   ├── services/
│   │   ├── ... (other service files)
│   ├── shared/
│   │   ├── ... (other shared files)
│   ├── utils/
│   │   ├── ... (other utility files)
│   ├── project-screens/
│   ├── index.css
│   ├── index.js
├── public/
│   ├── 404.html
│   ├── favicon.ico
│   ├── index.html
├── ...
```

## ⚙️ Features

### 🔑 Registration, Login, and Logout Features:
- **Registration**:
   - 📝 Users can create a new account by providing necessary information such as username, email, and password.
   - 🔐 Input validation ensures data accuracy and security, including password confirmation.
- **Login**:
   - 🔑 Registered users can log in using their credentials (email and password).
   - 🔄 Session management ensures secure and seamless navigation.
- **Logout**:
   - 🚪  Users can securely end their current session.

### 🌐 Phone Number Input with Country Code and Flag for International Contacts:
- **Phone Number Input**:
   - 📱 Users can input phone numbers with an optional country code.
   - 🔍 Validation ensures correct phone number formats.
   - 🌐 Flags associated with country codes provide a visual cue for international contacts, enhancing user experience.

###  👤 Contact Management Features:
- **Create, Edit, and Delete Contacts**:
   - ➕ Add new contacts with essential information (name, phone number).
   - 🖊️ Existing contacts can be edited to update information.
   - 🗑️ Contacts can be moved to recycle bin, and a confirmation step is included to prevent accidental deletions.
- **Search and Sort Contacts**:
   - 🔍 Seamlessly locate contacts by name or number through the intuitive search bar, spanning the entire phonebook, favorites list, and recycle bin for comprehensive accessibility.
   - 🔤  Intelligent Matching: Easily find contacts with the smart search feature, highlighting matching parts for precise alignment with search criteria.
   - 🔄 Organize contacts easily by sorting them based on name or date added. Arrange them in both ascending and descending orders for a seamless experience in your phonebook, favorites list, and recycle bin.
- **Add Contacts to Favorites and Custom Groups**:
   - ⭐ Mark contacts as favorites for quick access.
   - 👥 Effortlessly manage contacts in custom groups.
- **Merge Contacts**:
   - 🔄 Seamlessly merge selected contacts by choosing preferred name and number.
   - 📝 Retain the most relevant information from each contact during the merging process.
- **Streamline Contact Management with Batch Actions**:
   - 📦 Efficiently manage contacts with one-click selection.

### 🗑️ Recycle Bin Management: Restore and Delete Contacts: 
- ↩️ **Selective Restore**: Easily recover one, multiple, or all contacts from the recycle bin, ensuring no duplicates.
- 🗑️ **Permanent Deletion**: Permanently erase contacts for a clean slate.
- 🕒 **Timestamps**: View removal dates and times for informed decision-making.

### 👥 Groups Management Features:
- **Create, Edit, and Delete Groups**:
   - ✨ Create custom groups with unique names.
   - 🖊️ Edit existing groups, avoiding duplicate names.
   - 🗑️ Permanently remove unnecessary groups without deleting associated contacts.
- **Manage Contacts sithin Groups**:
   -  Contacts can be assigned to specific groups for better organization.
- **Merge Groups**:
   - 🔄 Efficiently merge groups with a new custom name.
   - 📝 Ensure uniqueness when merging groups with the same contacts.
- **Search and Sort Groups**:
   - 🔍 Effortlessly find groups by name using the intuitive search bar.
   - 🔄  Streamline group organization with sorting options based on name or date added.
- **Show/Hide Contacts in Group and Drag-and-Drop Functionality**:
   - 👁️ One-click toggle for instant visibility control of contacts within a group.
   - 🔄 Effortless drag-and-drop enables smooth contact movement between groups.
   - ✅ Smart duplicate check ensures data integrity when transferring contacts.

 ###  📞 Click-to-Call Feature:
 Users can now click on the phone number of a contact to initiate a call directly from the application, providing a seamless and efficient communication experience.

 ### 📣 User Notifications:
- ✨ Instant success notifications for completed actions.
- 🚨 Immediate error alerts for quick issue resolution.
- 🌐 Real-time updates ensure a seamless user experience.

###  🌐 Dynamic User Avatars:
Personalized avatars show the first letters of users' names when logged in, adding a touch of individuality.

###  ⏳ Custom Loader:
 Users will experience a custom loader integrated into the app, providing visual feedback during data processing or content loading. The loader enhances the user experience by indicating that an operation is in progress, ensuring transparency and engagement while waiting for tasks to complete.

### 🏠 Features Overview:
Users find a comprehensive overview of all app features, facilitating easy navigation and understanding of each feature's benefits.


## 🖼️ Screenshots

<table>
  <tr>
    <td>Start Page: Features Overview</td>
     <td>Registration Process</td>
  </tr>
  <tr>
    <td><img src='/src/project-screens/1.gif' width=400 alt="скріншот  cторінки сайту" ></td>
    <td><img src='/src/project-screens/2.gif' width=400 alt="скріншот  cторінки сайту" ></td>
  </tr>
  <tr>
    <td>Edit Contact</td>
     <td>Select few contacts</td>
  </tr>
  <tr>
    <td><img src='/src/project-screens/edit-contact.png' width=400 alt="скріншот  cторінки сайту" ></td>
    <td><img src='/src/project-screens/select-and-drop-down.png' width=400 alt="скріншот  cторінки сайту" ></td>
  </tr>
  <tr>
    <td>Delete Contact Confirmation Modal</td>
     <td>Search Contacts</td>
  </tr>
  <tr>
    <td><img src='/src/project-screens/delete-modal.png' width=400 alt="скріншот  cторінки сайту" ></td>
    <td><img src='/src/project-screens/search-contacts.png' width=400 alt="скріншот  cторінки сайту" ></td>
  </tr>
  <tr>
    <td>Create Group</td>
     <td>Add Few Contacts in Groups</td>
  </tr>
  <tr>
    <td><img src='/src/project-screens/create-group.png' width=400 alt="скріншот  cторінки сайту" ></td>
    <td><img src='/src/project-screens/add-few-contacts-in-groups.png' width=400 alt="скріншот  cторінки сайту" ></td>
  </tr>
  <tr>
    <td>Manage contacts in group, edit and delete group</td>
     <td>Drag contacts between groups</td>
  </tr>
  <tr>
    <td><img src='/src/project-screens/edit-delete-group.gif' width=400 alt="скріншот  cторінки сайту" ></td>
    <td><img src='/src/project-screens/drag-contacts.gif' width=400 alt="скріншот  cторінки сайту" ></td>
  </tr>
  <tr>
    <td>Merge Groups/td>
     <td>Recycle Bin</td>
  </tr>
  <tr>
    <td><img src='/src/project-screens/merge-groups.gif' width=400 alt="скріншот  cторінки сайту" ></td>
    <td><img src='/src/project-screens/recycle-bin.png' width=400 alt="скріншот  cторінки сайту" ></td>
  </tr>
  <tr>
    <td>Restore Contacts/td>
     <td>Add/ remove contacts from Favorites</td>
  </tr>
  <tr>
    <td><img src='/src/project-screens/restore-contacts.png' width=400 alt="скріншот  cторінки сайту" ></td>
    <td><img src='/src/project-screens/favorites.gif' width=400 alt="скріншот  cторінки сайту" ></td>
  </tr>
  <tr>
    <td>Mobile Design</td>
     <td>Tablet Design</td>
  </tr>
  <tr>
    <td><img src='/src/project-screens/mobile.png' width=400 alt="скріншот  cторінки сайту" ></td>
    <td><img src='/src/project-screens/tablet.png' width=400 alt="скріншот  cторінки сайту" ></td>
  </tr>
 </table>






## :hourglass:Future Plans: Roadmap
1. 📇 **Enhanced Contact Information**:
Expansion of Fields: Introduce additional contact information fields to provide richer context and a more comprehensive profile.
2. 📸  **Photo Personalization**:
Profile and Contacts Photos: Enable users to add photos to both profiles and contacts, enhancing personalization and visual recognition.
3. 🌒 **Dark Theme Option**:
Low-Light Interface: Implement a dark theme option for the interface, ensuring a comfortable and visually friendly experience in low-light environments.
4. 🎉 **Birthday Reminders**:
Important Dates: Set up birthday reminders to keep users informed and celebrate important dates with timely notifications.

Stay tuned for these exciting updates as we continue to enhance your experience! 🌟


## :handshake: Acknowledgments

A special note of appreciation goes out to:

- [React Router DOM](https://reactrouter.com/): I express my appreciation for the seamless navigation capabilities provided by React Router DOM, elevating the overall user experience
- [Redux Toolkit and React Redux](https://redux.js.org/): My sincere thanks for the efficient state management offered by Redux Toolkit and React Redux, ensuring a smooth and predictable user interface.
- [Axios](https://axios-http.com/):  I extend my thanks for the seamless handling of HTTP requests, facilitating smooth interactions with the backend API.
- [Formik](https://formik.org/) and [Yup](https://github.com/jquense/yup): TMy gratitude for the streamlined form management and validation provided by Formik and Yup, simplifying intricate processes.
- [Redux Persist](https://github.com/rt2zz/redux-persist): My appreciation for the contribution of Redux Persist in ensuring persistent state across user sessions, thereby enhancing the continuity of the user journey.
- [Styled Components](https://styled-components.com/), [Classnames](https://github.com/JedWatson/classnames), [Clsx](https://github.com/lukeed/clsx): I acknowledge the instrumental role played by these styling tools in enabling the creation of visually appealing and stylish components.
- [Slugify](https://github.com/simov/slugify), [Nanoid](https://github.com/ai/nanoid): My thanks for the support in URL and unique identifier generation, contributing to the robustness of the project.
- [React Icons](https://react-icons.github.io/react-icons/), [React Select](https://react-select.com/), [React Modal](https://github.com/reactjs/react-modal):  I express my gratitude for the enhancement of the user interface through the incorporation of iconography, selectable components, and modal dialogs.
- [React Loader Spinner](https://github.com/mhnpd/react-loader-spinner), [React Avatar](https://www.npmjs.com/package/react-avatar), [React Highlight Words](https://www.npmjs.com/package/react-highlight-words): My thanks for the improvement of the user experience through loading indicators, avatar displays, and highlighted text.
- [React Toastify](https://github.com/fkhadra/react-toastify): I am thankful for the provision of user-friendly notifications, contributing to effective project communication.
- [Randomcolor](https://github.com/davidmerfield/randomColor): My appreciation for the contribution to visual appeal by generating random colors for various visual elements.
- [Downshift](https://downshift-js.com/), [React-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd): My thanks for the implementation of dropdowns and drag-and-drop functionality, enriching user interactions.
- [Material UI](https://material-ui.com/): I extend my gratitude for the incorporation of Material Design components, which significantly contribute to a cohesive and polished visual aesthetic.


## Conclusion:
"Phone Genie" is a state-of-the-art React application redefining contact management. With a meticulously designed interface and a robust Swagger backend API, it ensures a seamless and secure user experience. From secure registration to intuitive international number input, batch actions, and recycle bin management, "Phone Genie" prioritizes user convenience.

Key features include click-to-call functionality, dynamic user avatars, and a custom loader for enhanced communication and user engagement. The application's focus on streamlined contact and group management, with features like merging and drag-and-drop functionality, sets it apart. User notifications and real-time updates contribute to a smooth user experience. With an informative features overview, "Phone Genie" combines functionality with an intuitive interface, redefining contact management for an elevated user experience.
