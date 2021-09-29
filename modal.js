function iniciaModal(value){
    const modal = document.getElementById(value);

    if(modal){
        modal.classList.add('exibir');
        modal.addEventListener('click',(event)=>{
            if(event.target.id == value || event.target.className == 'exit'){
                modal.classList.remove('exibir');
            }
        })
    }
}

const contato = document.querySelector('.contato');
contato.addEventListener('click', ()=> iniciaModal('mymodal')
)
