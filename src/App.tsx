import { BreakPointObserver } from "responsive-component"
import SideBar from "./components/SideBar"
import { useEffect } from "react"


function App() {

  return (
    <>
    <SideBar offCanvas={{
      show : true,
      breakpoint : "md",
      onClose : () => {}
    }}>
      <SideBar.Header >
        <SideBar.Title>GG</SideBar.Title>
      </SideBar.Header>
    </SideBar>
    </>
  )
}

export default App
