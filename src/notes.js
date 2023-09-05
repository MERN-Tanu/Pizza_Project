// const [weatherData,setWeatherData]=useState({result:{},status:"initial",message:""});

// async function fetchWeatherData(cityName){
//     try{
//         setWeatherData({result:{},status:"loading",message:"Loading "});
//         const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`);

//         if(!response.ok){
//             throw new Error ("API or network issue");
//             setWeatherData({result:{},status:"error",message:"Error in api call"});
//         }
//         const data=await response.json();
//         setWeatherData({result:data,status:"success",message:"ok"})
//     }catch(error){
//         setWeatherData({result:{},status:"error",message:"Error in api call"});
//     }
// }