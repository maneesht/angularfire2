export const COMMON_CONFIG = {
    apiKey: 'AIzaSyBVSy3YpkVGiKXbbxeK0qBnu3-MNZ9UIjA',
    authDomain: 'angularfire2-test.firebaseapp.com',
    databaseURL: 'https://angularfire2-test.firebaseio.com',
    projectId: 'angularfire2-test',
    storageBucket: 'angularfire2-test.appspot.com',
    messagingSenderId: '920323787688',
    appId: '1:920323787688:web:2253a0e5eb5b9a8b',
    databaseName: 'angularfire2-test',
    measurementId: 'G-W20QDV5CZP'
};

export const COMMON_CONFIG_TOO = {
    apiKey: 'AIzaSyBVSy3YpkVGiKXbbxeK0qBnu3-MNZ9UIjA',
    authDomain: 'angularfire2-test.firebaseapp.com',
    databaseURL: 'https://angularfire2-test.firebaseio.com',
    projectId: 'angularfire2-test',
    storageBucket: 'angularfire2-test.appspot.com',
    messagingSenderId: '920323787688',
    appId: '1:920323787688:web:2253a0e5eb5b9a8d',
    databaseName: 'angularfire2-test',
    measurementId: 'G-W20QDV5CZZ'
};

declare global {
  interface Window {
    __karma__ : {
        config: {
            args: any[]
        }
    };
  }
}

export const firestoreEmulatorPort: number = window.__karma__.config.args.find((it) => it[0] === "FIRESTORE_EMULATOR_PORT")[1];
export const storageEmulatorPort: number = window.__karma__.config.args.find((it) => it[0] === "STORAGE_EMULATOR_PORT")[1];
export const authEmulatorPort: number = window.__karma__.config.args.find((it) => it[0] === "AUTH_EMULATOR_PORT")[1];
export const databaseEmulatorPort: number = window.__karma__.config.args.find((it) => it[0] === "DATABASE_EMULATOR_PORT")[1];
export const functionsEmulatorPort: number = window.__karma__.config.args.find((it) => it[0] === "FUNCTIONS_EMULATOR_PORT")[1];
