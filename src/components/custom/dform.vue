<template lang="html">

  <section class="dform">
    
     <form style="background:yellow">
      <label for="first name">First Name:</label>
      <input type="text" required>
      <br>
      <label for="last name">Last Name:</label>
      <input type="text" required>
      <br>
      <label for="country">Nationality:</label>
      <input type="text"  required>
      <br>
      <label for="passport number">Passport Number:</label>
      <input type="text"  required>
  
      <label for="duration">Duration of stay:</label>
      <input type="text"  required>
    
<hr>

      <div class="previous" v-for="(applicant, counter) in applicants" v-bind:key="counter">
        
        <span @click="deleteVisa(counter)">x</span>
        
        <label for="duration">{{counter+1}}. Previous Visa:</label> <input type="text" v-model.lazy="applicant.previous" required>
        <label for="duration">Year of expiration:</label> <input type="text" v-model.lazy="applicant.expiration" required> 

      </div>

       <br><br>
      <button @click="addVisa">Add another previous visa</button>
      <br>
<textarea v-html="applicants"></textarea>
    </form>


    <br>
    <br>
    <br>
    <hr>
    <br>
    <br>

  <form>
    <textarea v-html="bform"></textarea>
    <hr>

<!-- Fields -->
<div v-for="(row,index) of fieldsddFlag" :key="index">

          <el-row type="flex" v-if="false">
            <el-col> <span @click="deleteField(index)">X{{ index }}</span> </el-col>
            <el-col>

                Modes

            </el-col>
            <el-col>

          {{ row }}

            </el-col>
            <el-col></el-col>
            <el-col></el-col>
            <el-col></el-col>
          </el-row>
<!--  -->
          <el-row type="flex" v-if="row == 'date_between'">
            <el-col> <span @click="deleteField(index)">X{{ index }}</span> </el-col>
            <el-col>

                Modes

            </el-col>
            <el-col>

              <el-date-picker v-model="value2" type="date" placeholder="Pick a day" :picker-options="pickerOptions"></el-date-picker>

            </el-col>
            <el-col></el-col>
            <el-col></el-col>
            <el-col></el-col>
          </el-row>

<!--  -->
          <el-row type="flex" v-if="row == 'country'">
            <el-col> <span @click="deleteField(index)">X{{ index }}</span> </el-col>
            <el-col>

                Modes

            </el-col>
            <el-col>

              <el-select
                      v-model="value11"
                      multiple
                      collapse-tags
                      placeholder="Please select">
                  <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                  </el-option>
              </el-select>

            </el-col>
            <el-col>

              <el-select
                      v-model="value12"
                      multiple
                      collapse-tags
                      placeholder="Please select">
                  <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                  </el-option>
              </el-select>

            </el-col>
            <el-col></el-col>
            <el-col></el-col>
          </el-row>


<!--  -->
          <el-row type="flex" v-if="row == 'tags_add'">
            <el-col> <span @click="deleteField(index)">X{{ index }}</span> </el-col>
            <el-col>

                Modes

            </el-col>
            <el-col>

              <el-select
                      v-model="value10"
                      multiple
                      filterable
                      collapse-tags
                      default-first-option
                      placeholder="Please select an article label">
                  <el-option
                          v-for="item in options5"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                  </el-option>
              </el-select>

            </el-col>
            <el-col>

              <el-select
                      v-model="value10"
                      multiple
                      filterable
                      allow-create
                      default-first-option
                      placeholder="Please select an article label">
                  <el-option
                          v-for="item in options5"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                  </el-option>
              </el-select>

            </el-col>
            <el-col></el-col>
            <el-col></el-col>
          </el-row>
<!--  -->
          <el-row type="flex" v-if="row == 'tags_add'">
            <el-col> <span @click="deleteField(index)">X{{ index }}</span> </el-col>
            <el-col>

                Modes

            </el-col>
            <el-col>

              <el-select
                      v-model="value10"
                      multiple
                      filterable
                      collapse-tags
                      default-first-option
                      placeholder="Please select an article label">
                  <el-option
                          v-for="item in options5"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                  </el-option>
              </el-select>

            </el-col>
            <el-col>

              <el-select
                      v-model="value10"
                      multiple
                      filterable
                      allow-create
                      default-first-option
                      placeholder="Please select an article label">
                  <el-option
                          v-for="item in options5"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                  </el-option>
              </el-select>

            </el-col>
            <el-col></el-col>
            <el-col></el-col>
          </el-row>  

