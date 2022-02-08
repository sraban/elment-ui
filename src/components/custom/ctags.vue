<template lang="html">

  <section class="ctagas">

<el-row>
  <el-col :span="6">

              <div class="ctags">
                  <el-select
                          v-model="value10"
                          multiple
                          filterable
                          allow-create
                          default-first-option
                          popper-class="select-dropdown-sraban"
                          placeholder="" class="ctags_input w-100">
                      <el-option
                              v-for="item in options5"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                      </el-option>
                  </el-select>

              </div>

<textarea v-html="value10"></textarea>

<hr>


  <div class="ctags">
    <el-select
        :value="selected"
        @input="dispatch"
        @keyup.enter.native="onSubmit"
        placeholder=""
        :filterable="true"
        multiple
        allow-create
        popper-class="select-dropdown-sraban"
        :remote="true"
        :remote-method="filter"
        :loading="loading">
        <el-option
          v-for="item in clients"
          :key="item._id"
          :label="item.name"
          :value="item._id">
        </el-option>
      </el-select>
  </div>
<textarea v-html="selected"></textarea>

  </el-col>
</el-row>




  </section>

</template>

<script lang="js">

  export default  {
    name: 'ctags',
    props: [],
    mounted () {

    },
    data () {
      return {
          value10: [],
          options5: [{
              value: 'India',
              label: 'India'
          }, {
              value: 'China',
              label: 'China'
          }, {
              value: 'USA',
              label: 'USA'
          }],


          selected: '',
          clients: [],
          loading: false,
      }
    },
    methods: {
        filter(query) {
          if (query !== '') {
            this.loading = true;
            setTimeout(() => {
              this.loading = false
              this.clients = [{_id: '1', name: 'foo'}, {_id: '2', name: 'bar'}];
              
              this.clients = this.clients.map( row => {
                 if(row.name == query.toLowerCase() ) row.name = query;
                 return row;
              });
              
            }, 200)
          } else {
            this.clients = []
          }
        },

        dispatch (e) {
          this.$emit('input', e)
          this.selected = e
        },
        onSubmit() {
         // return false;
        }
    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
.ctags ::v-deep.el-select {
       
        outline: none;
        width:100% !important;

      .el-input--suffix {
        outline: none;
      }
      .el-input__suffix{
        display:none;
        width:0px;
      }
      input.el-input__inner{
        outline: none;
        // border:1px solid green;
        border:none;        
        caret-color: transparent;
        color: transparent;
        text-shadow: 0px 0px 1px #fff;
        padding:0px;
      }
      .el-select__input {
        border: 1px solid grey;
        border-radius:5px;
        margin-left: 5px;
        padding:0px 5px;
        min-width:100px !important;
        max-width:100px !important;
      }
      .el-select .el-input.is-focus .el-input__inner {
        border-color:none;
      }
      .el-select__tags {
        max-width: 100% !important;
      }

  }
</style>
