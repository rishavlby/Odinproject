
const getdata  = document.getElementById('fetch').addEventListener('click', () => { 

    try{
     
        const newurl = document.getElementById('search').value;
        if(newurl === ''){

                  alert('Enter Location again');
        }else 
        {
              
          var baseUrl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'
          const url = `${baseUrl}${newurl}?unitGroup=us&key=RM66DNN2KWHY4SL7HPUDZKVZQ`;
          console.log(url);
       var response = fetch(url, {mode: 'cors'})
    
            .then(function(response) {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
          .then(function(response) {
            console.log(response)
            var temprature = response.currentConditions.temp;
            console.log(`temprature: ` + temprature);

            var conversion = (temprature -32)*5/9
            console.log('celcius is ' + conversion)
           
          })
       
          .catch(function(error) {
                        console.error('Fetch error: ', error);
            alert('There was an error fetching the data. Please try again later.');

        })
        }
    }
            catch(error){

                console.error('Unexpected error: ', error);
        alert('An unexpected error occurred.');
         }
                


  })      



     /*  .catch(function(error) {
           console.log('Error' );        
           
          }) */             
  
  /* 
        }
        async function errorblocks(){
          try{
            const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=qp6ecJOR4pppTrTo9QLehdPWhFh6W8QE&s=cats&weirdness=4');
            if(response.ok)
            {
          console.log('Promise resolved');
        } else
        {
          if(response.status === 404) throw new Error('404, Not found');
          if(response.status === 401) throw new Error('401, Unauthorized');
          if(response.status === 403) throw new Error('403, Forbidden');
          if(response.status === 400) throw new Error('400, Bad request');
          if(response.status === 429) throw new Error('429, Too Many requests');
        
          throw new Error(response.status);
        }
        
        }
          catch(error){
        
        console.error('Fetch', error);
          }
        }
    })

*/


