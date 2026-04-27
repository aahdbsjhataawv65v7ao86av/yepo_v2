const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

// MIME types
const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.webp': 'image/webp'
};

const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, req.url);

    // Default to index.html for root path
    if (req.url === '/' || req.url === '') {
        filePath = path.join(__dirname, 'index.html');
    }

    // Get file extension
    const ext = path.extname(filePath).toLowerCase();

    // Read the file from disk
    fs.readFile(filePath, (err, content) => {
        if (err) {
            // If file not found, try to serve index.html (for SPA routing)
            if (err.code === 'ENOENT') {
                // For dog detail routes like /dogs/wi, try to serve dogs/wi.html
                if (req.url.startsWith('/dogs/')) {
                    const dogName = req.url.split('/')[2];
                    const dogFilePath = path.join(__dirname, 'dogs', `${dogName}.html`);
                    fs.readFile(dogFilePath, (dogErr, dogContent) => {
                        if (dogErr) {
                            res.writeHead(404, { 'Content-Type': 'text/html' });
                            res.end('<h1>404 - Page Not Found</h1>');
                        } else {
                            res.writeHead(200, { 'Content-Type': 'text/html' });
                            res.end(dogContent, 'utf-8');
                        }
                    });
                } else {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end('<h1>404 - Page Not Found</h1>');
                }
            } else {
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end('<h1>500 - Server Error</h1>');
            }
        } else {
            const contentType = mimeTypes[ext] || 'application/octet-stream';
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
    console.log(`Open your browser to http://localhost:${PORT}/`);
});