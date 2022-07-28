import { ref, watchEffect } from 'vue';

// firebase imports
import { dbKyArts } from '../firebase/config';
import { collection, doc, onSnapshot } from 'firebase/firestore';

const getDocument = (c, id) => {
	const document = ref(null);
	const error = ref(null);

	// collection reference
	let documentRef = collection(dbKyArts, c).doc(id);

	// realtime listener
	const unsub = onSnapshot(
		documentRef,
		(thedoc) => {
			if (thedoc.data()) {
				document.value = { ...thedoc.data(), id: thedoc.id };
				error.value = null;
			} else {
				error.value = 'Document not found';
			}
		},
		(err) => {
			console.log(err.message);
			error.value = 'could not find document';
		}
	);

	watchEffect((onInvalidate) => {
		onInvalidate(() => unsub());
	});

	return { document, error };
};

export default getDocument;
