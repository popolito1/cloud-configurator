<template>
    <div class>
    <div class="all">
         <div class="products">
            <div class="title"> 
                <div class="divparent">
                      <div1>
                            <p1>Products</p1>
                            <div class="link">
                                See all products
                            </div>
                            <button class="allproducts">
                                See all →
                            </button>
                      </div1>
                      <div1>
                        <div class="button_container">
                            <button>
                                Processeur
                            </button>
                            <button>
                                Carte mère 
                            </button>
                            <button>
                                Mémoire vive
                            </button>
                            <button>
                                Carte graphique
                            </button>
                            <button>
                                Boitier
                            </button>
                            <button>
                                Alimentation
                            </button>
                            <button>
                                Ventirad
                            </button>
                        </div>
                     </div1>
                </div>
            </div>
        </div>
         <div class="products">
            <div class="title"> 
                <p1>Configurators</p1>
                <div class="link">
                    Create your own config !
                </div>
                <button class="allproducts">
                    <router-link to="/configurator">Create your setup →</router-link>
                </button>
            </div>
            
        </div>
        
    </div>
   
       
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'HomePage',
    })
</script>


<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap');

body {
    font-family: 'Open sans';
    background: #ece6d9;
}



body{
    background-color: #F6F6F6;
    color:black;
    height: auto;
}

.products{
    display: grid;
    align-items: center; 
    display: flex; 
    justify-content: center; 
    height: 100%; width: 100%; 
    margin-top: 2%; margin-bottom: 5%;
    border-radius: 10px;
    border: none;
    color: white;
}

.title p1{
    margin: 20% 0 20% 0;
    font-size: 270%;
}

.title{
    border: 1px solid black;
    background: rgba(52, 75, 157, 0.58);
    padding-right: 70%;
    padding-left: 5%;
    padding-top: 4%;
    
}

.divparent div1 {
    float: left;
    clear: none; 
}

.allproducts{
    margin: 20% 0 40% 0;
    background-color: #4F9CF9;
    border-radius: 10px;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-bloc;
}

.item{
    padding-left: 40%;
    padding-right: 40%;
    border: 1px solid black;
    background: rgba(52, 75, 157, 0.58);
}



.button_container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-left: 600%;
}

button {
   display: flex;
   
}

</style>