import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    
    console.log(context.bindings)
    const loadedProduct = context.bindings.inputRecipe;
    
    context.res = {
        //status: 200, /* Defaults to 200 */
        headers:{"Content-Type": "application/json"},
        body: {
            product: loadedProduct 
        }
    };

};

export default httpTrigger;