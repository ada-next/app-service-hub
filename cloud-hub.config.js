const path = require("path");
const MemoryStore = require("ada-cloud-hub/lib/store/memory");
const MemoryCache = require("ada-cloud-hub/lib/cache/memory");

module.exports = {
    server: {
        port: 6080,
        host: "127.0.0.1"
    },
    broker: {
        storeType: MemoryStore,
        storeOption: {},
        maxTime: 5000
    },
    cache: {
        cacheType: MemoryCache,
        cacheOption: {},
        maxTime: 20000,
        interval: 3000
    },
    manager: {
        timeout: 5000,
        interval: 500
    },
    rsa: {
        privateKey: path.resolve(__dirname, './keys/rsa.private'),
        publicKey: path.resolve(__dirname, './keys/rsa.public')
    },
    clients: {
        test: '123456'
    }
};