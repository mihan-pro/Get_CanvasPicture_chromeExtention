let getBtn = document.getElementById('get');

getBtn.addEventListener('click',function(){   
    click();
});

function click() {
    chrome.tabs.query({ currentWindow: true, active: true } ,
        function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, "get")
        })
    }
