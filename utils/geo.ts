export default function isUserInIndia(ipAddress: string) {
    // Fake for testing
    if (ipAddress == '222.252.18.109' || ipAddress == '222.252.18.217' || ipAddress == '14.248.80.153') {
        return true;
    }

    const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;

    // Check if the IP address is a valid IPv4 address
    if (!ipv4Regex.test(ipAddress)) {
        return;
    }

    // Convert the IP address to a number
    const ipNum = ipAddress.split('.')
        .reduce((acc, octet, index) => acc + parseInt(octet) * Math.pow(256, 3 - index), 0);

    // Check if the IP address falls within one of India's IP address ranges
    const indiaRanges = [
        { start: 167772160, end: 184549375 },   // 10.0.0.0 - 10.255.255.255
        { start: 2886729728, end: 2887778303 }, // 172.16.0.0 - 172.31.255.255
        { start: 3232235520, end: 3232301055 }  // 192.168.0.0 - 192.168.255.255
    ];

    const isIndiaIp = indiaRanges.some(range => ipNum >= range.start && ipNum <= range.end);

    if (isIndiaIp) {
        return true;
    }

    return false;
}
