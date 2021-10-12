import { defineCustomElement } from '@vue/runtime-dom'
import SampleComponent from './components/SampleComponent.ce.vue'

export const SampleComponentCE = defineCustomElement(SampleComponent)

if (!window.customElements.get('sample-component')) {
    window.customElements.define('sample-component', SampleComponentCE)
}