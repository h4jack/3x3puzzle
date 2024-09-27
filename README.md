# 3x3 Puzzle Game

Welcome to the 3x3 Puzzle Game! This is a simple sliding puzzle game where players can rearrange tiles to form a complete image. It's built using HTML, CSS, and JavaScript.

## Features

- **Interactive Gameplay:** Slide tiles to solve the puzzle.
- **Custom Images:** Players can upload or enter a URL for a custom image.
- **Score Tracking:** Keeps track of clicks, including highest and lowest scores.
- **Responsive Design:** Works well on various screen sizes.

## Demo

You can view a live demo of the game [here](https://susanta.rf.gd/game/3x3puzzle/).

## Installation

To run the game locally, follow these steps:

1. Clone the repository:
```bash
   git clone https://github.com/h4jack/3x3puzzle.git
```
2. Navigate to the project directory:
```bash
cd 3x3-puzzle/html
```
3. Open the index.html file in your web browser.
## Usage

1. Starting the Game: Click on the "Start New" button to initialize the game.
2. Sliding Tiles: Click on any tile adjacent to the empty space to slide it into that position.
3. Custom Images: Enter a URL of a square image or upload a file to set a custom image for the puzzle.
4. Score Tracking: Your current clicks will be tracked, along with the lowest and highest clicks.
# Code Overview
## HTML Structure
- `index.html:` Main HTML file containing the layout of the game.
- `style.css:` CSS file for styling the game interface.
- `script.js:` JavaScript file containing the game logic.

## Key Functions in script.js
- `isSwapPossible(obj, closed):` Determines if a tile can be swapped with the empty space.
- `swapCols(col, closed):` Swaps the clicked tile with the empty space.
- `isSolved():` Checks if the puzzle is solved.
- `shufflePuzzle():` Shuffles the tiles while ensuring the puzzle is solvable.
- `isValidURL(input):` Validates a URL format for custom images.
- `updateScore():` Updates the click score and tracks the highest click count.
- `setScores():` Retrieves and displays the lowest and highest scores from local storage.
## Contributing

Contributions are always welcome! If you find any issues or have suggestions, please open an issue or submit a pull request.


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://susanta.rf.gd/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/susantamandi/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/susantamandi)


## License

License
nginit is licensed under the [MIT License](https://github.com/h4jack/3x3puzzle/license.md/). See the LICENSE file for details.

