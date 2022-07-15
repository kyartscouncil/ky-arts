import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAVUNwdJ0uTUXFC-JeDLT-SU2cuP3mzUJc',
	authDomain: 'ky-arts.firebaseapp.com',
	projectId: 'ky-arts',
	storageBucket: 'ky-arts.appspot.com',
	messagingSenderId: '415708548248',
	appId: '1:415708548248:web:f1bcfe0298029c16ced4ed',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = firebase.firestore();

export { projectFirestore };
