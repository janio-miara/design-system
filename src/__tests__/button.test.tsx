import React from 'react'
import { render, screen } from '@testing-library/react'
import { RiUserFill } from 'react-icons/ri'
import { Button } from '../components'
import { theme } from '../components/Themes'

const titleButton = 'Container'

describe('Testing button', () => {
  test('testing the props of button contanded children', () => {
    render(
      <Button color="primary" data-test-id="button">
        {titleButton}
      </Button>,
    )
    const element = screen.getByTestId('button')
    expect(element.textContent).toBe(titleButton)
  })
  test('testing the props of button contanded and colors props', () => {
    render(
      <Button color="primary" data-test-id="button">
        {titleButton}
      </Button>,
    )
    const element = screen.getByTestId('button')
    expect(element).toHaveStyle({ background: theme.colors.blue50, color: theme.colors.white })
  })
  test('testing the props of button outlined and colors props', () => {
    render(
      <Button color="primary" outlined data-test-id="button">
        {titleButton}
      </Button>,
    )
    const element = screen.getByTestId('button')
    expect(element).toHaveStyle({
      color: theme.colors.blue60,
      background: theme.colors.blue10,
      borderColor: theme.colors.blue50,
    })
  })

  test('testing the props of button contanded and size small props', () => {
    render(
      <Button color="primary" size="small" data-test-id="button">
        {titleButton}
      </Button>,
    )
    const element = screen.getByTestId('button')
    expect(element).toHaveStyle({ fontSize: '12px' })
  })

  test('testing the props of button contanded and size small props', () => {
    render(
      <Button color="primary" size="medium" data-test-id="button">
        {titleButton}
      </Button>,
    )
    const element = screen.getByTestId('button')
    expect(element).toHaveStyle({ fontSize: '14px' })
  })
  test('testing the props of button disabled true', () => {
    render(
      <Button color="primary" disabled data-test-id="button">
        {titleButton}
      </Button>,
    )
    const element = screen.getByTestId('button')
    expect(element.textContent).toBe(titleButton)
  })

  test('testing the props of button contanded and  icon props', () => {
    render(
      <Button color="primary" size="small" data-test-id="button" icon={<RiUserFill />}>
        {titleButton}
      </Button>,
    )
    const element = screen.getByTestId('button')
    const elementSVG = element.querySelector('.icon-button') as any
    expect(elementSVG).toBeInTheDocument()
    expect(elementSVG.lastChild.nodeName).toBe('svg')
  })

  test('testing the props of button contanded and  loading props', () => {
    render(
      <Button color="primary" loading data-test-id="button" icon={<RiUserFill />}>
        {titleButton}
      </Button>,
    )
    const element = screen.getByTestId('button')
    const elementSVG = element.querySelector('.spinner') as any
    expect(elementSVG).toBeInTheDocument()
    expect(elementSVG.lastChild.nodeName).toBe('svg')
  })
})
