<template>
    <section>
        <hr>
        <h2>Typical form</h2>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="Event name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="activity area">
                <el-select v-model="form.region" placeholder="Please select the active region">
                    <el-option label="Area 1" value="shanghai"></el-option>
                    <el-option label="Area 2" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="Event time">
                <el-col :span="11">
                    <el-date-picker type="date" placeholder="Select date" v-model="form.date1" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                    <el-time-picker type="fixed-time" placeholder="selected time" v-model="form.date2" style="width: 100%;"></el-time-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="Instant Shipping">
                <el-switch v-model="form.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="activity nature">
                <el-checkbox-group v-model="form.type">
                    <el-checkbox label="Food/Restaurant Online Activities" name="type"></el-checkbox>
                    <el-checkbox label="Ground push activity" name="type"></el-checkbox>
                    <el-checkbox label="Offline theme activity" name="type"></el-checkbox>
                    <el-checkbox label="Simple brand exposure" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="Special resource">
                <el-radio-group v-model="form.resource">
                    <el-radio label="Online Brand Sponsor"></el-radio>
                    <el-radio label="Offline venue is free"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="Activity Form">
                <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">Create now</el-button>
                <el-button>Cancel</el-button>
            </el-form-item>
        </el-form>
        <hr>
        <h2>Inline form</h2>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="Approvers">
                <el-input v-model="formInline.user" placeholder="Approvers"></el-input>
            </el-form-item>
            <el-form-item label="activity area">
                <el-select v-model="formInline.region" placeholder="active region">
                    <el-option label="Area 1" value="shanghai"></el-option>
                    <el-option label="Area 2" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">Query</el-button>
            </el-form-item>
        </el-form>
        <hr>
        <h2>Alignment</h2>
        <el-radio-group v-model="labelPosition" size="small">
            <el-radio-button label="left">align left</el-radio-button>
            <el-radio-button label="right">align right</el-radio-button>
            <el-radio-button label="top">Align top</el-radio-button>
        </el-radio-group>
        <div style="margin: 20px;"></div>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="name">
                <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="activity area">
                <el-input v-model="formLabelAlign.region"></el-input>
            </el-form-item>
            <el-form-item label="Activity Form">
                <el-input v-model="formLabelAlign.type"></el-input>
            </el-form-item>
        </el-form>
        <hr>
        <h2>Form validation</h2>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="activity name" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="active region" prop="region">
                <el-select v-model="ruleForm.region" placeholder="Please select the active region">
                    <el-option label="Area 1" value="shanghai"></el-option>
                    <el-option label="Area 2" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="Event time" required>
                <el-col :span="11">
                    <el-form-item prop="date1">
                        <el-date-picker type="date" placeholder="select date" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                    <el-form-item prop="date2">
                        <el-time-picker type="fixed-time" placeholder="selected time" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
                    </el-form-item>
                </el-col>
            </el-form-item>
            <el-form-item label="Instant Shipping" prop="delivery">
                <el-switch v-model="ruleForm.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="activity nature" prop="type">
                <el-checkbox-group v-model="ruleForm.type">
                    <el-checkbox label="Food/Restaurant Online Activities" name="type"></el-checkbox>
                    <el-checkbox label="Ground push activity" name="type"></el-checkbox>
                    <el-checkbox label="Offline theme activity" name="type"></el-checkbox>
                    <el-checkbox label="Simple brand exposure" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="special resource" prop="resource">
                <el-radio-group v-model="ruleForm.resource">
                    <el-radio label="Online Brand Sponsor"></el-radio>
                    <el-radio label="Offline venue is free"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="active form" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">Create now</el-button>
                <el-button @click="resetForm('ruleForm')">Reset</el-button>
            </el-form-item>
        </el-form>
        <hr>
        <h2>Custom validation rules</h2>
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-form-item label="password" prop="pass">
                <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="Confirm Password" prop="checkPass">
                <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="age" prop="age">
                <el-input v-model.number="ruleForm2.age"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">Submit</el-button>
                <el-button @click="resetForm('ruleForm2')">Reset</el-button>
            </el-form-item>
        </el-form>

        <hr>
        <h2>Dynamic increase or decrease of form items</h2>
        <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
            <el-form-item
                    prop="email"
                    label="mailbox"
                    :rules="[
                      { required: true, message: 'Please enter your email address', trigger: 'blur' },
                      { type: 'email', message: 'Please enter the correct email address', trigger: 'blur,change' }
                    ]"
            >
                <el-input v-model="dynamicValidateForm.email"></el-input>
            </el-form-item>
            <el-form-item
                    v-for="(domain, index) in dynamicValidateForm.domains"
                    :label="'Domain' + index"
                    :key="domain.key"
                    :prop="'domains.' + index + '.value'"
                    :rules="{
                      required: true, message: 'The domain name cannot be empty', trigger: 'blur'
                    }"
            >
                <el-input v-model="domain.value"></el-input><el-button @click.prevent="removeDomain(domain)">remove</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('dynamicValidateForm')">Submit</el-button>
                <el-button @click="addDomain">Add Domain</el-button>
                <el-button @click="resetForm('dynamicValidateForm')">Reset</el-button>
            </el-form-item>
        </el-form>

        <hr>
        <h2>Number type validation</h2>
        <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
            <el-form-item
                    label="age"
                    prop="age"
                    :rules="[
                      { required: true, message: 'Age cannot be empty'},
                      { type: 'number', message: 'Age must be a number'}
                    ]"
            >
                <el-input type="age" v-model.number="numberValidateForm.age" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('numberValidateForm')">Submit</el-button>
                <el-button @click="resetForm('numberValidateForm')">Reset</el-button>
            </el-form-item>
        </el-form>

        <hr>
        <h2>Component size control in the form</h2>
        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
            <el-form-item label="Event name">
                <el-input v-model="sizeForm.name"></el-input>
            </el-form-item>
            <el-form-item label="activity area">
                <el-select v-model="sizeForm.region" placeholder="Please select the active region">
                    <el-option label="Area 1" value="shanghai"></el-option>
                    <el-option label="Area 2" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="Event time">
                <el-col :span="11">
                    <el-date-picker type="date" placeholder="Select date" v-model="sizeForm.date1" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                    <el-time-picker type="fixed-time" placeholder="selected time" v-model="sizeForm.date2" style="width: 100%;"></el-time-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="activity nature">
                <el-checkbox-group v-model="sizeForm.type">
                    <el-checkbox-button label="Food/Restaurant Online Activities" name="type"></el-checkbox-button>
                    <el-checkbox-button label="Push activity" name="type"></el-checkbox-button>
                    <el-checkbox-button label="Offline theme activity" name="type"></el-checkbox-button>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="Special resource">
                <el-radio-group v-model="sizeForm.resource" size="medium">
                    <el-radio border label="Online brand sponsorship"></el-radio>
                    <el-radio border label="Free for offline venues"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item size="large">
                <el-button type="primary" @click="onSubmit">Create now</el-button>
                <el-button>Cancel</el-button>
            </el-form-item>
        </el-form>

    </section>
