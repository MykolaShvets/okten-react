import Joi from "joi";

export const CarValidator = Joi.object({
    model: Joi.string().regex(new RegExp('^[a-zA-ZА-яёЁіІїЇґҐ]{1,20}$')).required().messages({
        'string.empty' : 'You must write something',
        'string.pattern.base' : 'Write just letters. Max 20.'
    }),
    price: Joi.number().min(0).max(1000000).required().messages({
        'number.base' : 'Only numbers from 0 to 1000000',
        'number.min' : 'Price must be more then 0',
        'number.max' : 'Price must be less then 1000000'
    }),
    year: Joi.number().min(1900).max(new Date().getFullYear()).required().messages({
        'number.base' : 'Only numbers',
        'number.min' : 'Not older then 1900',
        'number.max' : 'Not newer then recent year'
    })
})
