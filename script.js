let form=document.querySelector("form");
let input=document.getElementById("inp1");
let apikey="TrDAD1lN8mGOLklrIF4_pHCq0-qCJzj8TFsFtiTN8aY"
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let inputvalue=input.value
    let fetchdata=async()=>{
    let data = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${inputvalue}&client_id=${apikey}`)
    let finaldata= await data.json()
    let finalresults= finaldata.results
    let section_two=document.getElementById("section_two")
    section_two.innerHTML=``
    finalresults.forEach((ele)=>
        {
        let imagepath=ele.urls.raw
        console.log(imagepath);
        section_two.innerHTML+=`<img src=${imagepath} class="finalimages">`
        })}
fetchdata()
})