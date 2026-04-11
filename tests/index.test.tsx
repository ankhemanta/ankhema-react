import * as React from 'react'
import { render } from '@testing-library/react'
import 'jest-canvas-mock'
import { AnkThemeProvider } from '../src/provider'
import { Input, PageView } from '../src'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(
      <AnkThemeProvider>
        <PageView>
          <Input />
        </PageView>
      </AnkThemeProvider>,
    )
  })
})
