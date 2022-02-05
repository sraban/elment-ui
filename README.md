# elment-ui

# el-table improvements
- https://developpaper.com/question/element-ui-custom-table-header-to-display-exceptions/
- https://www.codeshelper.com/article/25070.html
- https://www.codeshelper.com/article/24231.html


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
