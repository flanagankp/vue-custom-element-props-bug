<template>
  <span>Here is your attribute as a prop: {{myProp}}</span>
</template>
<script lang="ts">
import { defineComponent, onBeforeUpdate, onMounted } from 'vue'

export default defineComponent({
  name: 'SampleComponent',
  props:{
    myProp: {
      type: String,
      required: true,
    }
  },
  setup(props) {
    console.log(`Prop on setup: ${props.myProp}`)

    onMounted(()=>{
      console.log(`Prop on mount: ${props.myProp}`)
    })

    onBeforeUpdate(()=>{
      console.log(`Prop on update: ${props.myProp}`)
    })
  }
})
</script>
