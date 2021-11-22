import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

    const recipeToCreate = req.body;

    if(recipeToCreate === null || recipeToCreate.id === null) {
        context.res = {
            status: 400,
            headers:{"Content-Type": "application/json"},
            body: "Product data must be present in request body"
        }
    }
   
    context.res = {
        status: 200, /* Defaults to 200 */
        headers:{"Content-Type": "application/json"},
        body: {recipe: recipeToCreate}
    };

};

export default httpTrigger;