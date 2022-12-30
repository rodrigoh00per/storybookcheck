import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Card from './Card'

describe('Card Test', () => {
  it('render card', () => {
    render(<Card title='title card test' />)

    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(screen.getByText('title card test')).toBeInTheDocument()
  })
})
