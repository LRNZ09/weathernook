import { RouterProvider } from '@tanstack/react-router'
import router from './router'
import { CssBaseline, GlobalStyles } from '@mui/material'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'

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
    <>
      <CssVarsProvider defaultMode='system'>
        <CssBaseline /> {/* CssBaseline must come first */}
        {globalStyles}
        <RouterProvider router={router} />
      </CssVarsProvider>
    </>
  )
}

export default App
