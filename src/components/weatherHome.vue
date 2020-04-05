<template>
<b-container fluid >
    <b-row class="my-1" >
      <b-col md="6" class="centered" >
            <b-form-input class="mt-4 " id="type-search" type="search"  
            placeholder="Enter City Name" v-model="city"></b-form-input>
            <b-button variant="info" size="lg"  @click="getweather" class="mt-2  mb-2 float-right">Get Weather</b-button> 
      </b-col>
    </b-row>
    <b-row class="my-1" >
      <b-col md="6" class="centered" >
            <h2 class="text-center">  {{weatherinfo.location.name}} </h2>
            <h3 class="text-center">  {{weatherinfo.location.country}} </h3> 
            <h3 class="text-center">  {{weatherinfo.location.region}} </h3> 
            <h3 class="text-center">  {{weatherinfo.location.localtime}} </h3>
    </b-col>
    </b-row>
    
<b-row class="my-1" >
      <b-col md="6" class="centered" >
          <b-img  v-if="display" center size="lg"  img v-bind:src="weatherinfo.current.weather_icons" 
            fluid alt="weather image"  rounded="circle"  class="resp"></b-img>
            <h2 class="text-center" v-if="display">  {{weatherinfo.current.temperature}}°c </h2>
            <h3 class="text-center" v-if="display">  {{weatherinfo.current.weather_descriptions[0]}}</h3>
            <h3 class="text-center" v-if="display"> {{weatherinfo.current.wind_speed+"KT"}} <span>{{weatherinfo.current.wind_dir}}</span> </h3>
    </b-col>
</b-row>  
</b-container>
</template>

<script>

export default {
    data(){
       return{
           weatherinfo:{
               location:'',
               current:''
           },
           city:'',
           display:false
       }
    },
    methods:{
         getweather:function(){
          let uri = 'http://api.weatherstack.com/current? access_key=4af50da55721efc2207cb7407bbebf69&query='+this.city
          this.axios.get(uri).then((response) => {
               this.weatherinfo=response.data
               this.display=true
               console.log(response.data)
              });
       }
    }
    
}
</script>
response
<style scoped>
.centered{
margin: 0 auto;
}
.resp{
    max-height: 100%;
    max-width: 100%;
    height: 100px;
}
</style>