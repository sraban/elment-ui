# elment-ui

# el-table improvements
- https://developpaper.com/question/element-ui-custom-table-header-to-display-exceptions/
- https://www.codeshelper.com/article/25070.html
- https://www.codeshelper.com/article/24231.html
- https://codepen.io/yufish/pen/oNWjKeY


  renderContent (h, { node, data, store }) {
    return h('SPAN', [
      h('SPAN', [h('SPAN', node.label)]),
      h('SPAN', {attrs: {style: 'float: right; margin-right: 20px'}}, [
        h('el-button', { attrs: { size: 'mini', on: { click: this.append(store, data) } } }, 'Append'),
        h('el-button', { attrs: { size: 'mini', on: { click: this.delete } } }, 'Delete')
      ])
    ])
  }
  

<a href="#" on:click|preventDefault={onDelete.bind(this, project_id)}>delete</a>



# vue2-datatable
- https://onewaytech.github.io/vue2-datatable/examples/dist/#advanced






# v-model custom compoment
https://learnvue.co/2021/01/everything-you-need-to-know-about-vue-v-model/#tips-for-using-v-model

v-model.number='value'
v-model.trim.laz
v-model:columns


===============================

<custom-text-input v-model="value" v-model:others='lastName'/>

<!-- IS THE SAME AS -->

<custom-text-input 
   :modelValue="value"
   :others="lastName"
   @update:modelValue="value = $event"
   @update:others="lastName = $event"
/>

@input='$emit("update:modelValue", $event.target.value)'
@input='$emit("update:others", $event.target.value)'
_________________________________________________________________________________________________
named v-model
<custom-text-input v-model:name="value" />

<custom-text-input 
      v-model='value' 
      v-model:lastName='lastName'
    />

<custom-text-input 
  v-model.no-whitespace='value' 
  v-model:lastName='lastName'
/>


