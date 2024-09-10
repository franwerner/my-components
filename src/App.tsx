import { BreakPointProvider, BreakPointsControls, ThemeProvider,createContextTheme } from "responsive-component"
import SideBar from "./components/SideBar"
import palette from "./constant/palette.constant"
import { useContext } from "react"


const theme = createContextTheme({color : "f"})

const theme2 = theme.extenedTheme(palette)


const GG = () => {

  const g = useContext(theme2.context)
}


function App() {

  return (
    <>
      <ThemeProvider theme={theme2} >
        <BreakPointProvider>
          <BreakPointsControls>
            <SideBar offCanvas={{
              show: true,
              breakpoint: "md"
            }}>
              adadds
            </SideBar>
          </BreakPointsControls>
        </BreakPointProvider>
      </ThemeProvider>
    </>
  )
}

export default App
