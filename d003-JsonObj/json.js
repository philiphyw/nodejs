$.ajax("https://swapi.dev/api/people/20/")
      .done(handleSuccess)
      .fail(handleFail);



function handleSuccess(data){

    //the data is an js object, to loop through a js object, need to use the Object.entries()function
    
    /*
    for (const [key, value] of Object.entries(data)) {
        console.table(`The key is ${key}, and the value is ${value}`)
        
    }
    */

    //convert object to iteralable array

    const arr = Object.entries(data);
    
    //show each element by every second

  for (let i = 0; i < arr.length; i++) {
        setTimeout(() => {
            console.log('');
        }, 1000);
        console.log(arr[i][0],':',arr[i][1])    
  }
   
    /*
    data.forEach(element => {
        console.table(`The key is ${element.name}, the value is ${element.value}.`)
    });
    */
}      

function handleFail() {
    console.log('Failed to retrieve data.')
}