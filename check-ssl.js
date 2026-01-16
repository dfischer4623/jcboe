const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

// This forces the script to look ONLY in the current folder
const certPath = path.join(process.cwd(), 'wildcard_jcboe_org.crt');
const keyPath = path.join(process.cwd(), 'wildcard_jcboe_org.key');

console.log(`Checking files in: ${process.cwd()}`);

try {
    // Check if files exist before trying to read them
    if (!fs.existsSync(certPath) || !fs.existsSync(keyPath)) {
        throw new Error("One or both files are missing from this folder. Ensure they are named exactly 'wildcard_jcboe_org.crt' and 'wildcard_jcboe_org.key'.");
    }

    const cert = fs.readFileSync(certPath);
    const key = fs.readFileSync(keyPath);

    // Extract public key from the certificate
    const certDetails = crypto.createPublicKey(cert);
    const certModulus = certDetails.export({ type: 'pkcs1', format: 'pem' });

    // Extract public key from the private key
    const keyDetails = crypto.createPublicKey(key);
    const keyModulus = keyDetails.export({ type: 'pkcs1', format: 'pem' });

    if (certModulus === keyModulus) {
        console.log("✅ SUCCESS: The Certificate and Private Key match!");
    } else {
        console.error("❌ ERROR: The Certificate and Private Key do NOT match.");
    }
} catch (err) {
    console.error("❌ ERROR:");
    console.error(err.message);
    
    if (err.message.includes("no start line")) {
        console.log("\n💡 TIP: Your .crt file still looks like a PKCS7 (Windows) format.");
        console.log("Run this command first to convert it:");
        console.log("openssl pkcs7 -print_certs -in jcboe_org.cer -out wildcard_jcboe_org.crt");
    }
}