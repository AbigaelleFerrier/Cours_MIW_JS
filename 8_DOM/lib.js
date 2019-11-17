const __id   = (id)     => { return document.getElementById(id);            };
const __tn   = (name)   => { return document.getElementsByTagName(name);    };
const __n    = (name)   => { return document.getElementsByName(name);       };
const __qs   = (query)  => { return document.querySelector(query);          };
const __qsa  = (query)  => { return document.querySelectorAll(query);       };


function ajax(methode, path, data) {

    var xhr = new XMLHttpRequest();
    xhr.open(methode, path, true);
    xhr.DONE = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            return xhr.responseText;
        }
    }

    xhr.send(data);
}


a = ajax()