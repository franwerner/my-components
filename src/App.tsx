import SideBar from "./components/SideBar"


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
