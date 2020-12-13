export function removeNonNumericFromString(str) {
    if (typeof str !== 'string' || !str) return '';

    return str.replace(/\D/g, '');
}
