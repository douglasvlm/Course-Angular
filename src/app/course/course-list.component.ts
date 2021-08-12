import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit{

    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular Forms',
                imageUrl: '/assets/images/forms.png',
                price: 99.99,
                code: 'XPS-8796',
                duration: 120,
                rating: 2.5,
                releaseDate: 'December, 2, 2021'
            },
            {
                id: 1,
                name: 'Angular HTTP',
                imageUrl: '/assets/images/http.png',
                price: 49.99,
                code: 'BBB-1234',
                duration: 80,
                rating: 3.5,
                releaseDate: 'December, 4, 2021'
            }
        ]
    }

}