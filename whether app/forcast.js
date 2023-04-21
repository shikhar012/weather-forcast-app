const forms=document.querySelector('form');
const d =document.querySelector('.details');
const time =document.querySelector('img.time');
const icon =document.querySelector('.icon img');
updateui = (data)=>{
    //const cityDet=data.cityDet;
    //const citywh=data.citywh;
    //console.log(data);
    const {cityDet,citywh} = data;
    d.innerHTML=`  <h5 class="my-3">${cityDet.EnglishName}</h5>
    <div class="my-3">${citywh.WeatherText    }</div>
    <div class="display-4 my-4">
        <span>${citywh.Temperature.Metric.Value}</span>
        <span>&deg;c</span>
    </div>`
    let screentym=null;
    if(citywh.IsDayTime)
    {
          screentym='day.svg';
    }
    else{
        screentym='night.svg';
    }
time.setAttribute('src',screentym);
const c=`icons/${citywh.WeatherIcon}.svg`;
icon.setAttribute('src',c);

};
const updatecity= async(city)=>{
const cityDet= await getcity(city);
const citywh= await get_current_condition(cityDet.Key);
return {
     cityDet, citywh

};


};

forms.addEventListener('submit',(e)=>{
e.preventDefault();
const city=forms.city.value.trim();
localStorage.setItem('city',city);
forms.reset(); 
updatecity(city).then((data)=>{
    updateui(data);
}).catch((err)=>{
    console.log(err)
});
});

if(localStorage.getItem('city'))
{
    updatecity(localStorage.getItem('city')).then((data)=>{
        updateui(data);
    }).catch((err)=>{
        console.log(err)
    });
};
