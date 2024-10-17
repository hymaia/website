console.log("Hello from Hymaia");


import { NeatConfig, NeatGradient } from "@firecms/neat";

// Define your config
export const config: NeatConfig = {
    colors: [
        {
            color: "#EFD8FF",
            enabled: true
        },
        {
            color: "#472749",
            enabled: false
        },
        {
            color: "#EFC69B",
            enabled: true
        },
        {
            color: "#FB6376",
            enabled: true
        },
        {
            color: "#f5e1e5",
            enabled: false
        }
    ],
    speed: 4, // from 0 to 10
    horizontalPressure: 4, // from 0 to 10
    verticalPressure: 5, // from 0 to 10
    waveFrequencyX: 2, // from 0 to 10
    waveFrequencyY: 3, // from 0 to 10
    waveAmplitude: 5, // from 0 to 10
    shadows: 0, // from 0 to 10
    highlights: 2, // from 0 to 10
    wireframe: false,
    colorBlending: 6, // from 0 to 10
    backgroundColor: "#003FFF",
    backgroundAlpha: 1 // from 0 to 1
};

// Define an element with id="gradient" in your HTML
const gradientElement = document.getElementById("gradient") as HTMLCanvasElement | null;

if (gradientElement) {
    const neat = new NeatGradient({
        ref: gradientElement,
        ...config
    });

    // You can change the config at any time
    neat.speed = 6;

} else {
    console.error('Element with id "gradient" not found or is not a canvas element');
}
/**
 * Creates a new HTML element and appends it to the specified parent element.
 * @param {string} tag - The type of element to create (e.g., 'div', 'p', 'span').
 * @param {Record<string, string>} attributes - An object containing key-value pairs of attributes to set on the element.
 * @param {string} textContent - The text content to set inside the element.
 * @param {string} parentSelector - A CSS selector for the parent element to which the new element will be appended.
 */
function createElement(tag: string, attributes: Record<string, string>, textContent: string, parentSelector: string): void {
    // Create the new element
    const newElement = document.createElement(tag);
    
    // Set the attributes on the new element
    for (const key in attributes) {
        if (attributes.hasOwnProperty(key)) {
            newElement.setAttribute(key, attributes[key]);
        }
    }
    
    // Set the text content of the new element
    newElement.textContent = textContent;
    
    // Find the parent element
    const parentElement = document.querySelector(parentSelector);
    if (parentElement) {
        // Append the new element to the parent element
        parentElement.appendChild(newElement);
    } else {
        console.error(`Parent element with selector "${parentSelector}" not found.`);
    }
}

// Example usage:
// This will create a <div id="newDiv" class="myClass">Hello, World!</div> inside an element with id "container"
createElement('div', { id: 'newDiv', class: 'myClass' }, 'Hello, World!', '#containerdiv');


