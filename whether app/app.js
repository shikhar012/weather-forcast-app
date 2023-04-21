const key = 'GzlRA6zyTy89uvyTUewbxI0VkvV2A1q0';

const get_current_condition= async(code)=>{
      const basse='http://dataservice.accuweather.com/currentconditions/v1/';
      const t=`${code}?apikey=${key}`;
      const response1= await fetch(basse+t);
      const data2= await response1.json();
      return data2[0];
      

};
const  getcity = async(city)=>{
    const base='http://dataservice.accuweather.com/locations/v1/cities/search';
    const k= `?apikey=${key}&q=${city}`;
    const response= await fetch(base+k);
    const data = await response.json();
    return data[0];
};
/*
getcity('manchester').then((data)=>{
     return get_current_condition(data.Key);
}).then((ans)=>{
    console.log(ans);
})
.catch((err)=>{
    console.log(err)
});
 
*/