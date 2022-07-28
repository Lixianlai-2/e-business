<template>
  <div class="type-nav">
    <!-- <h1>{{ categoryList }}</h1> -->
    <div class="container">
      <div @mouseleave="navUnHover" @mouseenter="enterShow">
        <h2 class="all">全部商品分类</h2>
        <transition name="sort">
          <div class="sort" v-show="show">
            <div class="all-sort-list2" @click="routerChange">
              <!-- 三级联动 -->
              <div
                class="item"
                v-for="(c1, index) in categoryList"
                :key="c1.categoryId"
                @mouseenter="navHover(index)"
                :class="{ cur: currentIndex == index }"
              >
                <h3>
                  <a
                    :data-categoryName="c1.categoryName"
                    :data-categoryId1="c1.categoryId"
                    >{{ c1.categoryName }}</a
                  >
                </h3>
                <!-- 二级与三级分类 -->
                <div
                  class="item-list clearfix"
                  :style="{ display: currentIndex == index ? 'block' : 'none' }"
                >
                  <div
                    class="subitem"
                    v-for="(c2, index) in c1.categoryChild"
                    :key="c2.categoryId"
                  >
                    <dl class="fore">
                      <dt>
                        <a
                          :data-categoryName="c2.categoryName"
                          :data-categoryId2="c2.categoryId"
                          >{{ c2.categoryName }}</a
                        >
                      </dt>
                      <dd>
                        <em
                          v-for="(c3, index) in c2.categoryChild"
                          :key="c3.categoryId"
                        >
                          <a
                            :data-categoryName="c3.categoryName"
                            :data-categoryId3="c3.categoryId"
                            >{{ c3.categoryName }}</a
                          >
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import throttle from "lodash/throttle";

export default {
  name: "TypeNav",
  mounted() {
    // 页面是home时，展示三级联动
    if (this.$route.path !== "/home") {
      this.show = false;
    }
  },
  computed: {
    ...mapState("home", ["categoryList"]),
  },
  methods: {
    enterShow() {
      // 当时search模块时，鼠标移上三级联动部分，让内容显示
      if (this.$route.path !== "/home") {
        this.show = true;
      }
      // 也可以用下面这种麻烦些的方式
      // if (this.$route.path.indexOf("/search") !== -1) {
      //   this.show = true;
      // }
      // alert("进入了三级联动分类");
    },
    navUnHover() {
      this.currentIndex = -1;
      // 当页面是search时，鼠标离开时，让三级联动部分消失
      if (this.$route.path !== "/home") {
        this.show = false;
      }
    },
    navHover: throttle(function (index) {
      this.currentIndex = index;
    }, 50),

    routerChange(event) {
      console.log("works");
      let { categoryname, categoryid1, categoryid2, categoryid3 } =
        event.target.dataset;

      if (categoryname) {
        // 整理路由跳转的参数
        let location = { name: "search" };
        let query = { categoryName: categoryname };

        if (categoryid1) {
          query.categoryId1 = categoryid1;
        } else if (categoryid2) {
          query.categoryId2 = categoryid2;
        } else if (categoryid3) {
          query.categoryId3 = categoryid3;
        }

        // 继续整理参数
        location.query = query;

        if (this.$route.params) {
          location.params = this.$route.params;
        }
        // 路由跳转
        this.$router.push(location);
      }
    },
  },
  data() {
    return {
      currentIndex: -1,
      show: true,
    };
  },
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      a:hover {
        color: rgba(255, 0, 0, 0.582);
        cursor: pointer;
      }

      .all-sort-list2 {
        .cur {
          background: skyblue;
        }
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          // &:hover {
          //   .item-list {
          //     display: block;
          //   }
          // }
        }
      }
    }
    // 过度动画的开始
    .sort-enter {
      height: 0px;
    }
    // 过度动画的结束
    .sort-enter-to {
      height: 461px;
    }
    // 定义动画时间跟速率
    .sort-enter-active {
      transition: all 0.1s linear;
    }
  }
}
</style>
