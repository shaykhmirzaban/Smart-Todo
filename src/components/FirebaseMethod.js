import { app } from "./FirebaseConfig.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";

const auth = getAuth(app);

const signUpUser = (obj) => {
  let { email, password } = obj;
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        const db = getDatabase();

        set(ref(db, `users/${user.uid}`), {
          password: password,
          email: email,
          userName: "Shaykh Mirzaban",
          contact: "03342675118712"
        })
          .then((_) => resolve(`successfuly data is transfer`))
          .catch((_) => reject(`Data is not going`));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        reject(errorCode, errorMessage);
        // console.log(errorMessage, errorCode);
      });
  });
};

const loginUser = (obj) => {
  let { email, password } = obj;
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        const db = getDatabase();
        const reference = ref(db, `users/${user.uid}`);
        onValue(reference, (snapshot) => {
          const data = snapshot.val();
          let asd = snapshot.exists();
          if (asd) {
            resolve(data);
          } else {
            reject("DATA NOT FOUND");
          }
          // updateStarCount(postElement, data);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        // console.log(errorCode, errorMessage);
        reject(errorCode, errorMessage);
      });
  });
};

export { signUpUser, loginUser };
