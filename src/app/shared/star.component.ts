import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: '/star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent {
    @Input() rating: number = 0;
    cropWidth: number = 75;

    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.cropWidth = this.rating;
    }

    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}