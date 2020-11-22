const amigos=[]
while (true) {
    let nombre=prompt("Miguel Perez")
    if(nombre !=="fin")
    {amigos.push(nombre)}
    else{break;} 
}
console.table(amigos);
