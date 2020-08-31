<template>
    <div class="home">
       <h1 class="mt-50">Teste de engenharia do GrupoZap</h1>
       <h3>Clique abaixo para filtrar os imóveis por portal</h3>
        <br>
        <p class="lead">
            <b-button exact class="ml-2 mt-2 vivareal"  to="/vivareal/1"><img src="../assets/vivareal.svg" alt="vivareal"></b-button>
            <b-button exact class="ml-2 mt-2" variant="secondary" to="/zap/1/"><img src="../assets/logo_zap.png" alt="zap"></b-button>
        </p>
    </div>
</template>


<script>
    export default {
        props: ['json'],
        mounted() {
            console.log(this.a);
        }
    }
</script>

<style scoped>

div {
    height: 500px;
    padding: 40px;
    text-align: center;
}

.btn {
    min-width: 200px;
}

.btn img{
        width: auto;
        height: 30px;
}

h1 {
    color: rgb(0, 165, 145);
}


</style>