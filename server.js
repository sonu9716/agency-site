const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve the main agency site at the root
app.use(express.static(path.join(__dirname, 'agency-site')));

// Serve demo-site (dental clinic) at /demo1
app.use('/demo1', express.static(path.join(__dirname, 'demo-site', 'out')));

// Serve demo-site2 (women's clinic) at /demo2
app.use('/demo2', express.static(path.join(__dirname, 'demo-site2', 'out')));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`- Main site: http://localhost:${PORT}/`);
    console.log(`- Demo 1:    http://localhost:${PORT}/demo1/`);
    console.log(`- Demo 2:    http://localhost:${PORT}/demo2/`);
});
