$(".agregar").on("click", addItem)

function addItem(e){
    e.preventDefault()
    var res = $("#newText").val();
    let list = document.getElementById("itemList")

    let div = document.createElement("div")
    let li = document.createElement("li")
    let p = document.createElement("p")
    let check = document.createElement("button")
    let del = document.createElement("button")
    let p2 = document.createElement("p")

    list.append(div)
    div.appendChild(li)
    li.appendChild(p)
    li.appendChild(check)
    li.appendChild(del)
    li.appendChild(p2)
        
    p.innerHTML = res
    check.setAttribute("id", "check")
    del.setAttribute("id", "del")
    li.setAttribute("class","lis")
    check.textContent = "Check"
    del.textContent = "Delete"

    $("#itemList").on("click", "#del", function(event){
        event.preventDefault();
       $(this).parent().remove();
    });

    $("#itemList").on("click", "#check", function(event){
        event.preventDefault();
        $(this).prev().toggleClass("checked");
    });
}

