<template lang="html">

  <section class="dynamic-table" id="dynamic-table">
    
        <h1>dynamic-table Component</h1>



        <el-select
            v-model="selectedCol"
            class="select-columns"
            multiple            
            filterable
            allow-create
            :popper-append-to-body="false"
          >
          <template #prefix>
            <i class="el-icon-menu" />
          </template>

          <el-option v-for="(bool, col) in columns" :key="col" :value="col">

            <div draggable="true" @drag="e=>setDragging(e)" @dragover="e=>setDraggedOver(e)">
              <el-checkbox :model-value="columns[col]" @click="e => e.preventDefault()">
                {{ col }}
              </el-checkbox>
            </div>
            
          </el-option>
        </el-select>


          <el-table :data="tableData" border>
            <template v-for="(bool, col) in columns">
              <el-table-column
                v-if="bool"
                :key="col" 
                :label="col.toUpperCase()" 
                :prop="col" 
                min-width="120" 
                align="center" 
              >
              </el-table-column>
            </template>
          </el-table>

          

      <selectCheckbox></selectCheckbox>

          <textarea v-if="tableData" v-html="tableData"></textarea>


    </section>

  </template>
  

<script lang="js">
  
  export const selectCheckbox = {
    props: [],
    render() {
      return(
        <div>
         <el-button type="primary">Sraban</el-button>
        </div>
      )
    }
  }

  export default  {
    name: 'dynamic-table',
    template:'#dynamic-table',
    components:{ selectCheckbox },
    props: [],
    mounted () {
      
    },
    data () {
      return {
        selectedCol:'',
        columns: {
          id: true,
          date: true,
          name: true,
          phone: false,
          address: false
        },
        tableData: []
      }
    },
    created() {
      for (const prop in this.columns) {
        for (let i = 0; i < 3; i++) {
          if (!this.tableData[i]) this.tableData[i] = {};
          this.tableData[i][prop] = `${prop}${i + 1}`;
        }
      }
    },
    methods: {
      setDragging(e) {
        if( e.target.outerText != 'NaN' ) window.dragging = e.target.outerText;        
      },
      setDraggedOver(e) {
        if( e.target.outerText != 'NaN' ) window.draggedOver = e.target.outerText;
        this.compare();
      },
      compare(){
        var columns = Object.keys(this.columns), tmlClm={};
        var index1 = columns.indexOf(window.dragging);
        var index2 = columns.indexOf(window.draggedOver);
        
        columns.splice(index1, 1);
        columns.splice(index2, 0, window.dragging);
        columns.forEach((row) => {
          tmlClm[row] = this.columns[row];
        });
        this.columns = tmlClm;
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
 .select-columns {
        width: 60px;
        height: 40px;
        margin-bottom: 20px;
        .el-select-dropdown.is-multiple .el-select-dropdown__item.selected::after {
          content: "";
        }
        .el-select__tags {
          display: none !important;
          z-index: -11111;
          width:0px !important;
        }
        .el-select__tags .el-tag{
          display: none !important;
          z-index: -11111;
          width:0px !important;
        }
        .el-input__prefix {
          padding-left: 5px;
          color: #606266;
          font-size: 18px;
        }
    }
</style>
