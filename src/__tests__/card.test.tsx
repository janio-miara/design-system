import React from 'react'
import { render } from '@testing-library/react'
import { Card } from '../components'

describe('Component', () => {
  test('janio', () => {
    render(
      <Card>
        <div>Janio</div>
      </Card>,
    )
    const a = 1
    expect(a).toEqual(1)
  })
})
