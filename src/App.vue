<template>
  <div id="app">
   <div>
    <label>Name:</label>
     <input type="text" v-model="name"/>
    <button @click="submitName"> Add </button> <!--llamo evento de methods // agregar dato-->
   </div>

    <div>
      <ul>
        <!-- valriable de la base de datos-->
        <li v-for="personName of names" v-bind:key="personName['.key']">
          <div v-if="!personName.edit"> <!-- si no esta editanado -->
            <p>{{personName.name}} </p> <!-- si solo pone personName se muestra todos los datos-->
              <button @click="removeName(personName['.key'])">Remove</button> <!-- remueve la ersona segun el key-->
              <button @click="setEditName(personName['.key'])">Edit</button>
            </div>
          <div>
              <input type="text" v-model="personName.name">
              <button @click="saveEdit()"> Save </button>
              <button @click="cancelEdit(['.key'])"> Cancel </button>
          </div>
        </li> 
      </ul>
    </div>
  </div>
</template>

<script>
// para ejecutar servidor usar npm run dev
import {namesRef} from './firebase';

export default {
  name: 'app',
  data () { // entrada de datos 
    return {
      name : ''//m no necesita ; //inicia con texto en blanco
      //msg: 'Welcome to Your Vue.js App'
    }
  },
  firebase: {
    names: namesRef
  },
  methods: { // eventos
    submitName() {
      namesRef.push({name: this.name, edit:false}) // edicion falso
      this.name=''; //deja el input en blanco desues de agregar
    },
    removeName(key) {
      namesRef.child(key).remove();
    },
    setEditName(key) {
      namesRef.child(key).update({edit:true}) //edicion verdadero
    },
    cancelEdit(key) {
      namesRef.child(key).update({edit:false}) //era false y seve edit tambien
    },
    saveEdit(person) { // elige por el nombre que esta escrito en el campo
      const key=name['.key'];
      namesRef.child(key).set({name:person.name, edit:false}) // despues de editar se vuelve falso
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  /* display: inline-block; */  /*  la lista se muesta de derecha a izquierda y en horizaontal*/
  margin: 0 10px;
}

a {
  color: #42b983;
}
button {
  background: transparent;
  border: 2px solid black;
}
</style>
