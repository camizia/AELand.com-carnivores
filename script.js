$(document).ready(function(){
    console.log("ready");

    const test = document.getElementById('bt')
    const test2 = document.getElementById('bt2')
    const test3 = document.getElementById('bt3')
    const test4 = document.getElementById('bt4')
    const test5 = document.getElementById('bt5')
    const test6 = document.getElementById('bt6')

    var colortext ="rgb(197, 229, 233)"

    test.addEventListener('mouseenter', ()=>{
        test.style.backgroundColor = "rgb(59, 59, 59)";
    });

    test.addEventListener('mouseleave', ()=>{
        test.style.backgroundColor = "rgb(29, 29, 29)";
    });

    ////////////////////

    test2.addEventListener('mouseenter', ()=>{
        test2.style.color = colortext;
    });

    test2.addEventListener('mouseleave', ()=>{
        test2.style.color = "black";
    });

    ///////////////////

    test3.addEventListener('mouseenter', ()=>{
        test3.style.color = colortext;
    });

    test3.addEventListener('mouseleave', ()=>{
        test3.style.color = "black";
    });

    ///////////////////

    test4.addEventListener('mouseenter', ()=>{
        test4.style.color = colortext;
    });

    test4.addEventListener('mouseleave', ()=>{
        test4.style.color = "black";
    });

    ///////////////////

    test5.addEventListener('mouseenter', ()=>{
        test5.style.color = colortext;
    });

    test5.addEventListener('mouseleave', ()=>{
        test5.style.color = "black";
    });

    ///////////////////

    test6.addEventListener('mouseenter', ()=>{
        test6.style.color = colortext;
    });

    test6.addEventListener('mouseleave', ()=>{
        test6.style.color = "black";
    });
/*
    const liendino1 = document.getElementById('ln1')
    const liendino2 = document.getElementById('ln2')
    const liendino3 = document.getElementById('ln3')
    const liendino4 = document.getElementById('ln4')
    const liendino5 = document.getElementById('ln5')
    const liendino6 = document.getElementById('ln6')
    const liendino7 = document.getElementById('ln7')
    const liendino8 = document.getElementById('ln8')

    
    const liendino = function(option){
        
        option.addEventListener('mouseenter', ()=>{
            option.style.color = "rgb(128, 181, 184)";
        });
    
        option.addEventListener('mouseleave', ()=>{
            option.style.color = "rgb(241, 232, 193)";
        });
    }

    liendino(liendino1)
    liendino(liendino2)
    liendino(liendino3)
    liendino(liendino4)
    liendino(liendino5)
    liendino(liendino6)
    liendino(liendino7)
    liendino(liendino8)
*/

        const liendino1 = document.getElementById('ln1')
        const liendino2 = document.getElementById('ln2')
        const liendino3 = document.getElementById('ln3')
        const liendino4 = document.getElementById('ln4')
        const liendino5 = document.getElementById('ln5')
        const liendino6 = document.getElementById('ln6')
        const liendino7 = document.getElementById('ln7')
        const liendino8 = document.getElementById('ln8')

        
        const liendino = function(option, other1, other2, other3, other4, other5, other6, other7){
            var a = 0;
            function r(a){
                option.style.color = "rgb(128, 181, 184)";
                console.log("mouseenter")
                
                 a = 0;
            }
            
            option.addEventListener('mouseenter', (a)=>{
                //a = 0
                r(a)
                console.log("mouse enter de a : "+ a)
            })
            /////////////////////

            option.onclick=function(){
                console.log("click special")
                option.style.color = "rgb(128, 181, 184)";
                
                other1.style.color = "rgb(241, 232, 193)";
                other2.style.color = "rgb(241, 232, 193)";
                other3.style.color = "rgb(241, 232, 193)";
                other4.style.color = "rgb(241, 232, 193)";
                other5.style.color = "rgb(241, 232, 193)";
                other6.style.color = "rgb(241, 232, 193)";
                other7.style.color = "rgb(241, 232, 193)";
                return a = 1;
            }
         
            
            
            
            
            option.addEventListener('mouseleave', ()=>{
                console.log((option.onclick).length)
                console.log(option.onclick)
             console.log("mouseleave de A : " + a)
             if(a == 1){
                 a = 0
                 return
             }
             else{
                 option.style.color = "rgb(241, 232, 193)";
             }
             });
            
           
 

        } //function liendino pas touche

        liendino(liendino1, liendino2, liendino3, liendino4, liendino5, liendino6, liendino7, liendino8)
        liendino(liendino2, liendino1, liendino3, liendino4, liendino5, liendino6, liendino7, liendino8)
        liendino(liendino3, liendino2, liendino1, liendino4, liendino5, liendino6, liendino7, liendino8)
        liendino(liendino4, liendino2, liendino3, liendino1, liendino5, liendino6, liendino7, liendino8)
        liendino(liendino5, liendino2, liendino3, liendino4, liendino1, liendino6, liendino7, liendino8)
        liendino(liendino6, liendino2, liendino3, liendino4, liendino5, liendino1, liendino7, liendino8)
        liendino(liendino7, liendino2, liendino3, liendino4, liendino5, liendino6, liendino1, liendino8)
        liendino(liendino8, liendino2, liendino3, liendino4, liendino5, liendino6, liendino7, liendino1)

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        const nav = document.querySelector('.div4')

        //allo

        window.addEventListener('scroll', () => {
            //console.log("scroll")
            if(window.scrollY >= (document.getElementById("lienintern1")).offsetTop - 55 && window.scrollY < (document.getElementById("lienintern2")).offsetTop - 55){
                if(liendino2.style.color == "rgb(128, 181, 184)"){
                    liendino2.style.color = "rgb(241, 232, 193)";
                }
                liendino1.style.color = "rgb(128, 181, 184)";
            }
        })

        //carno

        window.addEventListener('scroll', () => {
            //console.log("scroll")
            if(window.scrollY >= (document.getElementById("lienintern2")).offsetTop - 55 && window.scrollY < (document.getElementById("lienintern3")).offsetTop - 55){
                if(liendino1.style.color == "rgb(128, 181, 184)"){
                    liendino1.style.color = "rgb(241, 232, 193)";
                }
                if(liendino3.style.color == "rgb(128, 181, 184)"){
                    liendino3.style.color = "rgb(241, 232, 193)";
                }
                liendino2.style.color = "rgb(128, 181, 184)";
            }
        })

        //cera

        window.addEventListener('scroll', () => {
            //console.log("scroll")
            if(window.scrollY >= (document.getElementById("lienintern3")).offsetTop - 55 && window.scrollY < (document.getElementById("lienintern4")).offsetTop - 55){
                if(liendino2.style.color == "rgb(128, 181, 184)"){
                    liendino2.style.color = "rgb(241, 232, 193)";
                }
                if(liendino4.style.color == "rgb(128, 181, 184)"){
                    liendino4.style.color = "rgb(241, 232, 193)";
                }
                liendino3.style.color = "rgb(128, 181, 184)";
            }
        })

        //dilo
        
        window.addEventListener('scroll', () => {
            //console.log("scroll")
            if(window.scrollY >= (document.getElementById("lienintern4")).offsetTop - 55 && window.scrollY < (document.getElementById("lienintern5")).offsetTop - 55){
                if(liendino3.style.color == "rgb(128, 181, 184)"){
                    liendino3.style.color = "rgb(241, 232, 193)";
                }
                if(liendino5.style.color == "rgb(128, 181, 184)"){
                    liendino5.style.color = "rgb(241, 232, 193)";
                }
                liendino4.style.color = "rgb(128, 181, 184)";
            }
        })

        //giga
        
        window.addEventListener('scroll', () => {
           //console.log("scroll")
            if(window.scrollY >= (document.getElementById("lienintern5")).offsetTop - 55 && window.scrollY < (document.getElementById("lienintern6")).offsetTop - 55){
                if(liendino4.style.color == "rgb(128, 181, 184)"){
                    liendino4.style.color = "rgb(241, 232, 193)";
                }
                if(liendino6.style.color == "rgb(128, 181, 184)"){
                    liendino6.style.color = "rgb(241, 232, 193)";
                }
                liendino5.style.color = "rgb(128, 181, 184)";
            }
        })

        //sucho
        
        window.addEventListener('scroll', () => {
            //console.log("scroll")
            if(window.scrollY >= (document.getElementById("lienintern6")).offsetTop - 55 && window.scrollY < (document.getElementById("lienintern7")).offsetTop - 55){
                if(liendino5.style.color == "rgb(128, 181, 184)"){
                    liendino5.style.color = "rgb(241, 232, 193)";
                }
                if(liendino7.style.color == "rgb(128, 181, 184)"){
                    liendino7.style.color = "rgb(241, 232, 193)";
                }
                liendino6.style.color = "rgb(128, 181, 184)";
            }
        })

        //rex
        
        window.addEventListener('scroll', () => {
            //console.log("scroll")
            if(window.scrollY >= (document.getElementById("lienintern7")).offsetTop - 55 && window.scrollY < (document.getElementById("lienintern8")).offsetTop - 55){
                if(liendino6.style.color == "rgb(128, 181, 184)"){
                    liendino6.style.color = "rgb(241, 232, 193)";
                }
                if(liendino8.style.color == "rgb(128, 181, 184)"){
                    liendino8.style.color = "rgb(241, 232, 193)";
                }
                liendino7.style.color = "rgb(128, 181, 184)";
            }
        })

        //utha
        
        window.addEventListener('scroll', () => {
            //console.log("scroll")
            if(window.scrollY >= (document.getElementById("lienintern8")).offsetTop - 55){
                if(liendino7.style.color == "rgb(128, 181, 184)"){
                    liendino7.style.color = "rgb(241, 232, 193)";
                }
                liendino8.style.color = "rgb(128, 181, 184)";
            }
        })











/*
    let randomNumber = Math.floor(Math.random() * 10)

    console.log(randomNumber)

    $("#formUser").on("submit", function(e){
        e.preventDefault()
        //console.log("Submit")
        let input = $("input[type=text]")

        let userValue = parseInt(input.val())
        
            console.log(userValue)

            if(randomNumber !== userValue){
                //alert("perdu la solution c'était : " + randomNumber)
                input.val("")
                input.addClass("error", function(){
                    Animate(".demo", 'bounce');
                })
            }
            else{
                //alert("gagner")
                input.val("")
            }

        
    })
*/

})//ready