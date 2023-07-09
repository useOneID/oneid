const firebaseConfig = {
      apiKey: "AIzaSyDjG-bI38x6r_gUZdC27BLpC-iwebI4Gmo",
      authDomain: "zymono-oneid.firebaseapp.com",
      projectId: "zymono-oneid",
      storageBucket: "zymono-oneid.appspot.com",
      messagingSenderId: "10175385420",
      appId: "1:10175385420:web:8a04ac66e17ded69ef89e9"
    };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  function saveCloud(where, what) {
  var sr = where

  const storage = firebase.storage();
  const storageRef = firebase.storage().ref(sr);

  storageRef.putString(what).then((snapshot) => {
    console.log(where);
  })
}

if (!window.localStorage.getItem('email')) {
  window.location = '/login/'
}

let pass;

if (!window.sessionStorage.getItem('pass')) {
  const p = window.prompt('Enter your password', '')
  if (p !== null && p !== '') {
    pass = p
    window.sessionStorage.setItem('pass', window.btoa(window.btoa(p)))
  }
}

let user;
pass = window.atob(window.atob(window.sessionStorage.getItem('pass')))

firebase.auth().signInWithEmailAndPassword(window.localStorage.getItem('email'), pass)
    .then(function(userCredential) {
      // Signup successful
      var user1 = userCredential.user;
      user = user1;

      var storage = firebase.storage();
// var storageRef = storage.ref();
      try {
var storageRef = storage.ref().child('id/' + user1.uid + '/pfp');
  
  storageRef.getDownloadURL()
  .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'

    // This can be downloaded directly:
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'text';
    xhr.onload = (event) => {
      var blob = xhr.responseText;
      console.log(blob)
      document.getElementById('img').src = blob

      var storageRef = storage.ref().child('id/' + user1.uid + '/name');
  
  storageRef.getDownloadURL()
  .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'

    // This can be downloaded directly:
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'text';
    xhr.onload = (event) => {
      var blob = xhr.responseText;
      console.log(blob)
      document.getElementById('name').innerText = blob

      var storageRef = storage.ref().child('id/' + user1.uid + '/desc');
  
  storageRef.getDownloadURL()
  .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'

    // This can be downloaded directly:
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'text';
    xhr.onload = (event) => {
      var blob = xhr.responseText;
      console.log(blob)
      document.getElementById('desc').innerText = blob

      var storageRef = storage.ref().child('id/' + user1.uid + '/uid');
  
  storageRef.getDownloadURL()
  .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'

    // This can be downloaded directly:
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'text';
    xhr.onload = (event) => {
      var blob = xhr.responseText;
      console.log(blob)
      document.getElementById('uid').innerText = blob

      document.getElementById('loading').remove()

      if (new URLSearchParams(location.search).get('img')) {
  document.getElementById('img').src = new URLSearchParams(location.search).get('img')
}
      
    };
    xhr.open('GET', url);
    xhr.send();

    // Or inserted into an <img> element
    
  })
  .catch((error) => {
    // Handle any errors
  });
      
    };
    xhr.open('GET', url);
    xhr.send();

    // Or inserted into an <img> element
    
  })
  .catch((error) => {
    // Handle any errors
  });
    };
    xhr.open('GET', url);
    xhr.send();

    // Or inserted into an <img> element
    
  })
  .catch((error) => {
    // Handle any errors
  });
    };
    xhr.open('GET', url);
    xhr.send();

    // Or inserted into an <img> element
    
  })
  .catch((error) => {
    // Handle any errors
    document.getElementById('loading').remove()
  });

      } catch (error) {
          document.getElementById('loading').remove()
        }

    })
    .catch(function(error) {
      // Signup failed
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);

        const p = window.prompt('Enter your password', '')
  if (p !== null && p !== '') {
    pass = p
    window.sessionStorage.setItem('pass', window.btoa(window.btoa(p)))

    location.reload()
  }
    });

function editLink(platform) {
  if (platform == 'codepen') {
    const prompt = window.prompt(`Please enter your ${platform} URL`, `E.g. https://${platform}.io/oneid`)

    if (prompt) {
    saveCloud(`id/${user.uid}/${platform}`, prompt)
  }
  } else if (platform == 'general') {
    const prompt = window.prompt(`Please enter any URL`, `E.g. https://zymono.com`)

    if (prompt) {
    saveCloud(`id/${user.uid}/${platform}`, prompt)
  }
  } else {
    const prompt = window.prompt(`Please enter your ${platform} URL`, `E.g. https://${platform}.com/oneid`)

    if (prompt) {
    saveCloud(`id/${user.uid}/${platform}`, prompt)
  }
  }
}

function submit() {
  saveCloud(`id/${user.uid}/desc`, String(document.getElementById('desc').innerText))
  saveCloud(`id/${user.uid}/name`, String(document.getElementById('name').innerText))
  saveCloud(`id/${user.uid}/pfp`, String(document.getElementById('img').src))
}