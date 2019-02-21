import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Course } from '../model/course';

@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    @Output()
    courseSelected = new EventEmitter<Course>();

    constructor() {
    }

    ngOnInit() {
    }

    onCourseViewed() {
        console.log('View Course button clicked');
        this.courseSelected.emit(this.course);
    }
}