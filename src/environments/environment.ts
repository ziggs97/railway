// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyD_ullsJHH6V_AfM7Ks4BNeKdGDFmabaF4",
    authDomain: "railway-e7a4f.firebaseapp.com",
    projectId: "railway-e7a4f",
    storageBucket: "railway-e7a4f.appspot.com",
    messagingSenderId: "355700316135",
    appId: "1:355700316135:web:cd45b8e0595a5161cd8f42"
  }
};

firebase.initializeApp(environment.firebase);

// new base
// const firebaseConfig = {
  // apiKey: "AIzaSyCzQkDunxfP8L0-NyKA7EsMY4i1cfNedik",
  // authDomain: "railway-199ee.firebaseapp.com",
  // projectId: "railway-199ee",
  // storageBucket: "railway-199ee.appspot.com",
  // messagingSenderId: "155864245798",
  // appId: "1:155864245798:web:5a846b20a6689617f8a8e7"
// };

// Your web app's Firebase configuration
// export const firebaseConfig = {
//   apiKey: "AIzaSyDpluAKWPma5VjiowKseEI5uQoHqozL0sA",
//   authDomain: "railway-app-f8813.firebaseapp.com",
//   projectId: "railway-app-f8813",
//   storageBucket: "railway-app-f8813.appspot.com",
//   messagingSenderId: "288969398990",
//   appId: "1:288969398990:web:9544732ed853906d738e9f"
// };


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
