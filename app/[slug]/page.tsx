
const Slug = ({params}: {params : {slug : string}}) => {
  return (    // params me humne property declare ke which name is slug ans its type is string this is same like a object 
    // <div>Hello world from : {params.slug}</div>    or
    // OR
    <main> 
     <p className="bg-orange-400">{params.slug}</p>   
    </main>
  )
}

export default Slug