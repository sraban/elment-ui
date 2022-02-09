<template lang="html">
<!-- https://jsfiddle.net/cgL6y9kq/34/ -->
  <section class="multiform">
    <h1>multiform Component</h1>

    {{ form }}

    <el-form :model="form" ref="form" label-width="120px" :rules="formRules" size="min" :set="defaultFields = Object.keys(fields)">
        <div v-for="(item, row) in form.fields" :key="row"> <!-- Row -->
           <div v-for="(field, col) in Object.keys(item)" :key="col"> <!-- Col/Fields in Form -->

              
              
              
              <!-- All Fields Pre-Designs-->
                <div v-for="(dfieldkey, ind) of defaultFields" :key="ind+'_'+row" :set="dfield = fields[dfieldkey]">
                  <!-- {{ field }} -- {{ dfieldkey }} -->
                  <span v-if="field == dfieldkey" style="border:1px solid red; padding:5px;margin:5px;display:block;">
                    
                        <i class="el-icon-circle-close" @click="removeFields(field, row)"></i>
                        
                        <el-select v-model="form.modes[row][field]">
                          <el-option label="Equal" value="="></el-option>
                          <el-option label="Similar" value="~"></el-option>
                          <el-option label="Not Equal" value="!"></el-option>
                          <el-option label="less than" value="<"></el-option>
                          <el-option label="Greater than" value=">"></el-option>
                          <el-option label="Greater-Equalto" value=">="></el-option>
                          <el-option label="Less-Equalto" value="<="></el-option>
                        </el-select>

                        <el-form-item :label="dfield.label" :prop="'fields.'+row+'.'+field">
                          <el-select v-model="item[field]" multiple></el-select><!-- 0. String, 1. Multiple array value,  2. Field Type(From, To) -->
                        </el-form-item>

                  </span>


                </div>
              <!-- All Fields Pre-Designs!-->



            <!-- Col! -->
            </div>

            <select @change="addFields($event.target.value, row, true)">
              <option value="">Add</option>
              <option v-for="(dfield, ind) of defaultFields" 
                      :value="dfield" 
                      :disabled="form.modes[row] && (form.modes[row][dfield] !== undefined)"
                      :key="ind+'_and_'+row">
                      {{ fields[dfield].label }}
                </option>
            </select>

            <!-- Row! -->
        </div>


        <select @change="newGroupFields($event.target.value, true)">
          <option value="">OR</option>
          <option v-for="(dfield, ind) of defaultFields" 
                  :value="dfield"                  
                  :key="ind+'_or_'">
                  {{ fields[dfield].label }}
            </option>
        </select>

    </el-form>

  </section>

</template>

<script lang="js">

  export default  {
    name: 'multiform',
    props: [],
    mounted () {
      this.convertToForm();
    },
    data () {
      return {
        form: this.initDefaultForm(),
        formRules: this.validationRuleFields(),
        fields: this.defaultFields()
      }
    },
    methods: {
      defaultFields(){
        return {
          status:{
            label: 'Status',
            type:'checkbox',
            optional:true
          },
          rdate:{
            label: 'Date',
            type:'checkbox',
            optional:true
          },
          country:{
            label: 'Country',
            type:'checkbox',
            optional:true
          }
        }
      },
      initDefaultForm() {
       return {
          fields:[{}],
          modes:[{}]
        }
      },
      validationRuleFields() {
        return {
          status:[],
          rdate:[]
        }
      },
      convertToForm() {
        // saved data from database
        let formDB = {
          fields:[
            {
              status:['A','B','C'],
              rdate:['2018-10-10','2018-10-09']
            },
            {
              country:['IN','US','CN'],
              rdate:['2018-10-10']
            }
          ],
          modes:[
            {
              status:'=',
              rdate:'<>'
            },
            {
              country:'~',
              rdate:'<='
            }
          ]
        };

        // this.addFields(field, index); in loop
        formDB.fields.forEach( (items, row) => {
          console.log( items, row );
          Object.keys(items).forEach((field) => {
            
            this.$nextTick(() => {
                this.addFields(field, row, false, items[field], formDB.modes[row][field]);
            });
            
          });
        });

      },
      addFields(field, index, isEl = false, value = '', mode = '') {
        if(isEl) event.target.value = '';
        if(this.form.fields[index] === undefined) {
          this.form.fields.push({});
          this.form.modes.push({});
        }
        this.$set(this.form.fields[index], field, value); // default values
        this.$set(this.form.modes[index], field, mode); // default modes
      },
      removeFields(field, index) {
        if(this.form.fields.length == 1 && Object.keys(this.form.fields[0]).length == 1) return false;
        this.$delete(this.form.fields[index], field);
        this.$delete(this.form.modes[index], field);

        this.form.fields.forEach( (row, index) => {
          if(Object.keys(row).length == 0) {
            this.form.fields.splice(index, 1); this.form.modes.splice(index, 1);
          }
        });

      },
      newGroupFields(field, isEl = false) {
        if(isEl) event.target.value = '';
        let index = this.form.fields.length;
        this.addFields(field, index);
      },
      submitForm( formName ) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('ok');
            console.log( this.form );
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  .multiform {

  }
</style>
