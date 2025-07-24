import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
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
