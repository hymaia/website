console.log("Hello from Hymaia");


import { NeatConfig, NeatGradient } from "@firecms/neat";

// Define your config
export const config: NeatConfig = {
    colors: [
        {
            color: '#453A7F',
            enabled: true,
        },
        {
            color: '#7469A9',
            enabled: true,
        },
        {
            color: '#221854',
            enabled: true,
        },
        {
            color: '#AFA7D4',
            enabled: true,
        },
        {
            color: '#DDD6FE',
            enabled: true,
        },
    ],
    speed: 3,
    horizontalPressure: 5,
    verticalPressure: 5,
    waveFrequencyX: 1,
    waveFrequencyY: 1,
    waveAmplitude: 5,
    shadows: 10,
    highlights: 3,
    colorBrightness: 1,
    colorSaturation: 8,
    wireframe: false,
    colorBlending: 5,
    backgroundColor: '#FF0000',
    backgroundAlpha: 1,
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


