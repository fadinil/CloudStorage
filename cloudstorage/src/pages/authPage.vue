<template>
    <div>
        <signInForm />
        <signUpForm />
    </div>
    <div v-for="(user, index) in users">
        <div>
            <p> {{ index }} </p>
        </div>
        <div>
            <p>ID: {{ user.name }}</p>
        </div>
        <div>
            <p>Имя: {{ user.username }}</p>
        </div>
        <div>
            <p>Пароль: {{ user.email }} </p>
        </div>
    </div>
</template>



<script>
import signInForm from '@/components/signInForm';
import signUpForm from '@/components/signUpForm';
import axios from 'axios';

export default {
    components: {
        signInForm,
        signUpForm
    },
    data() {
        return {
            users: [
                // {
                //     id: 1,
                //     name: 'Илья',
                //     password: 'sdvdf243'
                // }
            ]
        }
    },
    methods: {
        async fetchUsers() {
            try {
                const response = await axios.get(
                    // "https://jsonplaceholder.typicode.com/users",
                    "http://ip:5000/",
                    
                    // { headers: { "Access-Control-Allow-Origin": "*" } }
                );
                this.users = response.data;
            } catch (error) {
                alert("ОШИБКА");
            } finally {
            }
        }
    },
    mounted() {
        this.fetchUsers();
    }
}
</script>



<style scoped>
</style>
