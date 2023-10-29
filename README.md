# Injurio - The Injury Management System

Welcome to the Injurio repository! This web application is designed to help organizations, such as law enforcement agencies, easily record and manage injuries reported by individuals.

## Overview

Injurio is a robust web application built to streamline the process of injury reporting and management. It is particularly useful for organizations that need an efficient system to handle injury reports.

## Core Features

### 📝 Report
- **Reporter Information:** Easily input the name of the individual reporting the injury.
- **Timestamp of Injury:** Capture the exact date and time when the injury occurred.
- **Visual Injury Mapping:** A unique feature that allows users to pinpoint and label injury locations on a visual body map. The system automatically numbers and labels each area, simplifying the documentation process.
- **Detailed Injury Descriptions:** For each marked area, users can provide comprehensive injury descriptions, ensuring accurate and thorough records.

### 📄 List of Reports
- **Comprehensive Overview:** Users can access a table displaying all reported injuries, including the reporter's name, date and time of injury, and date of the report.
- **Sort and Search:** The system offers powerful sorting, searching, and filtering capabilities, enabling users to quickly find and organize injury reports.

### 🔐 User Authentication
- **Secure Registration:** Users can easily register with the system using a username and password, with options for Google login and email-based registration.
- **Auth0 Integration:** User authentication is implemented using Auth0, providing a reliable and secure authentication framework.

### 🎨 UI/UX
- **React Material UI:** The application features a visually appealing and user-friendly interface built with React Material UI as the design library.
- **Responsive Design:** The application is fully responsive, ensuring it works seamlessly on both desktop and mobile devices.

## Getting Started

To set up Injurio locally, follow these steps:

1. Clone the repository:
```
https://github.com/Ankitverma1229/injurio.git
   ```

2. Navigate to the both project directory one by one:
```
cd Frontend & cd Backend

   ```

3. Install dependencies:
```
npm install
```
   
4. Add .env file with your details

```
PORT = 5000
CONNECT_DB = '***********'
SMTP_HOST = **********
SMTP_PORT = *******
SMTP_MAIL = **********
SMTP_PASSWORD = ********
SECRET_KEY = *********
SECRET= *********
BASEURL= ********
CLIENTID= **********
ISSUER= *********

```
4. Start the application for frontend and backend respectively:
   ```
   npm run start & npm run dev

   ```

## Contributing

We welcome contributions from the community! Whether you're interested in bug fixes, new features, or improvements, please review our [Contributing Guidelines](CONTRIBUTING.md) for more details on how to get involved.

## Additional Features

### 📊 Analytics Dashboard
We are exploring the possibility of integrating an analytics dashboard, which will provide visualizations of relevant metrics, enabling deeper insights into injury reports.

## Technology Stack

- MERN Stack
- **Backend Framework:** Express.js
- **Database:** MongoDB
- **Authentication:** Auth0
- **UI/UX:** React Material UI

Feel free to explore other technology stacks that align with your project goals.

## Contact

For inquiries and support, please reach out to [ankitkumar040722@gmail.com](mailto:ankitkumar040722@gmail.com).

Enjoy using Injurio, and thank you for being a part of our open-source community!
