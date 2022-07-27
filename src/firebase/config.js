import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAVUNwdJ0uTUXFC-JeDLT-SU2cuP3mzUJc',
	authDomain: 'ky-arts.firebaseapp.com',
	projectId: 'ky-arts',
	storageBucket: 'ky-arts.appspot.com',
	messagingSenderId: '415708548248',
	appId: '1:415708548248:web:f1bcfe0298029c16ced4ed',
};

// init firebase
initializeApp(firebaseConfig);

// init services
const dbKyArts = getFirestore();

export { dbKyArts };
