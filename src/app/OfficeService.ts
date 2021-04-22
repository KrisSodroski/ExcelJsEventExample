import { EventEmitter, Injectable } from '@angular/core';


export class OfficeHelper
{
    static LoadOffice(
        OfficeService: OfficeService
    ): Function
    {

        const result = () => OfficeService.init();
        return result;
    }

}



export class OfficeOptions
{
    InOfficeMode: boolean = false;
    OfficeJsLocation = 'https://appsforoffice.microsoft.com/lib/1.1/hosted/office.js';
    AddinIdentification: () => Promise<boolean> = async () =>
    {
        return true;
    }
}

@Injectable({ providedIn: "root" })
export class OfficeService
{

    OfficeLoaded: EventEmitter<void> = new EventEmitter<void>();
    InOfficeMode: boolean = false;

    constructor()
    {

    }

    init(): Promise<boolean>
    {

        const options = new OfficeOptions();
        const promise: Promise<boolean> = new Promise(async (resolve, reject) =>
        {
            this.InOfficeMode = await options.AddinIdentification();

            if (!this.InOfficeMode)
            {
                resolve(true);
            }
            else
            {

                const script = options.OfficeJsLocation;
                const element: HTMLScriptElement = document.createElement('script');
                element.src = script;

                element.onload = async () =>
                {
                    await Office.onReady(async function (info)
                    {
                        console.log(`Office.js is now ready in ${ info.host } on ${ info.platform }`);
                        const body = document.body;
                        body.classList.add('OfficeMode');
                        debugger;

                        resolve(true);

                    });
                };
                document.head.appendChild(element);
            }
        });

        return promise;
    }
}
