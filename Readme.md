# WHOT Flip Game UI

## Description
This project is a simple UI representation of the popular card game **WHOT**, featuring a flip interaction between two states: one that shows the WHOT logo and another that displays card details. The design aims to replicate the visual essence of a WHOT card while allowing the user to flip between two different card states by clicking a button.

## Features
- **Flip Animation:** A button that flips the card between two sides (front and back).
- **Responsive Design:** The interface adjusts smoothly for all devices, including mobile and tablet screens.
- **Card Styling:** Replicates the WHOT card with custom styles for numbers and symbols.
- **Custom Shapes:** The "WHOT" symbol can appear inside a circle or rectangle, depending on the styling.
  
## Technologies Used
- HTML5 for structure
- CSS3 for styling and layout
- JavaScript for interactive flipping functionality

## How to Use
1. Clone the repository:
    ```bash
    git clone https://github.com/olaniyihakeemboluwatife/whot-flip-game-ui.git
    ```
2. Navigate to the project directory and open the `whot.html` file in your browser.

3. Click on the "Flip" button to toggle between the front and back sides of the card.

## File Structure
- **whot.html:** The main HTML file that renders the game interface.
- **whot.css:** The CSS file responsible for the styling of the card, text, and button.
- **whot.js:** The JavaScript file that handles the flip functionality between the two card states.

## Customization
You can customize the card appearance by modifying the styles in `whot.css`. The `.whot-symbol` class can be adjusted to show the WHOT symbol as either a **circle** or **rectangle**.

### Circle Symbol Example:
```css
.whot-symbol {
    width: 150px;
    height: 150px;
    border-radius: 50%; /* Makes it a circle */
    background-color: white;
    color: black;
}
```

### Rectangle Symbol Example:
```css
.whot-symbol {
    padding: 20px 40px;
    border-radius: 10px; /* Slightly rounded corners for a rectangle */
    background-color: white;
    color: black;
}
```

## Responsive Design
The UI is fully responsive, with adjustments made for smaller devices. In the `@media` query section of the CSS, you can fine-tune the layout for different screen sizes.

### Example:
```css
@media screen and (max-width: 360px) {
    .container {
        width: 300px;
        height: 50vh;
    }
    .container h1 {
        font-size: 50px;
    }
}
```

## Flip Functionality
The flip action is handled by a simple JavaScript function, `flipFunction()`, which toggles the display of two different sections:
```javascript
function flipFunction() {
    let show = document.getElementById('show').style.display = 'none';
    let hide = document.getElementById('hide').style.display = 'block';
}
```

This can be easily expanded to include additional interactions.

## Future Improvements
- Add more card designs and interactions for a complete WHOT game experience.
- Implement animations for a smoother flip transition.
- Create multiple cards and randomize them to mimic real gameplay.

## License
This project is open-source and available under the [MIT License](LICENSE).

---

Feel free to contribute to this project or fork it for your own use!