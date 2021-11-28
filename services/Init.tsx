import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCnEilfCViExKg3i9rs6yA69Znfr6WNUgM",
    authDomain: "carregcheckrn.firebaseapp.com",
    projectId: "carregcheckrn",
    storageBucket: "carregcheckrn.appspot.com",
    messagingSenderId: "878757010015",
    appId: "1:878757010015:web:48abce7122b4858cb759ea",
    measurementId: "G-5YGGQV7QZR"
};
const app = initializeApp(firebaseConfig);
module.exports = {
    app
}