
const app = new Vue({

    el: '#app',

    data: {
        titulo: 'CRUD con Vue',
        tareas: [],
        nuevaTarea: ''
    },

    methods: {
        
        agregarTarea(){
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });
            
            this.nuevaTarea='';
            //this.save();
            localStorage.setItem('crud-vue', JSON.stringify(this.tareas));
        },

        completar(index){
            this.tareas[index].estado = true;
            //save();
            localStorage.setItem('crud-vue', JSON.stringify(this.tareas));
        },
        
        borrar(index){
            this.tareas.splice(index, 1);
            //save();
            localStorage.setItem('crud-vue', JSON.stringify(this.tareas));
        },

        /*save(){
            localStorage.setItem('crud-vue', JSON.stringify(this.tareas));
        }*/

    },

    created: function(){

        let datosDB = JSON.parse(localStorage.getItem('crud-vue'));

        if(datosDB===null){
            this.tareas = [];
        }
        else{
            this.tareas = datosDB;
        }
    }

});