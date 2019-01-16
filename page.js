function Pagination(config) {
    this.init(config);
}

Pagination.config = {
    //当前页
    current: 1,
    //总记录数
    total: 1,
    //每页显示的数量
    pageSize: 10,
    //class类名
    className: "monster"
};
Pagination.foundation = {
    pagination: function (className) {
        return '<div class="'+className+'-page">';
    },
    container:function(className){
        return '<ul class="'+className+'-page-container">';
    },
    index:function(className){
        return '<li class="'+className+'-page-item '+className+'-page-button"><a href="javascript:void(0);" class="'+className+'page-link">首页</a></li>'
    },
    previous:function(className){
        return '<li class="'+className+'-page-item '+className+'-page-button '+className+'-page-previous"><a href="javascript:void(0);" class="'+className+'page-link">上一页</a></li>'
    },
    next:function(className){
        return '<li class="'+className+'-page-item '+className+'-page-button"><a href="javascript:void(0);" class="'+className+'page-link">下一页</a></li>'
    },
    end:function(className){
        return '<li class="'+className+'-page-item '+className+'-page-button"><a href="javascript:void(0);" class="'+className+'-page-link">尾页</a></li>';
    },
    item:function(number,className){
        return '<li class="'+className+'-page-item"><a href="javascript:void(0);" class="'+className+'-page-link">'+number+'</a></li>';
    },
    itemClass:function(className){
        return className+'-page-item';
    },
    currentClass:function(className){
        return className+'-pager-current-page';
    },
    pageSizeArr:[10,20,30,40]
};
Pagination.prototype = {
    construct: Pagination,
    init: function (config) {
        this.config = $.extend({}, Pagination.config, config);
        if(Pagination.foundation.pageSizeArr.indexOf(this.config.pageSize)===-1){
            this.config.pageSize=Pagination.foundation.pageSizeArr[0];
        }
        this.build();
    },
    build: function () {
        let page=$(Pagination.foundation.pagination(this.config.className)),
            container=$(Pagination.foundation.container(this.config.className)),
            index=$(Pagination.foundation.index(this.config.className)),
            previous=$(Pagination.foundation.previous(this.config.className))

    },
    pageNumber:function(){
        if(Number.parseInt(this.config.total)<1){
            throw new Error("total number error.....")
        }

    },
    current:function(){

    }
};
