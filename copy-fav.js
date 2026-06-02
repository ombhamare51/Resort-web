const fs = require('fs');
const path = require('path');

const source = "C:\\Users\\ombha\\.gemini\\antigravity-ide\\brain\\ddc7ee5d-876e-4216-bd90-d422464dceb2\\media__1780206676564.png";
const dest = path.join(__dirname, 'public', 'images', 'favicon.png');

try {
  fs.copyFileSync(source, dest);
  console.log('Successfully copied favicon!');
} catch (err) {
  console.error('Error copying favicon:', err);
}
