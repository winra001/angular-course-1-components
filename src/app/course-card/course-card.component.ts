import { AfterViewInit, Component, ContentChild, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Course } from '../model/course';

@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit, AfterViewInit {

    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    @Output()
    courseSelected = new EventEmitter<Course>();

    @ContentChild('courseImage1')
    image;

    constructor() {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        console.log('image -@ContentChild', this.image);
    }

    onCourseViewed() {
        console.log('View Course button clicked');
        this.courseSelected.emit(this.course);
    }

    isImageVisible() {
        return this.course && this.course.iconUrl;
    }

    cardClasses() {
        if (this.course.category === 'BEGINNER') {
            return ['beginner'];
        }
        return {
            'beginner': this.course.category === 'BEGINNER',
            'course-card': true
        };
    }

    cardStyles() {
        return {
            'text-decoration': 'underline'
            // 'background-image': 'url(' + this.course.iconUrl + ')'
        };
    }

}
