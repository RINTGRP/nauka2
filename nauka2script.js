function redText() {
    document.querySelector(".text").classList.add("redText");
    if(document.querySelector(".text").classList.contains("blackText")){
        document.querySelector(".text").classList.remove("blackText");
    }
}
function blackText() {
    document.querySelector(".text").classList.add("blackText");
    if(document.querySelector(".text").classList.contains("redText")){
        document.querySelector(".text").classList.remove("redText");
    }
}