<template>
  <yandex-map
      class="map__element"
      v-model="map"
      :settings="{
        location: {
          center: [69.240562,41.311081],
          zoom: 12,
        },
      }"
  >
    <yandex-map-default-scheme-layer/>
    <yandex-map-default-features-layer/>
    <template v-for="(marker, idx) in markerList" :key="idx">
      <yandex-map-default-marker
          v-model="markerModel"
          :settings="{
            coordinates:marker.coords,
            title: marker.name,
            draggable: true,
            onDragMove,
        }"
      />
    </template>


    <yandex-map-controls :settings="{ position: 'bottom right' }">
      <yandex-map-geolocation-control/>
    </yandex-map-controls>
    <yandex-map-listener
        :settings="{
             onClick: createEvent('dom', 'click'),
             onUpdate: createEvent('map', 'update'),
        }"
    />
  </yandex-map>
</template>

<script setup>
import { shallowRef, ref } from 'vue';
import { YandexMap,
  YandexMapDefaultSchemeLayer,
  YandexMapDefaultMarker,
  YandexMapDefaultFeaturesLayer,
  YandexMapGeolocationControl,
  YandexMapControls,YandexMapListener
} from 'vue-yandex-maps';



const map = shallowRef(null);
const markerList = ref([])
const markerModel = ref(null)



const onDragMove = (e) => {
  // console.log(e)
}


const createEvent =(category,type)=> {
  return (object,event) => {
    if(object && event === undefined){
      addMarker(object.location.center)
    }

  };

};

const addMarker=(coords)=>{
  markerList.value =[]
  markerList.value.push({
    name:"Me",
    coords:coords
  })

}

</script>