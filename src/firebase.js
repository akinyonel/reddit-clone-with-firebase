import firebase from 'firebase';


const config = {
  apiKey: 'AIzaSyAuhfHQFsSEh3ab623xxQt_6hAR3MZ5-Os',
  authDomain: 'test-project-eab6a.firebaseapp.com',
  databaseURL: 'https://test-project-eab6a.firebaseio.com',
  projectId: 'test-project-eab6a',
  storageBucket: 'test-project-eab6a.appspot.com',
  messagingSenderId: '235433513071',
};

firebase.initializeApp(config);

export default firebase;
