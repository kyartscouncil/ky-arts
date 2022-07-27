import { ref, watchEffect } from 'vue';

// firebase imports
import { dbKyArts } from '../firebase/config';
import { collection, onSnapshot } from 'firebase/firestore';

const getCollection = (c) => {
	const documents = ref(null);

	// collection reference
	let colRef = collection(dbKyArts, c);

	// realtime listener
	const unsub = onSnapshot(colRef, (snapshot) => {
		let results = [];
		snapshot.docs.forEach((doc) => {
			results.push({ ...doc.data(), id: doc.id });
		});

		// update values
		documents.value = results;
	});

	watchEffect((onInvalidate) => {
		onInvalidate(() => unsub());
	});

	return { documents };
};

export default getCollection;
