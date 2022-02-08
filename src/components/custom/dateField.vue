<template lang="html">

  <section class="date-field">
    <h1>https://jsfiddle.net/cgL6y9kq/34/</h1>
    <h1>https://codepen.io/xingzhi/pen/vZbpPK</h1>
    <h1>https://codepen.io/yufish/pen/oNWjKeY</h1>

<textarea v-html="qForm.items" :key="timeStammp"></textarea>

<el-form :model="qForm" ref="qForm" label-width="120px" :rules="rules">

  <div v-for="(item, index) in qForm.items" :key="index">
    <div class="col">
      
      <div v-for="(field,ind) in Object.keys(item)" :key="ind">
      
            <span v-if="field == 'description' && qForm.flags[index] && qForm.flags[index][field]">
              <i class="el-icon-circle-close" @click="removeCol(index, 'description')"></i>
              <el-form-item label="Description" :prop="'items.' + index + '.description'">
                <el-input v-model="item.description"></el-input>
              </el-form-item>
            </span>

            <span v-if="field == 'price' && qForm.flags[index] && qForm.flags[index][field]">
              <i class="el-icon-circle-close" @click="removeCol(index, 'price')"></i>
              <el-form-item label="Price" :prop="'items.' + index + '.price'" :rules="rules.price">
                <el-input v-model="item.price"></el-input>
              </el-form-item>
            </span>

            <span v-if="field == 'status' && qForm.flags[index] && qForm.flags[index][field]">
              <i class="el-icon-circle-close" @click="removeCol(index, 'status')"></i>
              <el-form-item label="Status" :prop="'items.' + index + '.status'">
                <el-input v-model="item.status"></el-input>
              </el-form-item>
            </span>

            <span v-if="field == 'tags' && qForm.flags[index] && qForm.flags[index][field]">
              <i class="el-icon-circle-close" @click="removeCol(index, 'tags')"></i>
              <el-form-item label="Tags" :prop="'items.' + index + '.tags'">
                <el-input v-model="item.tags"></el-input>
              </el-form-item>
            </span>


            <span v-if="field == 'country' && qForm.flags[index] && qForm.flags[index][field]">
              <i class="el-icon-circle-close" @click="removeCol(index, 'country')"></i>
              <el-form-item label="Country" :prop="'items.' + index + '.country'">
                <el-input v-model="item.country"></el-input>
              </el-form-item>
            </span>


            <span v-if="field == 'keywords' && qForm.flags[index] && qForm.flags[index][field]">
              <i class="el-icon-circle-close" @click="removeCol(index, 'keywords')"></i>
              <el-form-item label="Keywords" :prop="'items.' + index + '.keywords'">
                <el-input v-model="item.keywords"></el-input>
              </el-form-item>
            </span>

          
      </div>


      <select @change="addCol(index, $event)">
        <option value="">Add</option>
        <option value="description" :disabled="qForm.flags[index] && qForm.flags[index]['description']">Description</option>
        <option value="price" :disabled="qForm.flags[index] && qForm.flags[index]['price']">price</option>
        <option value="keywords" :disabled="qForm.flags[index] && qForm.flags[index]['keywords']">Keywords</option>
        <option value="status" :disabled="qForm.flags[index] && qForm.flags[index]['status']">Status</option>
        <option value="tags" :disabled="qForm.flags[index] && qForm.flags[index]['tags']">Tags</option>
        <option value="country" :disabled="qForm.flags[index] && qForm.flags[index]['country']">Country</option>
      </select>

    </div>
  </div>  

</el-form>



  <select @change="addRow($event)">
    <option value="">Or</option>
    <option value="description">Description</option>
    <option value="price">price</option>
    <option value="keywords">Keywords</option>
    <option value="status">Status</option>
    <option value="tags">Tags</option>
    <option value="country">Country</option>
  </select>

  
<br><br>
<button @click="submitForm('qForm')">Submit</button>



  </section>

</template>

<script lang="js">

  export default  {
    name: 'date-field',
    props: [],
    mounted () {

    },
    data () {
      return {
          timeStammp: + new Date(),
          qForm: {
            items: [{status: '', description:'', price:'', keywords:'', tags:'', country:''}],
            flags: [{status: true}]
          },
          rules: {
            description: { required: true, message: 'required', trigger: 'blur' },
            price: { required: true, message: 'Price required', trigger: 'blur' },
            keywords: { required: true, message: 'required', trigger: 'blur' },
            status: { required: true, message: 'required', trigger: 'blur' },
            tags: { required: true, message: 'required', trigger: 'blur' },
            country: { required: true, message: 'required', trigger: 'blur' }
          }
      }
    },
    methods: {
        submitForm( formName ) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              alert('submit!');
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        addRow( $event ) {
          
          this.qForm.items.push({status: '', description:'', price:'', keywords:'', tags:'', country:''});//          
          let newIndex = this.qForm.items.length-1;
          
          let col = $event.target.value;
          if(this.qForm.flags[newIndex]==undefined) this.qForm.flags[newIndex] = {};
          this.qForm.flags[newIndex][col] = true;//
          this.timeStammp = +new Date();
          $event.target.value = '';
        },
        removeRow( index ) {
          this.qForm.items.splice(index,1);
          this.qForm.flags.splice(index,1);
          this.timeStammp = +new Date();
        },
        addCol(rowIndex, $event) {
          let col = $event.target.value;
          this.qForm.flags[rowIndex][col] = true;
          this.timeStammp = +new Date();
          $event.target.value = '';
        },
        removeCol(rowIndex, col){
          delete this.qForm.flags[rowIndex][col];
          delete this.qForm.flags[rowIndex][col];

          this.qForm.items[rowIndex][col] = '';
          this.qForm.flags.forEach( (row, index) => {
            if(Object.keys(row).length == 0) {
              this.qForm.items.splice(index, 1); this.qForm.flags.splice(index, 1);
            }
          });
          console.log( this.qForm.flags );
          this.timeStammp = +new Date();
        }
    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  .date-field {

  }
</style>
