import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest, inputRecipe): Promise<void> {
    
    console.log(inputRecipe)
    const loadedProduct = inputRecipe;
    
    context.res = {
        //status: 200, /* Defaults to 200 */
        headers:{"Content-Type": "application/json"},
        body: {
            product: loadedProduct 
        }
    };

};

export default httpTrigger;