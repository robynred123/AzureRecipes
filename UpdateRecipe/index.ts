import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    console.log(req.body)
    const {id, name, ingredients, steps} = req.body;

    const updatedRecipe = {
        id: id,
        name: name,
        ingredients: ingredients,
        steps: steps
    }

    console.log(updatedRecipe)

    context.res = {
        status: 200, /* Defaults to 200 */
        headers:{"Content-Type": "application/json"},
        body: {
            recipe: updatedRecipe
        }
    };

};

export default httpTrigger;