function beforesubmit(){
    let outputdate = document.querySelector(".outputdate");
    let inputdate = document.querySelector(".inputdate");

    console.log(inputdate.value)

    let formattedDate = new Date(inputdate.value).toLocaleDateString("en-IN"); // this is org locale

    outputdate.value = formattedDate;


}
