# Meme Generator | React + Vite

<b>Welcome to the Meme Generator project, a fun and interactive web application that allows users to create memes by fetching images from an external API and overlaying custom text. This project demonstrates a variety of React.js skills and techniques, making it an excellent showcase of front-end development capabilities.</b>

## Features
- Dynamic Meme Generation: Fetches random meme images from an external API.
- Customizable Text Overlay: Allows users to input text for meme captions, which are dynamically rendered on the images.
- Interactive UI: Responsive and interactive user interface for meme creation.
- React Hooks: Utilizes React’s state and lifecycle management with useState and useEffect.
- Component-Based Architecture: Modular components for easy scalability and maintenance.
- Props & Custom Components: Effective use of props for passing data between components, ensuring a parent-child component relationship.
- Reusable Components: Custom-built components that enhance flexibility and reusability.

## Key React Concepts Demonstrated
- useState: For handling dynamic state updates such as user inputs and meme image changes.
- useEffect: To fetch meme data from an external API on component load.
- Props: To pass data between parent and child components efficiently.
- Custom Components: Encapsulates reusable logic into custom components that accept props, promoting code modularity. - Parent-Child Component Relationship: Demonstrates a clear flow of data from parent to child components, ensuring seamless interaction.

## Technologies Used
- React.js: A JavaScript library for building user interfaces.
- JavaScript (ES6): Leveraging modern JavaScript features for cleaner and more efficient code.
- Tailwind CSS: A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.
- CSS: Basic styling for layout and user interaction.
- API Integration: Fetching meme images from an external API.

  
## Future Improvements
- Add user options for customizing text size, font, and color.
- Implement meme download functionality.
- Enhance mobile responsiveness and accessibility.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## How to Run
- 1. Clone the repository: git clone https://github.com/daduwa/meme-generator.git
- 2. Navigate to the project directory: cd meme-generator
- 3. Install dependencies: npm install
- 4. npm start

## Project Structure

```bash
.
├── public
├── src
│   ├── components
│   │   ├── Header.js        # Header section
│   │   └── Form.js    # Form for user input
│   ├── App.js             # Main app component
│   ├── index.js           # Entry point
│   └── styles.css         # Basic styles
├── package.json
└── README.md

```bash

Visit [Meme Generator](https://daduwa.github.io/meme-generator/) to create your memes.


Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
