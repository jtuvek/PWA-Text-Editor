# J.A.T.E - Just Another Text Editor

J.A.T.E is a Progressive Web Application (PWA) Text Editor designed to provide a seamless text editing experience. It utilizes technologies such as CodeMirror for the editor component, IndexedDB for local storage, and supports offline functionality.

## Features

- **CodeMirror Editor:** A powerful and customizable text editor based on CodeMirror.
- **IndexedDB Integration:** Stores and retrieves text content locally using IndexedDB.
- **Progressive Web App (PWA):** Offers a responsive and offline-capable user experience.
- **Heroku Deployment:** Easily deploy the application to Heroku for online access.

## Installation

To run the application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/JATE.git
   cd JATE
   ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm run start:dev
    ``` 
4. Open your browser and navigate to http://localhost:5500.

## Deployment
Deploying the application to Heroku is a straightforward process:

1. Create a Heroku account if you don't have one.
2. Install the Heroku CLI: Heroku CLI Installation.
3. Log in to Heroku using the command:
    ```bash
    heroku login
    ```
4. 
    ```bash
    heroku create your-app-name
    ```

5. Push your code to Heroku:
    ```bash
    git push heroku main
    ```
6. Open your deployed app in the browser:
    ```bash
    heroku open
    ```

## Contributing
Contributions are welcome! If you find a bug or have an enhancement in mind, please open an issue or create a pull request.      

