    var el
    function defineEl(element){
        el = element
    }
    
    var index = 1;
    var i = 1
    function changeURL(el){
        if(el != null){
            while(i == index){
                i = Math.floor(Math.random() * 8); // Nbr de photo
            }
            
            index = i
            el.classList.remove('fadeIn')
            el.classList.add('fadeOut')
            setTimeout(function () {
                el.src = 'IMG/bg/bg-0' + index + '.jpg';
                setTimeout(function () {
                    el.classList.remove('fadeOut')
                    el.classList.add('fadeIn')
                }, 600);

            }, 1000);
        }
    }

    function ScrollTo(player){
        target = document.getElementById(player);
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }


   setInterval(function() { changeURL(el); }, 10000); // Il faut changer ce nombre en millisecondes pour choisir le temps entre chaque photos