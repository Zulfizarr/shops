const korzina_align=document.querySelector(".korzina_align")
const template=document.querySelector("template").content
const tovar_ul=document.querySelector(".tovars_ul")
const form=document.querySelector("form")
const input =document.querySelector(".search_input")
const select=document.querySelector(".select_filter")


let tovarlar=object.splice(0,1)
window.addEventListener("click",event=>{
if(event.target.matches(".korzina_btn")){
    korzina_align.classList.toggle("korzina_align_active")
    console.log("ishladi");
}else{
    korzina_align.classList.remove("korzina_align_active")
}
})
const handleProductRender= (arr)=>{
    tovar_ul.innerHTML=null
for(let i=0;i<arr.length;i++){
let clone=template.cloneNode(true)
let img=clone.querySelector("img")
img.src=arr[i].bigPoster
let name=clone.querySelector("h3")
name.textContent=arr[i].name
let model=clone.querySelector("p strong")
model.textContent=arr[i].model
let price=clone.querySelector("h4")
price.textContent=arr[i].price + "$"
tovar_ul.appendChild(clone)
}
}
handleProductRender(object)

const Errors=(text)=>{
    tovar_ul.innerHTML=null
    let li =document.createElement("li")
    let h1=document.createElement("h1")
    h1.appendChild(document.createTextNode(text))
    h1.classList.add("text-light","text-center")
    li.appendChild(h1)
    tovar_ul.appendChild(li)
}
let result=[]
const handleModel =(arr)=>{

for(let i=0; i<arr.length;i++){
if(!result.includes(arr[i].model)){
    result=[...result, arr[i].model]
}
   
}
return result
}
const handleCreateOptions=()=>{
    let natija=handleModel(object)
    for(let i=0; i<natija.length;i++){
        let option=document.createElement("option")
        option.value=natija[i]
        option.textContent=natija[i]
        select.appendChild( option)
    }
}
handleCreateOptions()
handleModel(object)
const handleSub=event=>{
    event.preventDefault()
    let filter=[]
    let rejex=new RegExp(input.value.trim(),"gi")
    
    if(select.value==="all"){
        filter=object
    }else{
        filter=object.filter((item)=>item.model===select.value)
    }
    if(input.value !=="all"){
        filter=filter.filter((item)=>item.name.match(rejex))
        
    }else{{
        filter     
    } }
    if(filter.length>=1){
        handleProductRender(filter)
    }else{
        Errors("mahsulot mavjud emas")
    }
    
    
    
}
form,addEventListener("submit",handleSub)