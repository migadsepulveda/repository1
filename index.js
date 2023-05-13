const API_URL="https:jsonplaceholder.typicode.com";
//check the API functionality (third part)

const xhr = new XMLHttpRequest();

function onRequestHandler() {
    if(this.readyState==4 && this.status==200) {
        console.log(this.response);
    }
}
xhr.addEventListener("load",onRequestHandler);
xhr.open("GET",`${API_URL}/users`);
xhr.send();
//last three rows are the extraction, try to find a related data source to subcribe.html (third part)
