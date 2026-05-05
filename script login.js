// بيانات Firebase الخاصة بمشروعك (انسخها من Console Firebase)
const firebaseConfig = {
    apiKey: "ضع_هنا_API_KEY",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:12345:web:abcde"
};

// تشغيل Firebase
firebase.initializeApp(firebaseConfig);

const loginBtn = document.getElementById('loginBtn');
const errorMsg = document.getElementById('error');

loginBtn.addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // إذا نجح الدخول يروح لصفحة السلاح
        window.location.href = "weapon-page.html";
    })
    .catch((error) => {
        errorMsg.style.display = "block";
        errorMsg.innerText = "تأكد من صحة البيانات";
    });
});
