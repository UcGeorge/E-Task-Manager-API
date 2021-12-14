'use strict'

const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } = require("firebase/auth");

const auth = getAuth();

exports.loginUser = function(req, res) {
    console.log("[POST] /login");
    signInWithEmailAndPassword(auth, req.body.email, req.body.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            res.status(200).json({ uid: user.uid })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            res.status(errorCode).json({
                message: errorMessage
            })
        });
};

exports.createUser = function(req, res) {
    console.log("[POST] /signup");
    createUserWithEmailAndPassword(auth, req.body.email, req.body.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            res.status(200).json({ uid: user.uid })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            res.status(errorCode).json({
                message: errorMessage
            })
        });
};