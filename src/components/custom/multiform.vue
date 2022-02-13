<template lang="html">
<!-- https://jsfiddle.net/cgL6y9kq/34/ -->
  <section class="multiform">
    <h1>Multiform Component - </h1>

    

    <el-form :model="form" ref="form" label-width="120px" :rules="formRules" size="min" :set="defaultFields = Object.keys(fields)" label-position="top">
        <div v-for="(item, row) in form.fields" :key="row"> <!-- Row -->
           <div v-for="(field, col) in Object.keys(item)" :key="col"> <!-- Col/Fields in Form -->

              
              
              
              <!-- All Fields Pre-Designs-->
                <div v-for="(dfieldkey, ind) of defaultFields" :key="ind+'_'+row" :set="dfield = fields[dfieldkey]">
                  <!-- {{ field }} -- {{ dfieldkey }} -->
                  <span v-if="field == dfieldkey" style="border:1px solid red; padding:5px;margin:5px;display:block;">
                    
                        
                        
                        

                        <el-form-item :prop="'fields.'+row+'.'+field" >
                          <template slot="label" style="width:100%;">
                            <el-row :gutter="20" type="flex">
                              <el-col :span="14" :offset="0">
                               <i class="el-icon-circle-close" @click="removeFields(field, row)"></i> {{ dfield.label }}
                              </el-col>
                              <el-col :span="10" :offset="0">
                                <el-select v-model="form.modes[row][field]" style="float:right;">
                                  <el-option :label="'Equal_'+i" :value="i" v-for="i in 10" :key="i"></el-option>
                                </el-select>
                              </el-col>
                            </el-row>
                          </template>
                          
                        <!-- select -->
                          <el-select v-model="item[field]" multiple style="width:100%;"></el-select><!-- 0. String, 1. Multiple array value,  2. Field Type(From, To) -->
                        <!-- date -->
                          <el-row :gutter="20">
                            <el-col :span="24" :offset="0">
                              From:
                              <el-date-picker type="date" popper-class="sraban-date-picker"> </el-date-picker>
                              <el-popover placement="top">
                                <div style="width: 70%;">
                                  <el-row :gutter="20">
                                    <el-col :span="12" :offset="0">
                                      <el-button type="primary" size="mini" @click="visible = false">@Today</el-button>
                                    </el-col>
                                    <el-col :span="12" :offset="0">
                                      <el-input-number type="number" size="mini" label="" :min="1" :max="10" :step="1" :controls="true" controls-position="both" @change="e => e" @input="() => {}">
                                      </el-input-number>
                                    </el-col>
                                  </el-row>    
                                </div>
                                <span slot="reference"> <i class="el-icon-edit"></i> </span>
                              </el-popover>
                            </el-col>
                          </el-row>

                          <el-row :gutter="20">
                            <el-col :span="24" :offset="0">
                              To: 
                              <el-date-picker type="date" popper-class="sraban-date-picker"> </el-date-picker>
                              <el-popover placement="top">
                                <div style="width: 70%;">
                                  <el-row :gutter="20">
                                    <el-col :span="12" :offset="0">
                                      <el-button type="primary" size="mini" @click="visible = false">@Today</el-button>
                                    </el-col>
                                    <el-col :span="12" :offset="0">
                                      <el-input-number type="number" size="mini" label="" :min="1" :max="10" :step="1" :controls="true" controls-position="both" @change="e => e" @input="() => {}">
                                      </el-input-number>
                                    </el-col>
                                  </el-row>    
                                </div>
                                <span slot="reference"> <i class="el-icon-edit"></i> </span>
                              </el-popover>

                            </el-col>
                          </el-row>
                        <!-- checkbox -->
                        
                        <el-checkbox-group v-model="item[field]" @change="e =>e">
                          <el-checkbox v-for="item in 4" :key="item.key" :label="item">
                            Sraban - {{item}}
                          </el-checkbox>
                        </el-checkbox-group>

                        <!-- editable input -->
                        <el-input v-model="item[field]" placeholder="" size="normal" clearable @change="e => e"></el-input>
                        
                          


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


        <select @change="newGroupFields($event.target.value, true)" style="float: right;position: relative;top: -20px;">
          <option value="">OR</option>
          <option v-for="(dfield, ind) of defaultFields" 
                  :value="dfield"                  
                  :key="ind+'_or_'">
                  {{ fields[dfield].label }}
            </option>
        </select>

    </el-form>

    {{ form }}


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
  .multiform ::v-deep {
    .el-form-item label{
      width:100%;
    }
  }
</style>
