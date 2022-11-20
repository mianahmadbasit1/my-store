import Link from "next/link";
//client side 
const Home = (prop) => {
  return (
    <div>
      Welcome to Next js <br/>
      <h2>{prop.message}</h2>
      <Link href="/product">
      
        Go to Product 

      </Link>
    <style jsx>

{
  `
  h2{
    color:red;
    
    
    
  }`
}


    </style>
    </div>
  );
};

//server side 

export async function getStaticProps(context) {
 const res = await fetch('http://localhost:3000/api/test')
  const data  =await res.json()
  console.log(data)
  return {
    props: {message:data.message}, // will be passed to the page component as props
  }
}

export default Home;
