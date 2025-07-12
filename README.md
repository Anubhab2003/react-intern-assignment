# Spreadsheet UI Component

This repository contains a React application featuring a spreadsheet-like user interface component, developed as part of an intern assignment. The component is designed to simulate a Google Sheets or Excel experience based on provided design specifications.

## Overview

The `Table.jsx` component implements a responsive, grid-based spreadsheet view, complete with interactive headers, dynamically stretching columns, and editable cells.

## Features

* **Pixel-Close Design:** The layout, including specific shades, icons, and spacing, closely matches the design mockups.
* **Google Sheet/Excel Experience:** Empty cells are `contentEditable`, allowing direct user input, providing a seamless spreadsheet feel.
* **Interactive UI:** All buttons in the top header and tabs in the footer are functional. Buttons log interaction events to the console, and footer tabs manage state changes when clicked.
* **Responsive Layout:** Columns stretch dynamically to cover available horizontal space while maintaining alignment.

## Technologies Used

* **React**
* **Tailwind CSS**
* **Lucide React** (for icons)

## Setup Instructions

To run this project locally, clone the repository and install the dependencies.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Anubhab2003/react-intern-assignment.git](https://github.com/Anubhab2003/react-intern-assignment.git)
    cd react-intern-assignment
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the application:**
    ```bash
    npm run dev
    # or npm start, depending on the project configuration
    ```

The application should now be running on your local development server.