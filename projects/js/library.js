console.log("This is my Library console ");
// constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// display construtor
function Display() 
{

}

// add methods to display prototype

Display.prototype.add=function(book)
{
    console.log('adding to ui');
    tablebody=document.getElementById("tablebody");
    let uistring =` 
                    <tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>

    `;
    tablebody.innerHTML += uistring;
}
// implementing clear function
Display.prototype.clear=function()
{
    let libraryform = document.getElementById("libraryform");
    libraryform.reset();
}

// implementing validate  function
Display.prototype.validate=function(book)
{
    if (book.name.length<1 || book.author.length<1)
    {
        return false;
    }
    else
    { 
        console.log("in valiate");
    return true;
    }
}

Display.prototype.show=function(type,dispmessage)
{
    let message = document.getElementById('message');
    message.innerHTML=`
                            <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Message:</strong> ${dispmessage} 
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
    `;
    
}

// add submit event listner to libraryform
let libraryform = document.getElementById("libraryform");
libraryform.addEventListener('submit', librarysubmit);

function librarysubmit(e) {
    console.log("you have submited form")
    // when form is submited it reloads the page by default
    let name = document.getElementById("bookname").value;
    let author = document.getElementById("author").value;

    // fiction prog and history
    let fiction = document.getElementById('fiction');
    let programing = document.getElementById('programing');
    let history = document.getElementById('history');
    e.preventDefault();  // this will prevent the page to reload

    let type;
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programing.checked) {
        type = programing.value;
    }
    else if (history.checked) {
        type = history.value;
    }
    let book = new Book(name, author, type);
    console.log(book);

    let display= new Display();
    if(display.validate(book))
    {
        display.add(book);
        display.clear();
        display.show('success',' your book is succesfully added');
    }
    else
    {
        // show eror
        display.show('danger'," sorry you can not add book please fill all felds");
    }
}
