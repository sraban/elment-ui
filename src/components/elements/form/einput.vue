<template>
    <section>
        <hr>
        <h2>Basic usage</h2>
        <el-input v-model="input" placeholder="Please enter the content"></el-input>
        <hr>
        <h2>Disabled state</h2>
        <el-input placeholder="Please enter the content" v-model="input1" :disabled="true"></el-input>
        <hr>
        <h2>Clearable</h2>
        <el-input placeholder="Please enter the content" v-model="input10" clearable></el-input>
        <hr>
        <h2>Input box with icon</h2>
        <div class="demo-input-suffix">
            Attribute method:
            <el-input
                    placeholder="Please select a date"
                    suffix-icon="el-icon-date"
                    v-model="input2">
            </el-input>
            <el-input
                    placeholder="Please enter content"
                    prefix-icon="el-icon-search"
                    v-model="input21">
            </el-input>
        </div>
        <div class="demo-input-suffix">
            slot method:
            <el-input
                    placeholder="Please select a date"
                    v-model="input22">
                <i slot="suffix" class="el-input__icon el-icon-date"></i>
            </el-input>
            <el-input
                    placeholder="Please enter content"
                    v-model="input23">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
        </div>
        <hr>
        <h2>Text Field</h2>
        <el-input
                type="textarea"
                :rows="2"
                placeholder="Please enter content"
                v-model="textarea">
        </el-input>
        <hr>
        <h2>Text field with adaptive text height</h2>
        <el-input
                type="textarea"
                autosize
                placeholder="Please enter content"
                v-model="textarea2">
        </el-input>
        <div style="margin: 20px 0;"></div>
        <el-input
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 4}"
                placeholder="Please enter content"
                v-model="textarea3">
        </el-input>
        <hr>
        <h2>Composite input box</h2>
        The content can be prepended or appended to the input through slot.

        <div>
            <el-input placeholder="Please enter the content" v-model="input3">
                <template slot="prepend">Http://</template>
            </el-input>
        </div>
        <div style="margin-top: 15px;">
            <el-input placeholder="Please enter the content" v-model="input4">
                <template slot="append">.com</template>
            </el-input>
        </div>
        <div style="margin-top: 15px;">
            <el-input placeholder="Please input content" v-model="input5" class="input-with-select">
                <el-select v-model="select" slot="prepend" placeholder="Please select">
                    <el-option label="restaurant name" value="1"></el-option>
                    <el-option label="Order number" value="2"></el-option>
                    <el-option label="User phone" value="3"></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>
        <hr>
        <h2>Size</h2>
        <div class="demo-input-size">
            <el-input
                    placeholder="Please enter content"
                    suffix-icon="el-icon-date"
                    v-model="input6">
            </el-input>
            <el-input
                    size="medium"
                    placeholder="Please enter content"
                    suffix-icon="el-icon-date"
                    v-model="input7">
            </el-input>
            <el-input
                    size="small"
                    placeholder="Please enter content"
                    suffix-icon="el-icon-date"
                    v-model="input8">
            </el-input>
            <el-input
                    size="mini"
                    placeholder="Please enter content"
                    suffix-icon="el-icon-date"
                    v-model="input9">
            </el-input>
        </div>
        <hr>
        <h2>With input suggestion</h2>
        <el-row class="demo-autocomplete">
            <el-col :span="12">
                <div class="sub-title">Activate to list input suggestions</div>
                <el-autocomplete
                        class="inline-input"
                        v-model="state1"
                        :fetch-suggestions="querySearch"
                        placeholder="Please enter content"
                        @select="handleSelect"
                ></el-autocomplete>
            </el-col>
            <el-col :span="12">
                <div class="sub-title">Match input suggestion after typing</div>
                <el-autocomplete
                        class="inline-input"
                        v-model="state2"
                        :fetch-suggestions="querySearch"
                        placeholder="Please enter content"
                        :trigger-on-focus="false"
                        @select="handleSelect"
                ></el-autocomplete>
            </el-col>
        </el-row>
        <hr>
        <h2>Custom Template</h2>
        <el-autocomplete
                popper-class="my-autocomplete"
                v-model="state3"
                :fetch-suggestions="querySearch"
                placeholder="Please enterAllow"
                @select="handleSelect">
            <i
                    class="el-icon-edit el-input__icon"
                    slot="suffix"
                    @click="handleIconClick">
            </i>
            <template slot-scope="props">
                <div class="name">{{ props.item.value }}</div>
                <span class="addr">{{ props.item.address }}</span>
            </template>
        </el-autocomplete>
        <hr>
        <h2>Remote Search</h2>
        <el-autocomplete
                v-model="state4"
                :fetch-suggestions="querySearchAsync"
                placeholder="Please enter content"
                @select="handleSelect"
        ></el-autocomplete>
    </section>
