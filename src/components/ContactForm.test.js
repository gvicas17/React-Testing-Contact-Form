import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import ContactForm from './ContactForm'

describe('Tests ContactForm ', () => {
    test('App renders without erros', () => {
        render(<ContactForm/>)
    })
})

test('checking for inputs', () => {
    render (<ContactForm/>)

    const firstName = screen.getByPlaceholderText(/edd/i);
    const lastName = screen.getByPlaceholderText(/Burke/i);
    const email = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i)
    const message = screen.getAllByPlaceholderText(/message/i)

    fireEvent.change(firstName, {target: {name:'firstName', value: 'Gabby'}})
    fireEvent.change(lastName, {target: {name:'lastName', value: 'Vicas'}})
    fireEvent.change(email, {target: {name:'email', value: 'gv@gmail.com' }})
    fireEvent.change(message, {target: {name: 'message', value: 'Hello World'}})
    
    const newName = screen.getByDisplayValue(/Gabby/i)
    const newLastName = screen.getByDisplayValue(/Vicas/i)
    const newEmail = screen.getByDisplayValue(/gv@gmail.com/i)
    const newMessage = screen.getByDisplayValue(/Hello World/i)
})