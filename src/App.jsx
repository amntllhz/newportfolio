import { TooltipProvider } from "./components/ui/tooltip"
import { ThemeProvider } from "./components/theme-provider"
import Home from "./pages/home"

function App() {  

  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <TooltipProvider>
          <Home />   
        </TooltipProvider>
      </ThemeProvider> 
    </>
  )
}

export default App
