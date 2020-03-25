import { Component, OnInit } from '@angular/core';
import { ExamService } from './exam.service';

@Component({
    'selector': 'app-exam',
    'templateUrl': './exam.component.html',
    'styleUrls': ['exam.component.css']
})

export class ExamComponent implements OnInit {
    userList;
    postList;
    articleList;
    selectedArtType;
    constructor(private examService: ExamService) {

    }

    ngOnInit() {
        this.selectedArtType = 1;
        this.getUsers();

    }

    getUsers() {
        this.examService.getUsers().subscribe(
            (data: any[]) => {
                this.userList = data;
                this.getPosts();
            }
        )
    }

    getPosts() {
        var that = this;
        this.examService.getPosts().subscribe(
            (data: any[]) => {
                this.postList = data;
                data.forEach(function(d){
                    var author = that.userList.filter(function(e){
                        return e.id == d.userId
                    })[0].name;
                    d['author'] = author;
                });
                this.articleList = data;
            }
        )
    }

}