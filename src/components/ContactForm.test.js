import React from 'react'
import {render,screen,fireEvent} from '@testing-library/react'
import ContactForm from './ContactForm'


    test('Contact form renders without errors', () => {
        render(<ContactForm/>)
    })

    test('checking form input', () => {
        render(<ContactForm/>)

        const firstName = screen.getByLabelText(/First Name/i)
        const lastName = screen.getByLabelText(/Last Name/i)
        const email = screen.getByLabelText(/Email/i)

        fireEvent.change(firstName,{target:{name: 'firstName', value: 'Gabby'}})
        fireEvent.change(lastName,{target:{name: 'lastName', value: 'Vicas'}})
        fireEvent.change(email,{target:{name: 'email', value: 'gabbyvicas@gmail.com'}})

    const newName = screen.getByText(/Gabby/i)
    expect(newName).toBeTruthy()
    const newLastName = screen.getByText(/Vicas/i)
    expect(newLastName).toBeTruthy()
    const newEmail = screen.getByDisplayValue(/gabbyvicas@gmail.com/i)
    expect(newEmail).toBeTruthy()
    })

    test('checking for submit to work', () => {
        render(<ContactForm/>)
        
        const firstName = screen.getByLabelText(/First Name/i)
        const lastName = screen.getByLabelText(/Last Name/i)
        const email = screen.getByLabelText(/Email/i)
        const submit = screen.getByTestId('/submit/i')
                    
    })