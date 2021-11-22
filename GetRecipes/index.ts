import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

    const loadedRecipes = [{
        id: '1',
        name: 'name',
        ingredients: 'ingredients',
        steps: 'steps'
    }]

    context.res = {
        status: 200, /* Defaults to 200 */
        headers:{"Content-Type": "application/json"},
        body: {
            recipe: context.bindings.inputRecipe
        }
    };

};

export default httpTrigger;