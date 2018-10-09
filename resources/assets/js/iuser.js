Vue.component('company-list-item', {
    props: ['title'],
    template: '<div class="card">' +
        '<div class="p-2 s-bg p-color">' +
        '<div class="card-header">{{ title }}</div>' +
        '<div class="card-body">Short Info<button class="btn float-right btn-default">More</button>' +
        '</div></div></div>'
})

const user = new Vue({
    el: '#userHome',
    data: {
        uid: ""
    }
});
