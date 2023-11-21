import { render, screen } from '@testing-library/react'
import Home from '../page'
import '@testing-library/jest-dom'
 
describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)
 
    const heading = screen.getByText('Card Title')
 
    expect(heading).toBeInTheDocument()
  })
})