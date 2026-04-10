

import * as React from 'react';
import { render } from '@testing-library/react';
import 'jest-canvas-mock';
//import { AnkThemeProvider } from '../src/provider';
import { Input } from '../src/components';
import { PageView } from '../src/view';



describe('Common render', () => {
  it('renders without crashing', () => {

    render(
      <PageView>
        <Input />
      </PageView>
    )
  })
})