</template>

<script>
    const checkAge = (rule, value, callback) => {
        if (!value) {
            return callback(new Error('Age cannot be empty'));
        }
        setTimeout(() => {
            if (!Number.isInteger(value)) {
                callback(new Error('Please enter a numeric value'));
            } else {
                if (value < 18) {
                    callback(new Error('must be over 18'));
                } else {
                    callback();
                }
            }
        }, 1000);
    };
    const validatePass = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('Please enter your password'));
        } else {
            if (this.ruleForm2.checkPass !== '') {
                this.$refs.ruleForm2.validateField('checkPass');
            }
            callback();
        }
    };
    const validatePass2 = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('Please enter the password again'));
        } else if (value !== this.ruleForm2.pass) {
            callback(new Error('The two input passwords are inconsistent!'));
        } else {
            callback();
        }
    };
    export default {
        name: "eform",
        data: () => ({
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            formInline: {
                user: '',
                region: ''
            },
            labelPosition: 'right',
            formLabelAlign: {
                name: '',
                region: '',
                type: ''
            },
            ruleForm: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            rules: {
                name: [
                    { required: true, message: 'Please enter event name', trigger: 'blur' },
                    { min: 3, max: 5, message: 'Length between 3 and 5 characters', trigger: 'blur' }
                ],
                region: [
                    { required: true, message: 'Please select an active area', trigger: 'change' }
                ],
                date1: [
                    { type: 'date', required: true, message: 'Please select a date', trigger: 'change' }
                ],
                date2: [
                    { type: 'date', required: true, message: 'Please select a time', trigger: 'change' }
                ],
                type: [
                    { type: 'array', required: true, message: 'Please select at least one activity type', trigger: 'change' }
                ],
                resource: [
                    { required: true, message: 'Please select an active resource', trigger: 'change' }
                ],
                desc: [
                    { required: true, message: 'Please fill in the activity form', trigger: 'blur' }
                ]
            },
            ruleForm2: {
                pass: '',
                checkPass: '',
                age: ''
            },
            rules2: {
                pass: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                checkPass: [
                    { validator: validatePass2, trigger: 'blur' }
                ],
                age: [
                    { validator: checkAge, trigger: 'blur' }
                ]
            },
            dynamicValidateForm: {
                domains: [{
                    value: ''
                }],
                email: ''
            },
            numberValidateForm: {
                age: ''
            },
            sizeForm: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            }

        }),
        methods: {
            onSubmit() {
                console.log('submit!');
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            removeDomain(item) {
                const index = this.dynamicValidateForm.domains.indexOf(item);
                if (index !== -1) {
                    this.dynamicValidateForm.domains.splice(index, 1)
                }
            },
            addDomain() {
                this.dynamicValidateForm.domains.push({
                    value: '',
                    key: Date.now()
                });
            }
        }
    }
</script>

<style scoped lang='scss'>

</style>