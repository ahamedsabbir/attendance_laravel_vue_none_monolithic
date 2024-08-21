<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card shadow-sm">
                    <div class="card-header">
                        <h3>Dashboard</h3>
                    </div>
                    <div class="card-body">
                        <p class="mb-0">You are logged in as <b>{{ user?.data?.name }}</b></p>
                        <p class="mb-0">You Detail is below<br/> <b>{{ userData }}</b></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"dashboard",
    data(){
        return {
            user:[],
            userData:[]
        }
    },
    async mounted() {
        this.user = JSON.parse(localStorage.getItem('user'))
        let token = this.user?.data.token;
        const authHeader = {
            'Authorization': 'Bearer ' + token,
            'X-REQUEST-TYPE': 'axios'
        }
        let config = {headers:authHeader}
        await axios.get('/api/user',config ).then(({data})=>{
                this.userData=data;
                router.push({name:'dashboard'})
            }).catch(({response})=>{
                if(response){
                    this.validationErrors = {}
                    alert(response?.data.message)
                }
            })
    }
}
</script>