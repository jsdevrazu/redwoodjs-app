import Navbar from 'src/components/Navbar'

type AppLayoutProps = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Navbar />
      <main className="layout_padding">{children}</main>
    </>
  )
}

export default AppLayout
