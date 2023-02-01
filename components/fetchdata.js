async function fetchdata(){
    
    let res=await fetch("http://localhost:3000/products");
    let data=await res.json();
    // console.log(data);
    return data;
}
export default fetchdata();