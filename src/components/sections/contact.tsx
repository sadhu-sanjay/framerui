'use client'

import { motion } from 'framer-motion';
import { Heading } from '../atoms/Heading';
import AnimateUp from '~/common/BaseAnimation';
import CTA from '../atoms/CTA';
import { Button } from '../atoms/button';


export const ContactForm = () => {

    return (
        <section>
            <div className='py-24 px-10 md:px-36 md:py-24'>
                <AnimateUp margin='300px' >
                    <form>
                        <div className='flex flex-col place-items-center'>
                            <div className='pt-0 p-10 w-full'>
                                <Heading text='Contact' />
                            </div>
                            <div className='w-full max-w-[540px] grid gap-3'>
                                {fields.map((field, index) => (
                                    <Field key={index} {...field} />
                                ))}
                                <Button text='Send' />
                            </div>
                        </div>
                    </form >
                </AnimateUp>
            </div>
        </section >
    );
}

interface FieldStructure {
    name: string;
    value: string;
    type: string;
    placeholder: string;
    required: boolean;
}

const fields = [
    {
        name: 'name',
        value: 'Sanjay',
        type: 'text',
        placeholder: 'FirstName',
        required: true,
        order: 1
    },
    {
        name: 'email',
        value: 'sanay@gmail.com.com',
        type: 'text',
        placeholder: 'Email',
        required: true,
        order: 2
    },
    {
        name: 'message',
        value: 'Hi! This is Sanjay Goswami.. How are you doing? I am fine. Thanks',
        type: 'textarea',
        placeholder: 'Message',
        required: true,
        order: 3
    },
];

const Field = ({ name, value, type, placeholder, required }: FieldStructure) => {

    if (type == 'textarea') {
        return <textarea
            name={name}
            placeholder={placeholder}
            className='text-base text-gray-700 dark:text-gray-200 w-full p-4 rounded-md'
            required={required}
            rows={5}
            value={value}
        />
    }

    return <input
        name={name}
        placeholder={placeholder}
        className='text-base text-gray-700 dark:text-gray-200 w-full p-4 rounded-md'
        required={required}
        value={value}
    />
}