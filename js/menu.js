(function(){

    const sliders = [...document.querySelectorAll('.bodyA')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;
    
    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });
    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });
    const changePosition = (add)=>{
        const currentTestimony = document.querySelector('.bodyA--show').dataset.id;
        value = Number(currentTestimony);
        value += add;

        sliders[Number(currentTestimony)-1].classList.remove('bodyA--show');
        if(value === sliders.length + 1 || value === 0){
            value = value === 0 ? sliders.length : 1;
        }

        sliders[value - 1].classList.add('bodyA--show');
    }


})();

const download = document.querySelector("#download");
        download.addEventListener("click", (s) => {
            s.preventDefault();

            const downloadSection = document.querySelector("#downloadB");
            downloadSection.scrollIntoView({ behavior: "smooth" });
        });

const registro = document.querySelector("#signup");
        registro.addEventListener("click", (p) => {
            p.preventDefault();

            const registroSection = document.querySelector("#registroR");
            registroSection.scrollIntoView({ behavior: "smooth" });
        });

const contacto = document.querySelector("#contacto");
    contacto.addEventListener("click", (o) => {
            o.preventDefault();

            const contactoSection = document.querySelector("#contactoC");
            contactoSection.scrollIntoView({ behavior: "smooth" });
        });