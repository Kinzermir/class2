import Link from "next/link";

export default function Page() {
  return (
    <>
      <div style={{display:"flex", gap:"10px"}}>
      <Link href={"/"}>Home</Link>
      <Link href={"/settings"}>settings</Link>
      <Link href={"/purchase"}>purchse</Link>
      </div>
      <div>
        <h1>Welcome to My Grocery list</h1>
        <p>Here's what you need for next shopping trip</p>
        <ul>
          <li>Apple</li>
          <li>Bananas</li>
          <li>Bread</li>
          <li>Eggs</li>
          <li>Chicken</li>
        </ul>
        <p>Make sure to grab these items from the store</p>
      </div>
    </>
  );
}
