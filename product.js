const mongoose = require('mongoose');

const validator = require('validator');

const userSchema = mongoose.Schema({

    f_name: {
        type: String,
        minlength: [3, "length should be taken in 3 charcter"],

        validate: {
            validator: (value) => {
                if (value == "") {
                    throw new Error("f_name empty");
                }
            }
        }
    },
    l_name: {
        type: String,
        // required: true,
        validate: {
            validator: (value) => {
                if (value == "") {
                    throw new Error("l_name empty");
                }
            }
        }
    },
    contact: {
        type: String,
        //  required: true,
        validate: {
            validator: (value) => {
                if (value == "") {
                    throw new Error("Please field Contact Number");
                }
            }
        }
    },
    email: {
        type: String,
        // required: true,
        uniqe: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("email is invald");
            }
        }
    },
    password: {
        type: String,
        minlength: [6, "length should be taken in 6 charcter"],
        // required: true,
        validate: {
            validator: (value) => {
                if (value == "") {
                    throw new Error("password id incorrect.....");
                }
            }
        }
    },

    c_password: {
        type: String,
        // required: true,
    },

    new_password: {
        type: String,
        // required: true,
        minlength: [6, "length should be taken in 6 charcter"],
        // required: true,
        validate: {
            validator: (value) => {
                if (value == "") {
                    throw new Error("please enter correct password.....");
                }
            }
        }

    }
});
module.exports = mongoose.model("product", userSchema);