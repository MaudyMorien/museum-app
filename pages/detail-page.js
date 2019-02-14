//add event handler

function submitComment() {
    
    //creating the elements you need
    const inputField = document.getElementById('name');
    const name = inputField.value;
    const textArea = document.getElementById('msg');
    var msg = textArea.value;
    const comment = document.createElement('section');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    
    if (doesNotPassAllValidations(name, msg)) {
        return null;
    }

    //adjust the elements we created
    h3.innerHTML = `${name} said:`;
    p.innerHTML = msg;
    comment.classList.add('comment');
    comment.appendChild(h3);
    comment.appendChild(p);
    

    //display the elements we created
    const commentSection = document.getElementById('comments');
    commentSection.appendChild(comment);
   
    //reset form values
    inputField.value = null;
    textArea.value = null;

   
}

function doesNotPassAllValidations(name, msg) {
    if (!name || !msg) {
        alert('You forgot to fill in your name or message!')
        return true;
    }
    if (msg.length > 280) {
       alert('Your message is too long')
       return true;
    }
        
    else {
        return false;
    } 
}

function checkMsgLength(msg) {
    var msg = document.getElementById('msg').value
    alert(280 - msg.length + ' characters left')
}
