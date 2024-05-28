import MainHeader from '../_components/main-header'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <MainHeader />
      <main className="pt-navHeight">{children}</main>
    </>
  )
}
