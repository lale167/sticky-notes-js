const container = document.querySelector(".container");
const createNoteButton = document.querySelector(".create-note");
const noteContainer = document.querySelector(".note-container");
const notePopup = document.querySelector(".note-popup");
const input = document.querySelector(".input");

const noteConfirm = document.querySelector(".confirm");
const noteDiscard = document.querySelector(".discard");

createNoteButton.addEventListener("click", () => {
   notePopup.style.display = "flex";
});

noteConfirm.addEventListener("click", () => {
   const newNote = document.createElement("div");
   const removeNote = document.createElement("span");

   newNote.classList.add("note");
   noteContainer.appendChild(newNote);

   removeNote.classList.add("discard");
   removeNote.classList.add("new-note-discard");
   removeNote.href = "https://unpkg.com/css.gg@2.0.0/icons/css/close-o.css";
   removeNote.rel = "stylesheet";
   noteContainer.appendChild(removeNote);

   notePopup.style.display = "none";
   newNote.innerHTML = input.value;
   input.value = "";

   removeNote.addEventListener("click", () => {
      newNote.remove();
      removeNote.remove();
   });
});
