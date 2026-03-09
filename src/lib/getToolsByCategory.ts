import { tools } from "@/data/tools"

export function getToolsByCategory(category:string){

return tools.filter(
(tool)=>tool.category===category
)

}