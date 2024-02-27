## Introduction

Welcome to the documentation for our Next.js Movies project! This project serves as a frontend interface for accessing movie data, with a backend implemented in Nest.js. Below, you'll find detailed instructions on how to set up the project, navigate through its pages, and interact with its components.

## Installation

To get started, follow these steps:

1. Clone the repository to your local machine.
    ```bash
    git clone <repository_url>
    ```

2. Navigate to the project directory in your terminal.
    ```bash
    cd your-project-directory
    ```

3. Run `npm install` to install the necessary dependencies.
    ```bash
    npm install
    ```

4. Start the development server by running `npm run dev`.
    ```bash
    npm run dev
    ```

## Usage

Once the server is up and running, you can access the application at [http://localhost:3000](http://localhost:3000) in your web browser.

### Pages

#### Home Page
- Upon opening the application, users are directed to the Home page.
- Here, they can browse through a curated list of the most popular movies.

#### Search Page
- The Search page provides users with access to the complete list of movies.
- Users can filter the movie list by entering a movie title in the search bar.

#### Movie Details Page
- Clicking on the description of any movie on either the Home or Search page leads users to the Movie Details page.
- Here, users can view detailed information about the selected movie, including its title, release date, and overview.

## Note
- To ensure the frontend functions correctly, it is imperative that the backend server is running. Therefore, we recommend starting the backend server before interacting with the frontend components.

> Before interacting with the frontend components, make sure to start the backend server. You can find the frontend repository [here](<https://github.com/ArnoldEsquivel/nest-back.git>).

That's it! You're now ready to explore and interact with our Next.js movie application. If you have any further questions or encounter any issues, please refer to the documentation or reach out to our support team. Happy browsing!
