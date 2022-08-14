<template>
    <div class="navbar">
        <div class="navbar__btns">
            <my-button 
            style="margin-left: 15px;"
            >Войти</my-button>
            <my-button 
            style="margin-left: 30px;"
            >Регистрация</my-button>
        </div>
    </div>
</template>



<script>
export default {
}
</script>



<style scoped>
.navbar {
    height: 50;
    background-color: rgb(228, 228, 228);
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
    padding: 15px 15px;
}

.navbar__btns {
    margin-left: auto;
}
</style>
