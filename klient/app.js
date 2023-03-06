var json = []
var kraj1
async function getData(){
    const data = await fetch("https://restcountries.com/v2/all")
    json = await data.json()
    console.log(json)
}
//tworzy losowe numery dla wszystkich krajów
function losuj_nr() {
    var max = json.length -1
    return Math.floor(Math.random() * max);
  }
// losuje i wyświetla w konsoli wylosowane kraje
 function losuj_kraje(){

    document.getElementById("gra").innerHTML = ""
  
     wybrane = 0

    kraj1 = json[losuj_nr()]

    console.log(kraj1)

    //dodajemy kraje czyli divy
    const div_kraj1 = document.createElement("div")
    div_kraj1.classList.add("rotate-center")
    div_kraj1.setAttribute("id", "kraj1")
    
   //nazwa kraju
    const nazwa_kraj1 = document.createElement("h1")
    nazwa_kraj1.innerHTML = kraj1.name

    //flaga
     const flaga_kraj1 = document.createElement("img")
     flaga_kraj1.setAttribute("src", kraj1.flag)
    //input
     const input = document.createElement("input")
     input.setAttribute("id", "szukaj")
     input.setAttribute("onchange", `sprawdz()`)
     //kraj1 append
     div_kraj1.appendChild(nazwa_kraj1)
     div_kraj1.appendChild(flaga_kraj1)
     div_kraj1.appendChild(input)
     document.getElementById("gra").appendChild(div_kraj1)

}
var wybrane = 0
var zycia = 2
var podp = 0 
var fodp = 0
var wszystkie = 0
    //tworzę h1 do poprawnych odp
    const podp1 = document.createElement("h1")
    podp1.innerHTML = "Twoje dobre odpowiedzi to: " + "0"
    document.getElementById("dol").appendChild(podp1)

    //tworzę h1 do złych odp
    const fodp1 = document.createElement("h1")
    fodp1.innerHTML = "Twoje złe odpowiedzi to: " + "0"
    document.getElementById("dol").appendChild(fodp1)

    //tworzę h1 do wszystkich odp
    const wszystkie1 = document.createElement("h1")
    wszystkie1.innerHTML = "Twoje wszystkie odpowiedzi to: " + "0"
    document.getElementById("dol").appendChild(wszystkie1)

    //gdy klikamy na dobre to się wyświetla zielony a jak na zły to czerwony
    function sprawdz(){
    //console.log(st_k1)
    var st_k1 = kraj1.capital
    var newData = document.getElementById("szukaj").value
    
    if(zycia > 0){

    if(wybrane == 0 ){
            
        if(st_k1 == newData){
                podp++
                podp1.innerHTML = "Twoje dobre odpowiedzi to: " +podp

                wszystkie++
                wszystkie1.innerHTML = "Twoje wszystkie odpowiedzi to: " +wszystkie
            }
            else{

                zycia--

                fodp++
                fodp1.innerHTML = "Twoje złe odpowiedzi to: " +fodp

                wszystkie++
                wszystkie1.innerHTML = "Twoje wszystkie odpowiedzi to: " +wszystkie
            }
        
        

        
        wybrane = 1

    }

}

else{
    document.getElementById("gra").innerHTML = ""
    const div_p = document.createElement("div_p")
    div_p.innerHTML =  "Koniec gry, wyczerpałeś swoje życia"
    div_p.classList.add("div_p")
    document.getElementById("gra").appendChild(div_p)
    
}

}

getData()