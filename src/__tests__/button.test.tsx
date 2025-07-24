import { render, screen } from '@testing-library/react'
import { RiUserFill } from 'react-icons/ri'
import { describe, expect, test } from 'vitest'
import { Button } from '../components'
import { theme } from '../components/Themes'

const titleButton = 'Container'

describe('Testing button', () => {
  test('testing the props of button contanded children', () => {
    render(
      <Button color="primary" data-testid="button">
        {titleButton}
      </Button>,
    )
    const element = screen.getByTestId('button')
    expect(element.textContent).toBe(titleButton)
  })
  test('testing the props of button contanded and colors props', () => {
    render(
      <Button color="primary" data-testid="button">
        {titleButton}
      </Button>,
    )
    const element = screen.getByTestId('button')
    expect(element).toHaveStyle({ background: theme.colors.blue40, color: theme.colors.white })
  })
  test('testing the props of button outlined and colors props', () => {
    render(
      <Button color="primary" data-testid="button">
        {titleButton}
      </Button>,
    )
    const element = screen.getByTestId('button')
    expect(element).toHaveStyle({
      color: theme.colors.white,
      background: theme.colors.blue40,
    })
  })

  test('testing the props of button contanded and size small props', () => {
    render(
      <Button color="primary" size="small" data-testid="button">
        {titleButton}
      </Button>,
    )
    const element = screen.getByTestId('button')
    expect(element).toHaveStyle({ padding: '5px 20px' })
  })

  test('testing the props of button contanded and size small props', () => {
    render(
      <Button color="primary" size="medium" data-testid="button">
        {titleButton}
      </Button>,
    )
    const element = screen.getByTestId('button')
    expect(element).toHaveStyle({ padding: '8px 24px' })
  })
  test('testing the props of button disabled true', () => {
    render(
      <Button color="primary" disabled data-testid="button">
        {titleButton}
      </Button>,
    )
    const element = screen.getByTestId('button')
    expect(element.textContent).toBe(titleButton)
  })

  test('testing the props of button contanded and  icon props', () => {
    render(
      <Button color="primary" size="small" data-testid="button" icon={<RiUserFill />}>
        {titleButton}
      </Button>,
    )
    const element = screen.getByTestId('button')
    const elementSVG = element.querySelector('svg')
    expect(elementSVG).toBeInTheDocument()
    expect(elementSVG!.nodeName).toBe('svg')
  })

  test('testing the props of button contanded and  loading props', () => {
    render(
      <Button color="primary" loading data-testid="button" icon={<RiUserFill />}>
        {titleButton}
      </Button>,
    )
    const element = screen.getByTestId('button')

    const elementSVG = element.querySelector('.animateBx')
    expect(elementSVG).toBeInTheDocument()
    expect(elementSVG!.lastChild!.nodeName).toBe('svg')
  })
})
