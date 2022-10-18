<template>
    <div class>
        <nav class="navigation">
            <ul>
                <li class="elementNav">
                    <a class="zoom" href="index.html">
                        Home
                    </a>
                </li>
                <li class="elementNav">
                    <router-link to="/products">Products</router-link>
                    <a href="pageB.html" class="zoom">
                    </a>
                </li>
                <li class="elementNav">
                    <router-link to="/configurator">Configurator</router-link>
                    <a href="designpage2.html" class="zoom">
                    </a>
                </li>
            </ul>
        </nav>
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
                                hello
                            </button>
                            <button>
                                hello
                            </button>
                            <button>
                                hello
                            </button>
                            <button>
                                hello
                            </button>
                            <button>
                                hello
                            </button>
                            <button>
                                hello
                            </button>
                            <button>
                                hello
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
                    Create your setup →
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

nav.navigation ul li.elementNav{
    list-style-type: none;
    display: inline-block;
    margin-right: 6%;
    align-content: center;
    color: #F6F6F6;
    text-shadow: 2px 2px 4px #000000;

}


nav.navigation ul li.elementNavv{
    list-style-type: none;
    display: inline-block;
    margin-right: 6%;
    align-content: center;
    color: #000000;
    border-radius: 15%;
    padding: 15px 15px 15px 15px;
}

nav.navigation ul li.elementNav a{
    text-align: center;
    text-decoration: none;
    background-color: #5D7963;
    color: #F6F6F6;
    padding: 10px;
    font-family: 'Courier New', Courier, monospace ;
    font-size: 150%;
    background:  rgba(216, 252, 223, 0.0);   
}

nav.navigation ul li.elementNavv a{
    text-align: center;
    text-decoration: none;
    background-color: #5D7963;
    color: #000000;
    padding: 10px;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 150%;
    background:  rgba(216, 252, 223, 0.0);
    position: relative;
    
}

nav.navigation ul li.elementNavv a span{
    display: none;
}

nav.navigation ul li.elementNavv a:hover{
    background: none;
    z-index: 500;
    cursor:pointer;

}

nav.navigation ul li.elementNavv a:hover span{
    display: inline; 
    position: absolute;
    top: 50px; 
    background: white;
    color: black;
    padding: 3px;
    border: 1px solid #e5d8d0;
    border-left: 4px solid #e5d8d0;
    font-size: large;
}


#navbar{
    position: fixed;
    width: 100%;
    background:  rgba(93, 121, 99, 0.0);
    display: block;
    transition: top 0.3s;
    top: -500000px;

}

#navbar a{
    display: block;
    text-align: center;
    
}


nav.navigation ul li.elementNav:hover a{
    color: #F6F6F6;
    background:  rgba(93, 121, 99, 0.0);
    transition: 0.3s all;


}
nav.navigation{
    background-color: #344B9D;
    padding: 10px;
    text-align: center;
    position: relative;
    width: 100%;
    height: 100%;

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