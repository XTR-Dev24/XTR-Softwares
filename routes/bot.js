// Bot handlers supporting both ESM and CommonJS

// ESM syntax
export const botHandler = (req, res) => {
    // Your handler logic here
    res.send('Hello from ESM bot handler!');
};

// CommonJS syntax
const commonJSHandler = (req, res) => {
    // Your handler logic here
    res.send('Hello from CommonJS bot handler!');
};

module.exports = { botHandler, commonJSHandler };