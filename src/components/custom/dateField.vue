<template lang="html">

  <section class="date-field">
    <h1>https://jsfiddle.net/cgL6y9kq/34/</h1>
    <h1>https://codepen.io/xingzhi/pen/vZbpPK</h1>
    <h1>https://codepen.io/yufish/pen/oNWjKeY</h1>


  <div class="block">
    <span class="demonstration">Use value-format</span>
    <div class="demonstration">Value: {{ value1 }}</div>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="Pick a Date"
      format="yyyy/MM/dd"
      value-format="yyyy-MM-dd">
    </el-date-picker>
  </div>


  <div class="block">
    
    
    <el-date-picker
      v-model="value2"
      type="date"
      placeholder="Pick a day"
      popper-class="sraban-date-picker"
      :picker-options="pickerOptions">
    </el-date-picker>

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

  </div>

  <br>
  <br>
  <br>
  <br>

  <el-form :model="form" ref="form" :rules="rules" label-width="80px" :inline="false" size="mini" label-position="top">
   
    <el-form-item label="Release date">
      <el-input v-model="form.rdate"></el-input>
    </el-form-item>


<!-- 1 -->

  
    <el-form-item  :rules="{required:true}">
      <template scoped-slot="error">
        <el-row :gutter="20">
          <el-col :span="12" :offset="0">
            Status Status Status Status Status
            </el-col>
          <el-col :span="12" :offset="0">

            <el-select v-model="mode" value-key="mode" placeholder="" clearable filterable @change="e => e">
              <el-option v-for="item in 10"
                :key="item"
                :label="item+'- Equal'"
                :value="item">
              </el-option>
            </el-select>

          </el-col>
        </el-row>
        
      </template>
      
      

      
      
    </el-form-item>


<!-- 2 -->
  
    <el-form-item label="Release date">
      <el-input v-model="form.rdate"></el-input>
    </el-form-item>


<!-- 3 -->
  
    <el-form-item label="Release date">
      <el-input v-model="form.rdate"></el-input>
    </el-form-item>


<!-- 4 -->

    <el-form-item label="Release date">
      <el-input v-model="form.rdate"></el-input>
    </el-form-item>


    <el-form-item>
      <el-button type="primary" @click="e =>e">Save</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
  


  </section>

</template>

<script lang="js">

  export default  {
    name: 'date-field',
    props: [],
    data () {
      return {
        mode:'',
        form:{
          rdate:'',
          status:[],
          tags:[],
          country:[]
        },
        rules:{},
        value1: '',
        value2: '',
        value3: '',
        pickerOptions: {
          disabledDate(time) {
            var d = new Date();
            //console.log(d.toLocaleDateString());
            d.setMonth(d.getMonth() - 3);
            //console.log( time.getTime() );
            // console.log(d.toLocaleDateString(), d.getTime() );
            return false;
          },
          onPick(maxDate, minDate) {
            alert('loading...');
          },
          shortcuts: [{
            text: 'Today11',
            onClick(picker) {
              picker.$emit('pick', '2000-10-10');
            }
          }]
        }
      }
    },
    methods: {
        jobYearChange() {
            alert('222');
        }
    },
    computed: {

    },
    mounted() {
      document.querySelectorAll('.el-date-editor').forEach((el) => {
          el.addEventListener('click', () => {
            
            // let popDate = document.querySelector('.sraban-date-picker');
          // alert(popDate.clientHeight);
          document.querySelector('.sraban-date-picker .el-picker-panel__sidebar   .el-picker-panel__shortcut').innerHTML = 'Today <input type="number" style="width: 70px;">';

          });
      });
    }
}


</script>

<style scoped lang="scss">
  .date-field {

  }

</style>

<div class="el-picker-panel__sidebar">
    <button type="button" class="el-picker-panel__shortcut">Today</button><button type="button" class="el-picker-panel__shortcut">Yesterday</button><button type="button" class="el-picker-panel__shortcut">A week ago</button>
</div>
