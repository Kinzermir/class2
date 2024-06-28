import Link from 'next/link'

export default function Any() {
  return (
    <>
    <Link href={"/"}>Home</Link> <Link href={"/settings"}>settings</Link>
    <div>
        <h1>Setiings</h1>
        <p>This is the setting page where you can customize your page</p>
    </div>
    </>
  )
}
