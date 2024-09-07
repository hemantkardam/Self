let adj = {
    1:"crazy",
    2:"Amazing",
    3:"Fire"
}
let shopName = {
    1:"engine",
    2:"Foods",
    3:"Garments"
}
let AnotherWord = {
    1:"Bros",
    2:"Limited",
    3:"Hub"
}

let a = Math.random();
console.log(a);
if(a>0.1 && a<0.2){
    console.log(`${adj[1]} ${shopName[1]} ${AnotherWord[1]}`)
}
else if(a>0.2 && a<0.3){
    console.log(`${adj[1]} ${shopName[1]} ${AnotherWord[2]}`)
}
else if(a>0.3 && a<0.4){
    console.log(`${adj[1]} ${shopName[1]} ${AnotherWord[3]}`)
}
else if(a>0.4 && a<0.5){
    console.log(`${adj[1]} ${shopName[2]} ${AnotherWord[1]}`)
}
else if(a>0.5 && a<0.6){
    console.log(`${adj[1]} ${shopName[2]} ${AnotherWord[2]}`)
}
else if(a>0.6 && a<0.7){
    console.log(`${adj[1]} ${shopName[2]} ${AnotherWord[3]}`)
}
else if(a>0.7 && a<0.8){
    console.log(`${adj[1]} ${shopName[3]} ${AnotherWord[1]}`)
}
else if(a>0.8 && a<0.9){
    console.log(`${adj[1]} ${shopName[3]} ${AnotherWord[2]}`)
}
else if(a>0.05 && a<0.1){
    console.log(`${adj[1]} ${shopName[3]} ${AnotherWord[3]}`)
}
else if(a>0.005 && a<0.05){
    console.log(`${adj[3]} ${shopName[1]} ${AnotherWord[1]}`)
}
else if(a>0.9 && a<0.99){
    console.log(`${adj[3]} ${shopName[1]} ${AnotherWord[2]}`)
}
else if(a>0.0005 && a<0.005){
    console.log(`${adj[3]} ${shopName[1]} ${AnotherWord[3]}`)
}
else if(a>0.00005 && a<0.0005){
    console.log(`${adj[3]} ${shopName[2]} ${AnotherWord[1]}`)
}
else if(a>0.99 && a<1.0){
    console.log(`${adj[3]} ${shopName[2]} ${AnotherWord[2]}`)
}