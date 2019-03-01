import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

import { COURSES } from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';
import { HighlightedDirective } from './directives/highlighted.directive';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

    course = COURSES[1];

    courses = COURSES;

    startDate = new Date(2000, 0, 1);

    @ViewChild(CourseCardComponent)
    card: CourseCardComponent;

    @ViewChild('cardRef1', {read: ElementRef})
    card1: CourseCardComponent;

    @ViewChild('container')
    containerDiv: ElementRef;

    @ViewChildren(CourseCardComponent)
    cards: QueryList<CourseCardComponent>;

    // Directive Export
    @ViewChild(HighlightedDirective)
    highlighted: HighlightedDirective;

    @ViewChild(CourseCardComponent, {read: HighlightedDirective})
    highlighted2: HighlightedDirective;

    constructor() {
        console.log('containerDiv - constructor()', this.containerDiv);
    }

    ngAfterViewInit() {
        console.log('containerDiv - ngAfterViewInit()', this.containerDiv);

        console.log('cards', this.cards);

        this.cards.changes.subscribe(
            cards => console.log('cards changed', cards)
        );

        console.log('this.highlighted', this.highlighted);
        console.log('this.highlighted2', this.highlighted2);
    }

    onCourseSelected(course: Course) {
        console.log('App component - clicked', course);
        console.log('card', this.card);
        console.log('card1', this.card1);
        console.log('containerDiv', this.containerDiv);
    }

    onCoursesEdited() {
        this.courses.push(
            {
                id: 1,
                description: "Angular Core Deep Dive",
                iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
                longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
                category: 'INTERMEDIATE',
                lessonsCount: 10
            },
        );
    }

    onToggle(isHighlighted: boolean) {
        console.log('isHighlighted', isHighlighted);
    }

}
