import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'main',
    templateUrl: './Main.html',
    styleUrls: ['./Main.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Main
{

    constructor()
    {
        debugger;
    }

}
