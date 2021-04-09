import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    eMail: yup.string().required().email(),
    passWord: yup.string().required()
})

export const registerSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(15).required(),
    Cpassword: yup.string().oneOf([yup.ref('password'), null]),
    phoneNo: yup.number().required().typeError()
})

export const contactusSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required().email(),
    subject: yup.string().required(),
    message: yup.string().required().min(6)
})
