import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

async function Start(event: any)
{
    //For some reason, I must set this timeout in order to add the events at all.
    //Uncomment, and you will see no events will be hit, even if Office.onReady was resolved.
    setTimeout(() =>
    {
        Addin.LoadEvent.emit(event);

    }, 1000);

}

const _glob = (window /* browser */) as any;
_glob.Start = Start;
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'addin',
    templateUrl: './Addin.html',
    styleUrls: ['./Addin.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Addin implements OnInit
{

    static LoadEvent: EventEmitter<any> = new EventEmitter<any>();

    constructor()
    {
        let sub: Subscription;
        sub = Addin.LoadEvent.subscribe(async (event) =>
        {
            debugger;
            event.completed();


            await this.AddWorksheetEvents();
            sub.unsubscribe();
            debugger;
        });
    }

    async ngOnInit()
    {

    }

    async AddWorksheetEvents()
    {
        debugger;
        await Excel.run(async context =>
        {
            try
            {
                debugger;
                context.runtime.load('enableEvents');
                context.runtime.enableEvents = true;
                await context.sync();
                context.workbook.worksheets.onActivated.add(async (event: Excel.WorksheetActivatedEventArgs) =>
                {
                    debugger;
                    console.log('Hit onActivated event');
                    console.log(event);
                });

                context.workbook.worksheets.onDeleted.add(async (event: Excel.WorksheetDeletedEventArgs) =>
                {
                    debugger;
                    console.log('Hit deleted event');
                    console.log(event);
                });
                context.workbook.worksheets.onAdded.add(async (event: Excel.WorksheetAddedEventArgs) =>
                {
                    debugger;
                    console.log('Hit onAdded event');

                    console.log(event);
                });
                debugger;

                return context;
            }
            catch (e)
            {
                debugger;
            }
        });
    }
}