</template>

<script>
    export default {
        name: "einput",
        data: () => ({
            input: '',
            input1: '',
            input10: '',
            input2: '',
            input21: '',
            input22: '',
            input23: '',
            textarea: '',
            textarea2: '',
            textarea3: '',
            input3: '',
            input4: '',
            input5: '',
            select: '',
            input6: '',
            input7: '',
            input8: '',
            input9: '',
            restaurants: [],
            state1: '',
            state2: '',
            state3: '',
            state4: '',
        }),
        methods: {
            createFilter(queryString) {
                return (restaurant) => {
                    return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                };
            },
            handleSelect(item) {
                console.log(item);
            },
            handleIconClick(ev) {
                console.log(ev);
            },
            querySearch(queryString, cb) {
                const restaurants = this.restaurants;
                const results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
                // call callback to return the data of the suggestion list
                cb(results);
            },
            querySearchAsync(queryString, cb) {
                const restaurants = this.restaurants;
                const results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    cb(results);
                }, 3000 * Math.random());
            },
            loadAll() {
                return [
                    {"value": "Sanquan Fresh Food (Beixinjing Store)", "address": "No. 144, Xinyu Road, Changning District"},
                    {"value": "Hot honey Seoul Fried Chicken (Xianxia Road)", "address": "No. 661 Songhong Road, Changning District, Shanghai"},
                    {"value": "New Mong Kok Tea Restaurant", "address": "113, Building 6, Chuangyi Jinsha Valley, No. 988 Zhenbei Road, Putuo District, Shanghai"},
                    {"value": "Taki Qianjia (Tianshan West Road Store)", "address": "No. 438 Tianshan West Road"},
                    {"value": "Fat Fairy Cupcakes (Shanghai Lingkong Store)", "address": "Shop 18-101, Floor 1, Building 1, Building 1, No. 968, Jinzhong Road, Changning District, Shanghai"},
                    {"value": "Tribute Tea", "address": "No. 633 Jinzhong Road, Changning District, Shanghai"},
                    {"value": "Hao Daxiang Chicken Chop Super Dad", "address": "No. 1685 Cao An Road, Cao An Road, Jiading District, Shanghai"},
                    {"value": "Tea Zhilan (milk tea, hand cake)", "address": "No. 1435 Tongpu Road, Putuo District, Shanghai"},
                    {"value": "Twelve Takicho", "address": "Building B-107, No. 81, Lane 1444, Beizhai Road, Shanghai"},
                    {"value": "Star Shift Espresso", "address": "No. 817 Xinyu Road, Jiading District, Shanghai"},
                    {"value": "Auntie Milk Tea/Haoda", "address": "No. 1611 Caoan Road, Jiading District"},
                    {"value": "Xinmaitian Four Seasons Dessert Fried Chicken", "address": "No. 55, Lane 2383, Cao'an Road, Jiading District"},
                    {"value": "Monica motorcycle-themed coffee shop", "address": "1F, No. 2409, Cao'an Road, Jiangqiao Town, Jiading District, 1F, No. 62, Lane 2383"},
                    {"value": "Floating Life Ruocha (Lingkong Soho Store)", "address": "B1, Building 9, No. 968, Jinzhong Road, Changning District, Shanghai"},
                    {"value": "NONO JUICE Fresh Juice", "address": "No. 119, Tianshan West Road, Changning District, Shanghai"},
                    {"value": "CoCo (Beixinjing)", "address": "Xianxia West Road, Changning District, Shanghai"},
                    {"value": "Happy Lemon (Shenzhou Wisdom Store)", "address": "Store R117, 1st Floor, No. 567, Tianshan West Road, Changning District, Shanghai"},
                    {"value": "Merci Paul cafe", "address": "819, Building 6, Lane 28, Danba Road, Guangfu West Road, Putuo District, Shanghai"},
                    {"value": "Musang King (Xijiao Bailian Store)", "address": "G05-F01-1-306, 1st Floor, No. 88 Xianxia West Road, Changning District, Shanghai"},
                    {"value": "Gun Club Mountain", "address": "Palm Road, Putuo District, Shanghai"},
                    {"value": "Indulgence", "address": "Yuanfeng Tianshan Garden (East Gate) No. 267 Shuangliu Road"},
                    {"value": "Qianji", "address": "Tianshan West Road, Changning District, Shanghai"},
                    {"value": "One Cup Plus", "address": "Tongxie Road, Changning District, Shanghai"},
                    {"value": "唦WADIKA", "address": "Unit 1-02A, Floor 01, Building 2 (Building B), No. 999, Jinzhong Road, Xinjing Town, Changning District, Shanghai"},
                    {"value": "Aisiqili (Bailian in the western suburbs)", "address": "Room 1305, No. 88, Xianxia West Road, Changning District"},
                    {"value": "Aixisili (Kintetsu Plaza)", "address": "N-B2-O2-C Shop N-B2-O2-C, Basement 2, North District, Kintetsu City Plaza, No. 818, Zhenbei Road, Putuo District, Shanghai"} ,
                    {"value": "Fresh Fruit Juice (Jinshajiang Road Hemeiguang Store)", "address": "B1-10-6, Jinsha Hemei Plaza, No. 2239, Jinshajiang Road, Putuo District"},
                    {"value": "Happy Liguo (Bingu Store)", "address": "No. 341, Tianshan Road, Weining Road, Changning District, Shanghai"},
                    {"value": "Super Chicken Truck (Fengzhuang Road)", "address": "No. 240, Fengzhuang Road, Jiading District, Shanghai"},
                    {"value": "Miao Life Orchard (Beixinjing Store)", "address": "No. 144, Xinyu Road, Changning District"},
                    {"value": "Xiang Yidu Mala Hot Pot", "address": "No. 148 Songhong Road, Changning District"},
                    {"value": "Fanzai Burger (Laozhen North Road)", "address": "No. 160, Laozhen North Road, Putuo District, Shanghai"},
                    {"value": "Hong Kong style shop", "address": "Room 15-105, 15th Floor, No. 968, Jinzhong Road, Changning District, Shanghai"},
                    {"value": "Shuxiangyuan Spicy Hot Pot (Jianhe Road)", "address": "Jianhe Road 443-1"},
                    {"value": "Beijing Dumpling Restaurant", "address": "No. 490-1, Tianshan West Road, Beixinjing Street, Changning District"},
                    {"value": "Room 9-83, Basement 9, Building 9, No. 968, Jinzhong Road, Changning District, Shanghai"},
                    {"value": "Joule·Sichuan-style fast food (Jinzhong Road)", "address": "A, B1, No. 633, Jinzhong Road, Shanghai"},
                    {"value": "Power Chicken Cart", "address": "101B, No. 3, Lane 299, West Xianxia Road, Changning District"},
                    {"value": "Liuyang Steamed Vegetables", "address": "No. 430 West Tianshan Road"},
                    {"value": "Sihai Youlong (Tianshan West Road Store)", "address": "Tianshan West Road, Changning District, Shanghai"},
                    {"value": "Sakura Canteen (Lingkong)", "address": "Room 15-105, 15th Floor, No. 968, Jinzhong Road, Changning District, Shanghai"},
                    {"value": "One centimeter Hakka traditionally prepared rice noodles (Tianshan store)", "address": "428 Tianshan West Road"},
                    {"value": "Furongxiang Roasted Meat (Pingxi Road)", "address": "No. 57-73, Lane 255, Fuquan Road, Xiehe Road, Changning District, Shanghai"},
                    {"value": "Shorthand Yellow Braised Chicken Rice", "address": "Stand 01, 1st Floor, No. 180, Jinzhong Road, Beixinjing Street, Changning District, Shanghai"},
                    {"value": "Red Pepper Mala Tang", "address": "No. 492, Tianshan West Road, Changning District, Shanghai"},
                    {"value": "(Xiaoyang Shengjian) Bailian Restaurant in Xijiao", "address": "2nd Floor, Bailian, No. 88 Xianxia West Road, Changning District"},
                    {"value": "Yangyang Mala Tang", "address": "No. 389 Tianshan West Road"},
                    {"value": "Nanquan Mama Lobster Rice Bowl", "address": "A13, Xinlehui Food Plaza, No. 1699 Jinshajiang Road, Putuo District"}
                ];
            }
        },
        mounted() {
            this.restaurants = this.loadAll();
        }
    }
</script>

<style scoped lang="scss">
    .el-select .el-input {
        width: 130px;
    }

    .input-with-select .el-input-group__prepend {
        background-color: #fff;
    }

    .my-autocomplete {
        li {
            line-height: normal;
            padding: 7px;

            .name {
                text-overflow: ellipsis;
                overflow: hidden;
            }
            .addr {
                font-size: 12px;
                color: #b4b4b4;
            }

            .highlighted .addr {
                color: #ddd;
            }
        }
    }
</style>