<!--  -->
          <el-row type="flex" v-if="row == 'keyword_txt'">
            <el-col> <span @click="deleteField(index)">X{{ index }}</span> </el-col>
            <el-col>

                Modes

            </el-col>
            <el-col>

              <el-select
                      v-model="value10"
                      multiple
                      filterable
                      collapse-tags
                      default-first-option
                      placeholder="Please select an article label">
                  <el-option
                          v-for="item in options5"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                  </el-option>
              </el-select>

            </el-col>
            <el-col>

              <el-select
                      v-model="value10"
                      multiple
                      filterable
                      allow-create
                      default-first-option
                      placeholder="Please select an article label">
                  <el-option
                          v-for="item in options5"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                  </el-option>
              </el-select>

            </el-col>
            <el-col></el-col>
            <el-col></el-col>
          </el-row>  


<hr>
</div>

<!-- Fields! -->


    <select @change="addField()" v-model="fields">
        <option value="">Select</option>
        <option v-for="(fld,index) of Object.keys(fieldsdd)" :value="fld" :key="index" :disabled="fieldsddFlag.indexOf(fld)!==-1">{{ fieldsdd[fld] }}</option>
    </select>

  </form>






  </section>

</template>

<script lang="js">

  export default  {
    name: 'dform',
    props: [],
    mounted () {

    },
    data () {
      return {
          applicants:[
            {
                previous: '',
                expiration:''
            }
          ],
          /* ---Form2-- */
          bform: {},
          fields:'',
          fieldsdd:{
            'country': 'Countrys',
            'date_between':'Date between',
            'date_add_replace':'Date add and replace',
            'status_chks':'Status',
            'tags_add':'Tags Add',
            'tags_addReplace':'Tags add / Replace',
            'keyword_txt':'Keyword Add',
            'keyword_txt_addReplace':'Keyword Add and Replace'
          },
          fieldsddFlag:[],
          
          /* Date */
          value2: '',
          pickerOptions: {
            disabledDate(time) {
              return time.getTime() > Date.now();
            },
            shortcuts: [{
              text: 'Today',
              onClick(picker) {
                this.value2 = '@Today';
                //picker.$emit('pick', new Date());
              }
            }, {
              text: 'Yesterday',
              onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24);
                picker.$emit('pick', date);
              }
            }, {
              text: 'A week ago',
              onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit('pick', date);
              }
            }]
          },
          /* Date! */


          /* Select1! */
          value11: [],
          value12: [],
          options: [{
                value: 'Option 1',
                label: 'Golden Cake'
            }, {
                value: 'Option 2',
                label: 'Double Skin Milk'
            }, {
                value: 'Option 3',
                label: 'Oyster fried'
            }, {
                value: 'Option 4',
                label: 'Dragon Beard Noodles'
            }, {
                value: 'Option 5',label: 'Peking duck'
          }],
          /* Select1! */
          
          options5: [{
              value: 'HTML',
              label: 'HTML'
          }, {
              value: 'CSS',
              label: 'CSS'
          }, {
              value: 'JavaScript',
              label: 'JavaScript'
          }],
          value10: []
          
          /* Select2! */



          /* --Form2!--- */
      }
    },
    methods: {
        addVisa(){
          this.applicants.push({
            previous:'',
            expiration: ''
          });
          console.log(this.applicants);
        },
        deleteVisa(counter){
          console.log(this.applicants);
          this.applicants.splice(counter,1);
        },
        /* ---- Batch Form */
        addField() {
          if(this.fields){
            this.fieldsddFlag.push(this.fields);
          }
        },
        deleteField(index) {
          this.fieldsddFlag.splice(index,1);
        }

        /* ---- Batch Form! */
    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  .dform {

  }
</style>
