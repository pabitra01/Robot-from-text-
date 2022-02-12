function apiCall(){
    const data=document.getElementById("text").value;
    console.log(data);
    document.getElementById("imgsrc").src=`https://robohash.org/${data}.png`;
}