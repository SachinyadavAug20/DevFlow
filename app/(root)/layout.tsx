import Navbar from "@/components/navigation/navbar"

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
    <Navbar/>
    <div>{children}</div>
    </>
  )
}

export default layout
