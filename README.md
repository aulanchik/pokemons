# Pokémon Wiki

This is a web application that serves as a modern, interactive Pokédex. It allows users to browse through a comprehensive list of Pokémon, search for specific ones, and view their detailed information. The application is built with Next.js and leverages the PokéAPI for data.

A key visual feature is the dynamic generation of background colors for each Pokémon card and details page, based on the dominant color of the Pokémon's image, creating a unique and visually appealing experience for every entry.

## Features

-   **Infinite Scrolling:** Seamlessly browse through the entire list of Pokémon.
-   **Dynamic Search:** Instantly filter and find Pokémon by name.
-   **Detailed Views:** Click on any Pokémon to see its stats, types, abilities, and a high-quality image.
-   **Dynamic Color Theming:** Pokémon cards and detail pages are colored based on the Pokémon's dominant sprite color.
-   **Responsive Design:** A clean, accessible interface that works great on both desktop and mobile devices.

## Tech Stack

-   **Framework:** [Next.js](https://nextjs.org/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **UI:** [Radix UI](https://www.radix-ui.com/) for icons
-   **Data:** [PokéAPI](https://pokeapi.co/)
-   **Color Extraction:** [color-thief-react](https://github.com/lokesh/color-thief/tree/master/packages/color-thief-react)

## Project Structure

The project is organized into several key directories within the `src` folder:

-   `src/api`: Contains functions for fetching data from the PokéAPI.
-   `src/app`: The main Next.js app router, including page layouts and routes.
-   `src/components`: Reusable React components that make up the UI (e.g., `PokemonCard`, `PokemonGrid`, `SearchInput`).
-   `src/hooks`: Custom React hooks, such as `useGetDominantColor` for dynamic color generation.
-   `src/types`: TypeScript type definitions for the Pokémon data structures.
-   `src/utils`: Helper utility functions for formatting and transformations.

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

-   Node.js (v20 or later)
-   npm or yarn

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/aulanchik/pokemons.git
    cd pokemons
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    This project requires the PokéAPI URL. Create a file named `.env.local` in the root of the project and add the following line:
    ```
    NEXT_PUBLIC_POKEMON_API_URL=https://pokeapi.co/api/v2
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

In the project directory, you can run the following scripts:

-   `npm run dev`: Starts the application in development mode.
-   `npm run build`: Creates a production-ready build of the application.
-   `npm run start`: Starts the application in production mode (requires a build first).
-   `npm run lint`: Lints the source code using Next.js's built-in ESLint configuration.
