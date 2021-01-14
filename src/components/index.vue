<!--  -->
<template>
    <div>
        <el-container class="page">
            <el-header>Header</el-header>
            <el-container>
                <el-aside>
                    <el-menu
                        default-active="/student"
                        class="el-menu-vertical-demo"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b"
                        router
                    >
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-s-promotion"></i>
                                <span>系统设置</span>
                            </template>
                            <el-menu-item index="/student">学生管理</el-menu-item>
                            <el-menu-item index="/course">课程管理</el-menu-item>
                        </el-submenu>
                    </el-menu>
                </el-aside>
                <el-main>
                  <router-view></router-view>
                </el-main>
            </el-container>
            <el-footer>footer</el-footer>
        </el-container>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },

    components: {},

    computed: {},

    mounted() {},

    methods: {}
};
</script>
<style scoped>
.page {
    width: 100vw;
    height: 100vh;
}
.el-header {
    background-color: teal;
}
.el-aside {
    background-color: darkslategrey;
    color: #ffffff;
    width: 150px !important;
}
/* .el-main{
  background-color: blanchedalmond;
} */
.el-footer {
    background-color: teal;
}
.el-submenu .el-menu-item {
  min-width: 150px;
}
</style>