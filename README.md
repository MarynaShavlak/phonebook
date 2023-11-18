# 🧞‍♂️📱 LET PHONE GENIE GRANT YOUR EVERY CONNECTION WISH!

## :fire: Project Overview
   "Phone Genie" is a comprehensive phonebook application meticulously crafted to redefine user interaction with contact management. This individual project is driven by a robust Swagger backend API for a seamless user experience. Effortlessly manage contacts, including secure registration, easy input of international numbers, and intuitive organization features. Enjoy swift search, batch actions, and a recycle bin for added safety. 

   "Phone Genie" prioritizes user convenience, offering a comprehensive suite of tools for effortless contact and group management. Elevate your experience with its intuitive interface and powerful features.

   ![](https://img.shields.io/badge/Code-JavaScript-informational?style=flat&logo=JavaScript&color=F7DF1E)![](https://img.shields.io/badge/Code-HTML5-informational?style=flat&logo=HTML5&color=E34F26)
   ![](https://img.shields.io/badge/Style-CSS3-informational?style=flat&logo=CSS3&color=1572B6)
   ![](https://img.shields.io/badge/Tools-NPM-informational?style=flat&logo=NPM&color=CB3837)
   ![](https://img.shields.io/badge/Tools-Git-informational?style=flat&logo=Git&color=F05032)![](https://img.shields.io/badge/Tools-GitHub-informational?style=flat&logo=GitHub&color=181717)

## 🔍 Introduction

## 🔗 Links

## :rocket: Get Started

To get started with Phone Genie,
[visit our website](https://marynashavlak.github.io/phonebook/).

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

## :movie_camera: Visual Showcase



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
   - 🔐 Input validation ensures data accuracy and security.
   - 🔒 Password confirmation.
- **Login**:
   - 🔑 Registered users can log in using their credentials (email and password).
   - 🔄 Session management ensures secure and seamless navigation within the application.
- **Logout**:
   - 🚪 Users can log out to end their current session securely.

### 🌐 Phone Number Input with Country Code and Flag for International Contacts:
- **Phone Number Input**:
   - 📱 Users can input phone numbers with an option to include the country code.
   - 🔍 Validation ensures that the entered phone numbers are in the correct format.
   - 🌐 Flags associated with country codes provide a visual cue for international contacts, enhancing user experience.

### 👥 Contact Management Features:
- **Create, Edit, and Delete Contacts**:
   - ➕ Users can add new contacts by providing essential information (name, phone number).
   - 🖊️ Existing contacts can be edited to update information.
   - 🗑️ Contacts can be moved to recycle bin, and a confirmation step is included to prevent accidental deletions.
- **Search and Sort Contacts**:
   - 🔍 Effortlessly find contacts by name or number using the intuitive search bar, available across the entire phonebook, in the favorites list, and even within the recycle bin for comprehensive accessibility.
   - 🔄 Streamline contact organization with sorting options based on name or date added. Arrange contacts effortlessly in both ascending and descending orders, ensuring a seamless experience throughout the entire phonebook, favorites list, and recycle bin.
- **Add Contacts to Favorites and Custom Groups**:
   - ⭐ Users can mark certain contacts as favorites for quick access.
   - 👥 Users have the capability to effortlessly add or remove contacts from one or multiple custom groups.
- **Merge Contacts**:
   - 🔄 Seamlessly merge selected contacts by choosing the preferred name and number from the list of selected contacts.to maintain a clean and organized contact list.
   - 📝 Empowers users to retain the most relevant information from each contact during the merging process.
- **Streamline Contact Management with Batch Actions**:
   - 📦Enjoy efficient contact management with the ability to select all contacts in a single click or choose specific ones.

### 🗑️ Recycle Bin Management: Restore and Delete Contacts: 
- ↩️ **Selective Restore**: Easily recover one, multiple, or all contacts from the recycle bin, ensuring no duplicates.
- 🗑️ **Permanent Deletion**: Permanently erase contacts for a clean slate.
- 🕒 **Timestamps**: View removal dates and times for informed decision-making.

### ![Group Icon](https://img.icons8.com/ios/452/groups.png) Groups Management Features:
- **Create, Edit, and Delete Groups**:
   - ✨ Create: Users can make custom groups, ensuring uniqueness in group names.
   - 🖊️ Edit: Modify existing groups, with checks to avoid duplicate names.
   - 🗑️ Delete: Permanently remove unnecessary groups, excluding associated contacts.
- **Manage Contacts within Groups**:
   - 👥 Contacts can be assigned to specific groups for better organization.
- **Merge Groups**:
   - 🔄 Efficient Merging: Users can merge groups for a simplified structure.
   - 📝 Custom Names: Choose a new group name during merging.
   - 🔄  Contact Integrity: Ensure uniqueness when merging groups with the same contacts.
- **Search and Sort Groups**:
   - 🔍 Effortlessly find groups by name using the intuitive search bar, ensuring swift navigation.
   - 🔄 Streamline group organization with sorting options based on name or date added, available in both ascending and descending order for seamless arrangement.
- **Show/Hide Contacts in Group and Drag-and-Drop Functionality**:
   - 👁️ One-click toggle for instant visibility control of contacts within a group.
   - 🔄 Effortless drag-and-drop enables smooth contact movement between groups.
   - ✅ Smart duplicate check ensures data integrity when transferring contacts.