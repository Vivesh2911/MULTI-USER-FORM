# Multi-Step Form with React

This project is a responsive multi-step form built with React. The form has three steps:
1. Personal Information
2. Address Information
3. Confirmation

The form includes data validation, error handling, and navigation controls. It persists data to local storage and enforces sequential completion of steps.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)



## Features
- Multi-step form with three steps
- Client-side validation and error handling
- Sequential completion enforced
- Data persistence using local storage
- Responsive design for desktop, tablet, and mobile screens
- Navigation between steps via clickable tabs
- Form submission with success alert

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher) or yarn (v1 or higher)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/vivesh/multi-step-form.git
   cd multi-step-form
# npm install
# npm start
### PROJECT STRUCTURE 
src/
├── components/
│   ├── Step1.js
│   ├── Step2.js
│   ├── Step3.js
│   ├── FormNavigation.js
├── App.js
├── index.js
└── styles.css
Usage

Step 1: Personal Information
Name
Email
Phone
Step 2: Address Information
Address Line 1
Address Line 2
City
State
Zip Code
Step 3: Confirmation
Review all entered data
Submit the form
Navigation
Navigate between steps using the "Next" and "Back" buttons.
Click on the step tabs to jump directly to a specific step.
Form Submission
On the final step, click "Submit" to submit the form.
An alert will confirm successful submission.
The form data will be cleared, and the form will reset to the first step.
Credits

This project was developed by Vivesh.

### License

This project is licensed under the MIT License.
