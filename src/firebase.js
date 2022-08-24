import { initializeApp} from 'firebase/app';
import { getFirestore} from 'firebase/firestore';
import { getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDQghJjjJJmYfIXuf5IZWu43EoruKssUE0",
    authDomain: "linked-clones.firebaseapp.com",
    projectId: "linked-clones",
    storageBucket: "linked-clones.appspot.com",
    messagingSenderId: "36917991480",
    appId: "1:36917991480:web:d409f93b7dff266adfaecd",
    measurementId: "G-CSDLC22X4Q"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
  export { app ,db , auth};