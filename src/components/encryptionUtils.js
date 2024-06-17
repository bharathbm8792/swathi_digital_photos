import CryptoJS from 'crypto-js';

export function generateSecretKey() {
    return CryptoJS.lib.WordArray.random(32).toString(CryptoJS.enc.Hex);
}

export function encryptData(data, key) {
    const encrypted = CryptoJS.AES.encrypt(data, key).toString();
    return encrypted;
}

export function decryptData(encryptedData, key) {
    const decrypted = CryptoJS.AES.decrypt(encryptedData, key).toString(CryptoJS.enc.Utf8);
    return decrypted;
}