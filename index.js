let divHover = 5;
let span = document.getElementById('nota');

function hover(valor) {
    divHover = valor - 1;
    if (divHover == 4) { 
        divHover += 1;
        
        atribuiNota(divHover)   
        //link ativo hover 
        document.getElementById('5').style.background = 'var(--Orange)';
        document.getElementById('5').style.color = 'var(--white)';
        //volta o estado normal das outras div
        document.getElementById('4').style.background = 'var(--medium-grey)';
        document.getElementById('4').style.color = 'var(--white)';
        document.getElementById('3').style.background = 'var(--dark-blue)';
        document.getElementById('3').style.color = 'var(--light-grey)';
        document.getElementById('2').style.background = 'var(--dark-blue)';
        document.getElementById('2').style.color = 'var(--light-grey)';
        document.getElementById('1').style.background = 'var(--dark-blue)';
        document.getElementById('1').style.color = 'var(--light-grey)';

    } if (divHover == 3) {
        divHover += 1;
        atribuiNota(divHover)  
        //link ativo hover
        document.getElementById('4').style.background = 'var(--Orange)';
        document.getElementById('4').style.color = 'var(--white)';
        //volta o estado normal das outras div
        document.getElementById('5').style.background = 'var(--dark-blue)';
        document.getElementById('5').style.color = 'var(--light-grey)';
        document.getElementById('3').style.background = 'var(--medium-grey)';
        document.getElementById('3').style.color = 'var(--white)';
        document.getElementById('2').style.background = 'var(--dark-blue)';
        document.getElementById('2').style.color = 'var(--light-grey)';
        document.getElementById('1').style.background = 'var(--dark-blue)';
        document.getElementById('1').style.color = 'var(--light-grey)';

    } if (divHover == 2) {
        divHover += 1;
        atribuiNota(divHover)  
        //link ativo hover
        document.getElementById('3').style.background = 'var(--Orange)';
        document.getElementById('3').style.color = 'var(--white)';
        //volta o estado normal das outras div
        document.getElementById('5').style.background = 'var(--dark-blue)';
        document.getElementById('5').style.color = 'var(--light-grey)';
        document.getElementById('4').style.background = 'var(--dark-blue)';
        document.getElementById('4').style.color = 'var(--light-grey)';
        document.getElementById('2').style.background = 'var(--medium-grey)';
        document.getElementById('2').style.color = 'var(--white)';
        document.getElementById('1').style.background = 'var(--dark-blue)';
        document.getElementById('1').style.color = 'var(--light-grey)';
    } if (divHover == 1) {
        divHover += 1;
        atribuiNota(divHover)  
         //link ativo hover
        document.getElementById('2').style.background = 'var(--Orange)';
        document.getElementById('2').style.color = 'var(--white)';
        //volta o estado normal das outras div
        document.getElementById('5').style.background = 'var(--dark-blue)';
        document.getElementById('5').style.color = 'var(--light-grey)';
        document.getElementById('4').style.background = 'var(--dark-blue)';
        document.getElementById('4').style.color = 'var(--light-grey)';
        document.getElementById('3').style.background = 'var(--dark-blue)';
        document.getElementById('3').style.color = 'var(--light-grey)';
        document.getElementById('1').style.background = 'var(--medium-grey)';
        document.getElementById('1').style.color = 'var(--white)';
    } if (divHover == 0) {
        divHover += 1;
        atribuiNota(divHover)  
        //link ativo hover
        document.getElementById('1').style.background = 'var(--Orange)';
        document.getElementById('1').style.color = 'var(--white)';
        //volta o estado normal das outras div
        document.getElementById('2').style.background = 'var(--dark-blue)';
        document.getElementById('2').style.color = 'var(--light-grey)';
        document.getElementById('3').style.background = 'var(--dark-blue)';
        document.getElementById('3').style.color = 'var(--light-grey)';
        document.getElementById('4').style.background = 'var(--dark-blue)';
        document.getElementById('4').style.color = 'var(--light-grey)';
        document.getElementById('5').style.background = 'var(--dark-blue)';
        document.getElementById('5').style.color = 'var(--light-grey)';
    }
}
//atribui o valor da nota ao span da div id='thanks'
function atribuiNota(param) {
    span.innerHTML = param;
}

function submit() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('thanks').style.display = 'block'; 
}