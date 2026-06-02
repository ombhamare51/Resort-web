const fs = require('fs');
try {
  fs.copyFileSync(
    "C:\\Users\\ombha\\.gemini\\antigravity-ide\\brain\\24683e3d-0bf2-4014-a3fb-c75ac045d5ae\\reservation_bg_1780307179078.png",
    "d:\\Digi Mirai\\Rivora\\Rivora-React\\public\\images\\background\\reservation_bg.png"
  );
  console.log("Success!");
} catch (e) {
  console.error("Error:", e);
}
