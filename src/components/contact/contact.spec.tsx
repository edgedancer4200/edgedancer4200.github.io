import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Contact from '.'

const mockData = {
  email: 'cl.bs.xv@gmail.com',
  message: 'test message'
}

describe('send email', () => {
  it('Form can be submited & input field is modifiable', () => {
    const { getByPlaceholderText, getByText } = render(<Contact />)
    const email = getByPlaceholderText(/your email address/i)
    const message = getByPlaceholderText(/your message/i)

    fireEvent.change(email, { target: { value: mockData.email } })
    fireEvent.change(message, { target: { value: mockData.message } })
    fireEvent.click(getByText(/send message/i))
    fireEvent.submit(document.getElementsByTagName('form')[0])
  })
})
