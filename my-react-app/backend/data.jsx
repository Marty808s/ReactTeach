function getData(){
    fetch('https://catfact.ninja/fact')
    .then(response=>{
        if (response.ok){
            // Pokud je vše OK, tak vrátím data z API
            var data = response.json();
            return data;
        }
        else{
            // Vytvořím chybu
            throw new Error('Nemám data z API: ${response.status}');
        }
    })
    // Vypíšu data na konzoli
    .then(data=>{
        var fact = data.fact;
        console.log(fact);
        return fact;
    })
    // Vypíšu chybu na konzoli
    .catch(error=>{
        console.log(error);
        });
}

export default getData;

