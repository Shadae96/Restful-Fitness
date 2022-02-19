const form = document.getElementById('form')
const title = document.getElementById('#blogTitle');
const text = document.getElementById('#textarea');
const blogMessageContainer = document.querySelector('.blog-message-container');
const blogMessage = document.getElementById('#blog-message');


// Setting the form in default to invalid
let isValid = false;

function validateForm(){
    // using contraint API
    isValid = form.checkValidity();

    //Style main message for an error
    if(title && text === !isValid){
    message.textContent = 'Please fill out all fields.';
    blogMessage.style.color = 'red';
    blogMessageContainer.style.borderColor = 'red';
    
    return;

    }
    //if form is valid
    if (title && text === !isValid){
        message.textContent = 'Congrats! New community post added';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
}



const addNewBlog = async (e) => {
     e.preventDefault();

     validateForm();

     if(isValid){

     const newBlogs = {
        title: form.title.value,
        textarea: form.textarea.value,
    }

    if (newBlogs){
        const response = await fetch('/api/blog',{
            method:'POST',
            body: JSON.stringify(newBlogs),
            headers: {'Content-Type' : 'application/json'},
        });

        if (response.ok) {

            console.log ('It worked!')
        } else {
            alert ('Failed to add new community post. Please try again');
        }
    }
}};



document.getElementById('submitBlog').addEventListener('click', addNewBlog);






























// let noteTitle;
// let noteText;
// let saveNoteBtn;
// let newNoteBtn;
// let noteList;

// if (window.location.pathname === '/notes') {
//   noteTitle = document.querySelector('.note-title');
//   noteText = document.querySelector('.note-textarea');
//   saveNoteBtn = document.querySelector('.save-note');
//   newNoteBtn = document.querySelector('.new-note');
//   noteList = document.querySelectorAll('.list-container .list-group');
// }

// // Show an element
// const show = (elem) => {
//   elem.style.display = 'inline';
// };

// // Hide an element
// const hide = (elem) => {
//   elem.style.display = 'none';
// };

// // activeNote is used to keep track of the note in the textarea
// let activeNote = {};

// const getNotes = () =>
//   fetch('/api/notes', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

// const saveNote = (note) =>
//   fetch('/api/notes', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(note),
//   });

// const deleteNote = (id) =>
//   fetch(`/api/notes/${id}`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

// const renderActiveNote = () => {
//   hide(saveNoteBtn);

//   if (activeNote.id) {
//     noteTitle.setAttribute('readonly', true);
//     noteText.setAttribute('readonly', true);
//     noteTitle.value = activeNote.title;
//     noteText.value = activeNote.text;
//   } else {
//     noteTitle.removeAttribute('readonly');
//     noteText.removeAttribute('readonly');
//     noteTitle.value = '';
//     noteText.value = '';
//   }
// };

// const handleNoteSave = () => {
//   const newNote = {
//     title: noteTitle.value,
//     text: noteText.value,
//   };
//   saveNote(newNote).then(() => {
//     getAndRenderNotes();
//     renderActiveNote();
//   });
// };

// // Delete the clicked note
// const handleNoteDelete = (e) => {
//   // Prevents the click listener for the list from being called when the button inside of it is clicked
//   e.stopPropagation();

//   const note = e.target;
//   const noteId = JSON.parse(note.parentElement.getAttribute('data-note')).id;

//   if (activeNote.id === noteId) {
//     activeNote = {};
//   }

//   deleteNote(noteId).then(() => {
//     getAndRenderNotes();
//     renderActiveNote();
//   });
// };

// // Sets the activeNote and displays it
// const handleNoteView = (e) => {
//   e.preventDefault();
//   activeNote = JSON.parse(e.target.parentElement.getAttribute('data-note'));
//   renderActiveNote();
// };

// // Sets the activeNote to and empty object and allows the user to enter a new note
// const handleNewNoteView = (e) => {
//   activeNote = {};
//   renderActiveNote();
// };

// const handleRenderSaveBtn = () => {
//   if (!noteTitle.value.trim() || !noteText.value.trim()) {
//     hide(saveNoteBtn);
//   } else {
//     show(saveNoteBtn);
//   }
// };

// // Render the list of note titles
// const renderNoteList = async (notes) => {
//   let jsonNotes = await notes.json();
//   if (window.location.pathname === '/notes') {
//     noteList.forEach((el) => (el.innerHTML = ''));
//   }

//   let noteListItems = [];

//   // Returns HTML element with or without a delete button
//   const createLi = (text, delBtn = true) => {
//     const liEl = document.createElement('li');
//     liEl.classList.add('list-group-item');

//     const spanEl = document.createElement('span');
//     spanEl.classList.add('list-item-title');
//     spanEl.innerText = text;
//     spanEl.addEventListener('click', handleNoteView);

//     liEl.append(spanEl);

//     if (delBtn) {
//       const delBtnEl = document.createElement('i');
//       delBtnEl.classList.add(
//         'fas',
//         'fa-trash-alt',
//         'float-right',
//         'text-danger',
//         'delete-note'
//       );
//       delBtnEl.addEventListener('click', handleNoteDelete);

//       liEl.append(delBtnEl);
//     }

//     return liEl;
//   };

//   if (jsonNotes.length === 0) {
//     noteListItems.push(createLi('No saved Notes', false));
//   }

//   jsonNotes.forEach((note) => {
//     const li = createLi(note.title);
//     li.dataset.note = JSON.stringify(note);

//     noteListItems.push(li);
//   });

//   if (window.location.pathname === '/notes') {
//     noteListItems.forEach((note) => noteList[0].append(note));
//   }
// };

// // Gets notes from the db and renders them to the sidebar
// const getAndRenderNotes = () => getNotes().then(renderNoteList);

// if (window.location.pathname === '/notes') {
//   saveNoteBtn.addEventListener('click', handleNoteSave);
//   newNoteBtn.addEventListener('click', handleNewNoteView);
//   noteTitle.addEventListener('keyup', handleRenderSaveBtn);
//   noteText.addEventListener('keyup', handleRenderSaveBtn);
// }

// getAndRenderNotes();