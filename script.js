"use strict"

let dogs=[]
let dogsContainer = document.getElementById("dogs-ids")


dogs.push({name:"Fluffy",breed:"Poodle",age:6,location:"Leeds",picture:"https://vetstreet.brightspotcdn.com/dims4/default/b5fcb62/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F38%2Fec%2Ffd4eecbe4f57a282b707f097ef33%2Fpoodle-ap-1j99ae-645-x-380.jpg"})
dogs.push({name:"Otto",breed:"Chihuahua",age:4,location:"London",picture:"https://vetstreet.brightspotcdn.com/dims4/default/514331d/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F26%2F0d%2F6443c92b4c67ae315a8bb8be16e1%2FChihuahua-AP-KIDP62-645lc061113.jpg"})
dogs.push({name:"Alfie",breed:"French Bulldog",location:"York",age:12,picture:"https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/31120615/French-Bulldog-standing-in-profile-outdoors-in-the-fall.jpg"})
dogs.push({name:"Teddy",breed:"Cavapoo",age:5,location:"Manchester",picture:"https://www.knowyourdoodles.com/wp-content/uploads/2021/04/Cavapoo-Breed-Guide-FI-scaled.jpg"})
dogs.push({name:"Fido",breed:"Labrador",age:8,location:"London",picture:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Labrador_on_Quantock_%282175262184%29.jpg/1200px-Labrador_on_Quantock_%282175262184%29.jpg"})
dogs.push({name:"Ruby",breed:"Alsatian",age:6,location:"Sheffield",picture:"https://www.mediastorehouse.com.au/p/172/dog-german-shepherd-alsatian-field-1453307.jpg.webp"})

//6 dogs - on 300*400 pixel cards (with nice padding and margins, and a nice background colour)
// An image for each dog
// Display Breed
// Add an age property for every dog
// add an 'Adopt Now' button on each dog

for(let i=0;i<dogs.length;i++){
    let IDdiv = document.createElement("div")
    IDdiv.setAttribute("class", "IDCard")
    dogsContainer.appendChild(IDdiv)

    let dogHeader=document.createElement("div")
    dogHeader.setAttribute("class", "Header")
    IDdiv.appendChild(dogHeader)

    let dogPicture = document.createElement("img")
    dogPicture.setAttribute("id", `${dogs[i].name}`)
    IDdiv.appendChild(dogPicture)
    dogPicture.src = dogs[i].picture
    
    let dogName = document.createElement("h1")
    dogName.setAttribute("class", "dogName")
    dogHeader.appendChild(dogName)
    dogName.innerHTML = `${dogs[i].name}`
    
    let dogInfo = document.createElement("div")
    dogInfo.setAttribute("class", "dogInfo")
    IDdiv.appendChild(dogInfo)
    
    let para = document.createElement("p")
    dogInfo.appendChild(para)
    para.innerHTML = `Breed: ${dogs[i].breed}<br> Age: ${dogs[i].age}<br> Location: ${dogs[i].location}`

    let adoptButton = document.createElement("button")
    adoptButton.setAttribute("class", "adopt")
    IDdiv.appendChild(adoptButton)
    adoptButton.setAttribute("type", "button")
    adoptButton.innerHTML = "Adopt me!"
    

}

