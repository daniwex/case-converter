const alertContainer = document.getElementById('alert');
const fileName = document.getElementById('file-name');
const input = document.getElementById('textarea');
const downloadButton = document.getElementById('save-text-file');

function download(filename, text) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);

}


function closeAlert() {
    alertContainer.classList.add('hidden');
    clearInput()
}

function openAlert() {
    alertContainer.classList.remove('hidden');
}

function startDownload() {
    if(!fileName.value.isBlankOrEmpty()) {
        download(fileName.value, input.value);
    }
    closeAlert();
    clearInput()
}

function clearInput() {
    fileName.value = ""
}

document.body.addEventListener("click", (e) => {
    if(e.target.classList.contains('alert')) {
        closeAlert();
    }
});

