<template>
    <section>
        <hr>
        <h2>Basic usage</h2>
        <el-dropdown>
            <span class="el-dropdown-link">
              Dropdown menu <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>Golden Cake</el-dropdown-item>
                <el-dropdown-item>Lion Head</el-dropdown-item>
                <el-dropdown-item>Snail powder</el-dropdown-item>
                <el-dropdown-item disabled>Double skin milk</el-dropdown-item>
                <el-dropdown-item divided>Oyster Oyster</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>

        <hr>
        <h2>Trigger object</h2>
        <el-dropdown>
            <el-button type="primary">
                More menu <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>Golden Cake</el-dropdown-item>
                <el-dropdown-item>Lion Head</el-dropdown-item>
                <el-dropdown-item>Snail powder</el-dropdown-item>
                <el-dropdown-item>Double Skin Milk</el-dropdown-item>
                <el-dropdown-item>Oyster Oyster</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown split-button type="primary" @click="handleClick">
            more menu
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>Golden Cake</el-dropdown-item>
                <el-dropdown-item>Lion Head</el-dropdown-item>
                <el-dropdown-item>Snail powder</el-dropdown-item>
                <el-dropdown-item>Double Skin Milk</el-dropdown-item>
                <el-dropdown-item>Oyster Oyster</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>

        <hr>
        <h2>Trigger method</h2>
        <el-row class="block-col-2">
            <el-col :span="12">
                <span class="demonstration">hover activation</span>
                <el-dropdown>
                    <span class="el-dropdown-link">
                      Dropdown menu <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>Golden Cake</el-dropdown-item>
                        <el-dropdown-item>Lion Head</el-dropdown-item>
                        <el-dropdown-item>Snail powder</el-dropdown-item>
                        <el-dropdown-item>Double Skin Milk</el-dropdown-item>
                        <el-dropdown-item>Oyster Oyster</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>
            <el-col :span="12">
                <span class="demonstration">click to activate</span>
                <el-dropdown trigger="click">
                    <span class="el-dropdown-link">
                      Dropdown menu <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>Golden Cake</el-dropdown-item>
                        <el-dropdown-item>Lion Head</el-dropdown-item>
                        <el-dropdown-item>Snail powder</el-dropdown-item>
                        <el-dropdown-item>Double Skin Milk</el-dropdown-item>
                        <el-dropdown-item>Oyster Oyster</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>
        </el-row>

        <hr>
        <h2>Menu hide method</h2>
        <el-dropdown :hide-on-click="false">
            <span class="el-dropdown-link">
              Dropdown menu <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>Golden Cake</el-dropdown-item>
                <el-dropdown-item>Lion Head</el-dropdown-item>
                <el-dropdown-item>Snail powder</el-dropdown-item>
                <el-dropdown-item disabled>Double skin milk</el-dropdown-item>
                <el-dropdown-item divided>Oyster Oyster</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <hr>
        <h2>Command events</h2>
        <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              Dropdown menu <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a">Golden Cake</el-dropdown-item>
                <el-dropdown-item command="b">Lion head</el-dropdown-item>
                <el-dropdown-item command="c">Snail powder</el-dropdown-item>
                <el-dropdown-item command="d" disabled>Double skin milk</el-dropdown-item>
                <el-dropdown-item command="e" divided>Oyster Oyster</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <hr>
        <h2>Various sizes</h2>
        <el-dropdown split-button type="primary">
            default size
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>Golden Cake</el-dropdown-item>
                <el-dropdown-item>Lion Head</el-dropdown-item>
                <el-dropdown-item>Snail powder</el-dropdown-item>
                <el-dropdown-item>Double Skin Milk</el-dropdown-item>
                <el-dropdown-item>Oyster Oyster</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>

        <el-dropdown size="medium" split-button type="primary">
            medium size
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>Golden Cake</el-dropdown-item>
                <el-dropdown-item>Lion Head</el-dropdown-item>
                <el-dropdown-item>Snail powder</el-dropdown-item>
                <el-dropdown-item>Double Skin Milk</el-dropdown-item>
                <el-dropdown-item>Oyster Oyster</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>

        <el-dropdown size="small" split-button type="primary">
            Small size
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>Golden Cake</el-dropdown-item>
                <el-dropdown-item>Lion Head</el-dropdown-item>
                <el-dropdown-item>Snail powder</el-dropdown-item>
                <el-dropdown-item>Double Skin Milk</el-dropdown-item>
                <el-dropdown-item>Oyster Oyster</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>

        <el-dropdown size="mini" split-button type="primary">
            Ultra small size
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>Golden Cake</el-dropdown-item>
                <el-dropdown-item>Lion Head</el-dropdown-item>
                <el-dropdown-item>Snail powder</el-dropdown-item>
                <el-dropdown-item>Double Skin Milk</el-dropdown-item>
                <el-dropdown-item>Oyster Oyster</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </section>
</template>

<script>
    export default {
        name: "edropdown",
        data: () => ({}),
        methods: {
            handleClick() {
                alert('button click');
            },
            handleCommand(command) {
                this.$message('click on item ' + command);
            }
        }
    }
</script>

<style scoped lang='scss'>
    .el-dropdown {
        vertical-align: top;
    }
    .el-dropdown + .el-dropdown {
        margin-left: 15px;
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
    .el-dropdown-link {
        cursor: pointer;
        color: #409EFF;
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
</style>