<template lang="html">

  <section class="fields">
    <h1>fields Component</h1>



  <div :set="cities = ['Shanghai', 'Beijing', 'India', 'Delhi']">
    <el-checkbox-group v-model="allfields.checkedCities" size="mini" text-color="red" fill="yellow">
      <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
    </el-checkbox-group>
  </div>
  <hr>

  <div>
    <el-input placeholder="Please input" v-model="allfields.input"></el-input>
  </div>
  <hr>

  <div>
    <el-input placeholder="Please input" v-model="allfields.input1" suffix-icon="el-icon-date"></el-input>
  </div>
  <hr>

  <div>
    <el-input placeholder="Type something" v-model="allfields.input2">
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </el-input>
  </div>
  <hr>


<div :set="cities=[{value:'1'.repeat(29),label:'A'.repeat(29)},{value:'2'.repeat(29),label:'B'.repeat(29)}]">
  <el-select v-model="allfields.user" placeholder="Select" filterable popper-append-to-body>
    <el-option
      v-for="item in cities"
      :key="item.value"
      :label="item.label"
      :value="item.value">
      <span style="float: left">{{ item.label }}</span>
      <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
    </el-option>
  </el-select>
</div>
  <hr>


<div class="block">

    <el-date-picker
      v-model="allfields.datepick"
      type="date"
      default-value="2010-10-01"
      format="yyyy/MM/dd"
      value-format="yyyy-MM-dd"
      placeholder="Pick a day">
    </el-date-picker>

    <el-input placeholder="Please input" v-model="allfields.datepickString" prefix-icon="el-icon-date"></el-input>


    <el-popover placement="top" v-model="allfields.visible">
      
      <el-row type="flex">
        <el-col>
          @Today
        </el-col>
        <el-col> 
          <el-input type="number" v-model="allfields.datepickString" size="mini"></el-input> 
        </el-col>
        <el-col :offset="2">
          <el-button type="primary" size="mini" @click="allfields.visible = false">ok</el-button>
        </el-col>
      </el-row>       

      <el-button slot="reference"><i class="el-icon-date"></i></el-button>
      
    </el-popover>

  </div>
  <hr>






  </section>
</template>

<script lang="js">

  export default  {
    name: 'fields',
    props: [],
    mounted () {
      
    },
    data () {
      return {
        allfields:{
          checkedCities: [],
          input:'',
          input1:'',
          input2:'',
          user:'',
          datepick:'',
          todayString:'-10',
          visible: false
        }
      }
    },
    methods: {

    },
    computed: {

    },
    watch: {
      allfields: {
        immediate: true,
        handler(datas) {
          console.log(datas);
        },
        deep: true
      }
    }
}


</script>

<style scoped lang="scss">
  .fields {

  }
</style>
