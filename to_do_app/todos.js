const form = document.querySelector('form');
const list = document.querySelector('ol');
const done = document.querySelector('.done');













form.addEventListener('submit', (e) => {


    e.preventDefault();

    const input = document.querySelector('input');
    let newLi = input.value.trim();
    

// add new li to ol
    function updateUi(newLi) {

        // creat li, and add class attribute
        let li = document.createElement('li');
        li.setAttribute('class','todo');
        li.textContent = newLi;

        // create button, and add class attribute
        let button = document.createElement('button');
        button.innerHTML = "X";
        button.setAttribute('class','done');

        // append new li, and delete button
        li.appendChild(button);
        list.appendChild(li);
    }
    updateUi(newLi);

    // clear input field
    form.reset();
    
    
    
})


// remove individual todo on button click
list.addEventListener('click',(e)=>{
if(e.target.classList.contains('done')){
    e.target.parentElement.remove();
}
})


