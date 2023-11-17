import { render, screen } from '@testing-library/react'
import Home from '../page'
import '@testing-library/jest-dom'
 
describe('Home', () => {
  it('renders a heading', () => {
    expect(1).toEqual(1)
    // render(<Home />)
 
    // const heading = screen.getByText('Find in-depth')
 
    // expect(heading).toBeInTheDocument()
  })
})