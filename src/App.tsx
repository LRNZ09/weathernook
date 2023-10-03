import { RouterProvider } from '@tanstack/react-router'
import router from './router'
import { CssBaseline, GlobalStyles } from '@mui/material'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './router/queryClient'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

/**
 * * It is a good practice to hoist the <GlobalStyles /> to a static constant,
 * to avoid rerendering. This will ensure that the <style> tag generated would
 * not recalculate on each render.
 * @see {@link https://mui.com/material-ui/customization/how-to-customize/#4-global-css-override}
 */
const globalStyles = (
  <GlobalStyles
    styles={{
      a: {
        color: 'inherit',
        textDecorationLine: 'inherit',
      },
    }}
  />
)

const App = () => {
  return (
    <CssVarsProvider defaultMode='system'>
      <CssBaseline /> {/* CssBaseline must come first */}
      {globalStyles}
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools panelPosition='right' position='bottom-right' />
      </QueryClientProvider>
    </CssVarsProvider>
  )
}

export default App
