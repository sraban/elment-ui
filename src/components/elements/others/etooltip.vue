<template>
    <section>
        <hr>
        <h2>Basic usage</h2>
        <div class="box">
            <div class="top">
                <el-tooltip class="item" effect="dark" content="Top Left tip text" placement="top-start">
                    <el-button>Up Left</el-button>
                </el-tooltip>
                <el-tooltip class="item" effect="dark" content="Top Center Tip Text" placement="top">
                    <el-button>Top</el-button>
                </el-tooltip>
                <el-tooltip class="item" effect="dark" content="Top Right Tip Text" placement="top-end">
                    <el-button>Up Right</el-button>
                </el-tooltip>
            </div>
            <div class="left">
                <el-tooltip class="item" effect="dark" content="Left Top Tip Text" placement="left-start">
                    <el-button>Top left</el-button>
                </el-tooltip>
                <el-tooltip class="item" effect="dark" content="Left Center Tip Text" placement="left">
                    <el-button>Left</el-button>
                </el-tooltip>
                <el-tooltip class="item" effect="dark" content="Left Bottom tip text" placement="left-end">
                    <el-button>Bottom Left</el-button>
                </el-tooltip>
            </div>

            <div class="right">
                <el-tooltip class="item" effect="dark" content="Right Top Tip Text" placement="right-start">
                    <el-button>Top right</el-button>
                </el-tooltip>
                <el-tooltip class="item" effect="dark" content="Right Center Tip Text" placement="right">
                    <el-button>Right</el-button>
                </el-tooltip>
                <el-tooltip class="item" effect="dark" content="Right Bottom tip text" placement="right-end">
                    <el-button>bottom right</el-button>
                </el-tooltip>
            </div>
            <div class="bottom">
                <el-tooltip class="item" effect="dark" content="Bottom Left tip text" placement="bottom-start">
                    <el-button>down left</el-button>
                </el-tooltip>
                <el-tooltip class="item" effect="dark" content="Bottom Center Tip Text" placement="bottom">
                    <el-button>below</el-button>
                </el-tooltip>
                <el-tooltip class="item" effect="dark" content="Bottom Right tip text" placement="bottom-end">
                    <el-button>down right</el-button>
                </el-tooltip>
            </div>
        </div>

        <hr>
        <h2>Theme</h2>
        <el-tooltip content="Top center" placement="top">
            <el-button>Dark</el-button>
        </el-tooltip>
        <el-tooltip content="Bottom center" placement="bottom" effect="light">
            <el-button>Light</el-button>
        </el-tooltip>

        <hr>
        <h2>More Content</h2>
        <el-tooltip placement="top">
            <div slot="content">Multi-line information<br/>Second line information</div>
            <el-button>Top center</el-button>
        </el-tooltip>

        <hr>
        <h2>Advanced Extensions</h2>
        <template>
            <el-tooltip :disabled="disabled" content="Click to close the tooltip function" placement="bottom" effect="light">
                <el-button @click="disabled = !disabled">Click {{disabled ? 'on' : 'off'}} tooltip function</el-button>
            </el-tooltip>
        </template>

    </section>
</template>

<script>
    export default {
        name: "etooltip",
        data: () => ({}),
    }
</script>

<style scoped lang='scss'>
    .box {
        width: 400px;

        .top {
            text-align: center;
        }

        .left {
            float: left;
            width: 60px;
        }

        .right {
            float: right;
            width: 60px;
        }

        .bottom {
            clear: both;
            text-align: center;
        }

        .item {
            margin: 4px;
        }

        .left .el-tooltip__popper,
        .right .el-tooltip__popper {
            padding: 8px 10px;
        }
    }
</style>