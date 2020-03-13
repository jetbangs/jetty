/**
 * Created by Ikhile on 3/12/2020.
 */
var users,password,ulen,i,name;
users = ["John", "Mark", "Rose", "Beatrice"];
password = [12345,24356,34657,47892];

ulen = users.length;
name = document.getElementById("u-name").value;

function check() {
    if(4 in users){
        alert("welcome");
    }
    else{
        alert("Please sign up");
    }
}


/*function check_name() {
    for (i = 0; i < ulen; i++) {
        if ("John" in users) {
            alert("welcome" + name);
        }
        else {
            alert("sign up");
        }

    }
}*/

