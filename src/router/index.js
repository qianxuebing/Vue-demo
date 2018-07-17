import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../Pages/IndexPage'
import Detail from '../Pages/Detail'
import DetailAnalysis from '../Pages/detail/Analysis'
import DetailCount from '../Pages/detail/Count'
import DetailForecast from '../Pages/detail/Forecast'
import DetailPublish from '../Pages/detail/Publish'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'IndexPage',
        component: IndexPage
    }, {
        path: '/Detail',
        name: 'Detail',
        component: Detail,
        redirect: '/detail/Analysis',
        children: [{
            path: 'Analysis',
            name: 'DetailAnalysis',
            component: DetailAnalysis
        }, {
            path: 'Count',
            name: 'DetailCount',
            component: DetailCount
        }, {
            path: 'Forecast',
            name: 'DetailForecast',
            component: DetailForecast
        }, {
            path: 'Publish',
            name: 'DetailPublish',
            component: DetailPublish
        }]
    }]
})