Player1=prompt("Enter Player1 Name : ").toUpperCase()
Player2=prompt("Enter Player2 Name : ").toUpperCase()

document.querySelector(".player1 h1").textContent=Player1
document.querySelector(".player2 h1").textContent=Player2

function diceRoll(){
    var p1=Math.ceil((Math.random())*6)
    var p2=Math.ceil((Math.random())*6)
    
    var result=document.querySelector(".title")
    
    if (p1>p2){
        result.textContent=Player1+" WON"
    }
    else if (p2>p1){
        result.textContent=Player2+" WON"
    }
    else{
        result.textContent="Draw"
    }
    var p1Img=document.querySelector(".player1 img")
    p1Img.setAttribute('src',"./images/dice"+p1+".png")
    
    
    var p2Img=document.querySelector(".player2 img")
    p2Img.setAttribute('src',"./images/dice"+p2+".png")
}

function animation(){
    var n=Math.ceil((Math.random())*6)
    var p1Img=document.querySelector(".player1 img")
    p1Img.setAttribute('src',"./images/dice"+n+".png")
    var p2Img=document.querySelector(".player2 img")
    p2Img.setAttribute('src',"./images/dice"+n+".png")

}


document.querySelector(".refresh").addEventListener("click",function (){
    var sound=new Audio("./sound.aac")
    sound.play()
    for(var i=10;i>0;i--){setTimeout(animation,10)}
    setTimeout(diceRoll,100)

})





