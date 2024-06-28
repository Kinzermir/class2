import Link from "next/link";

export default function Page() {
    return (
      <>
       <div className="flex gap-2">
       <Link href={"/ "}>Home</Link>
       <Link href={"/ purchase"}>purchse</Link>
       </div>

      <div>
          <h1>Welcome to purchse page</h1>
          <p>Find great deals and explore our collection of products!</p>
      </div>
      </>
     
    )
  }
  