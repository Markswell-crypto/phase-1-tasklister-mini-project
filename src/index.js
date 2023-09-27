  // // your code here
  // let form = document.querySelector("form")
  // form.addEventListener("submit"),(e) => {
  //   e.preventDefault()
  //   let value = e.target.taskDescription.value;
  //   let namesDiv = document.querySelector("list")
  //   let p = document.createElement("p")
  //   p.textContent = `${value}`
  //   p.style.textAlign = "center"
  //   let button = document.createElement("button")
  //   button.textContent = `Remove Student`
  //   button.addEventListener("click", (e) => {
  //     e.target.parentNode.remove()
  //   })
  //   p.appendChild(button)
  //   namesDiv.appendChild(p)
  //   form.reset()

  // }
  //create event listener for form/submit
//trigger the creating of a new li & and for the value to be the text input value
//then append the value of the new li, to the ul
//create a delete button that removes the new li

document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("create-task-form");
  const text = document.getElementById("new-task-description");
  const submit = document.querySelector("input[type=submit]");
  const ul = document.getElementById("tasks");
  let totalList = [];

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newLi = document.createElement("li"); 
    const button = document.createElement("button"); 
    button.innerHTML = "X"; 
    button.addEventListener("click", () => {
      newLi.remove();
    });
    newLi.innerHTML = text.value; 
    newLi.appendChild(button); 
    ul.appendChild(newLi); 
    totalList.push(newLi); 
    console.log(totalList); 
    text.value = ""; 
  });
});

//font awesome trashcan
//<i class="far fa-trash-alt"></i>

//change background to blue
//change submit value to 'Get After It!'
//create dropdown bar to select task urgency level
//change Task Lister Lite to fontFamily monospace
window.onload = () => {
  const form1 = document.querySelector("#addForm");

  let items = document.getElementById("items");
  let submit = document.getElementById("submit");

  let editItem = null;

  form1.addEventListener("submit", addItem);
  items.addEventListener("click", removeItem);
};

function addItem(e) {
  e.preventDefault();

  if (submit.value != "Submit") {
      console.log("Hello");

      editItem.target.parentNode.childNodes[0].data
          = document.getElementById("item").value;

      submit.value = "Submit";
      document.getElementById("item").value = "";

      document.getElementById("lblsuccess").innerHTML
          = "Text edited successfully";

      document.getElementById("lblsuccess")
                      .style.display = "block";

      setTimeout(function() {
          document.getElementById("lblsuccess")
                          .style.display = "none";
      }, 3000);

      return false;
  }

  let newItem = document.getElementById("item").value;
  if (newItem.trim() == "" || newItem.trim() == null)
      return false;
  else
      document.getElementById("item").value = "";

  let li = document.createElement("li");
  li.className = "list-group-item";

  let deleteButton = document.createElement("button");

  deleteButton.className = 
      "btn-danger btn btn-sm float-right delete";

  deleteButton.appendChild(document.createTextNode("Delete"));

  let editButton = document.createElement("button");

  editButton.className = 
          "btn-success btn btn-sm float-right edit";

  editButton.appendChild(document.createTextNode("Edit"));

  li.appendChild(document.createTextNode(newItem));
  li.appendChild(deleteButton);
  li.appendChild(editButton);

  items.appendChild(li);
}

function removeItem(e) {
  e.preventDefault();
  if (e.target.classList.contains("delete")) {
      if (confirm("Are you Sure?")) {
          let li = e.target.parentNode;
          items.removeChild(li);
          document.getElementById("lblsuccess").innerHTML
              = "Text deleted successfully";

          document.getElementById("lblsuccess")
                      .style.display = "block";

          setTimeout(function() {
              document.getElementById("lblsuccess")
                      .style.display = "none";
          }, 3000);
      }
  }
  if (e.target.classList.contains("edit")) {
      document.getElementById("item").value =
          e.target.parentNode.childNodes[0].data;
      submit.value = "EDIT";
      editItem = e;
  }
}

function toggleButton(ref, btnID) {
  document.getElementById(btnID).disabled = false;
}