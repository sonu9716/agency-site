const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve the main agency site at the root
app.use(express.static(path.join(__dirname, 'agency-site')));

// Serve demo-site (dental clinic) at /demo1. Since we configured basePath: '/demo1', 
// Next.js handles the routing correctly as long as we serve the folder. 
// We just need to map `/demo1` to the out folder and let it serve the index.html
app.use('/demo1', express.static(path.join(__dirname, 'demo-site', 'out')));
app.get('/demo1/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'demo-site', 'out', 'index.html'));
});

// Serve demo-site2 (women's clinic) at /demo2
app.use('/demo2', express.static(path.join(__dirname, 'demo-site2', 'out')));
app.get('/demo2/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'demo-site2', 'out', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`- Main site: http://localhost:${PORT}/`);
    console.log(`- Demo 1:    http://localhost:${PORT}/demo1/`);
    console.log(`- Demo 2:    http://localhost:${PORT}/demo2/`);
});
