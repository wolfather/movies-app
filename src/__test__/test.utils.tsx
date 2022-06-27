import React, {FC, ReactElement} from 'react'
import {render, RenderOptions} from '@testing-library/react'
import {Providers} from '../providers';

const AllProviders: FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <Providers>
        {children}
    </Providers>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: AllProviders, ...options})

export * from '@testing-library/react'
export {customRender as render}