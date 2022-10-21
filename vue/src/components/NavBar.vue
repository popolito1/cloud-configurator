<template>
    <nav class="navigation">
        <ul>
            <li class="elementNav">
                <router-link to="/">Home</router-link>
            </li>
            <li class="elementNav">
                <router-link to="/products">Products</router-link>
            </li>
            <li class="elementNav">
                <router-link to="/configurator">Configurator</router-link>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'NavBar',
    })
</script>

<style scoped>

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
    background-size: cover;

}
</style>

