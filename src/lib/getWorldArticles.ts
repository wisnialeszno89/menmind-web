import fs from "fs"
import path from "path"

export function getWorldArticles(world: string) {

const dir = path.join(process.cwd(),"src/app",world)

const items = fs.readdirSync(dir,{withFileTypes:true})

return items
.filter(i=>i.isDirectory())
.filter(i=>!i.name.startsWith("["))
.filter(i=>i.name !== "page")
.filter(i=>!i.name.startsWith("_"))
.map(i=>{

const slug = i.name

const title = slug
.replaceAll("-"," ")
.replace(/\b\w/g,c=>c.toUpperCase())

return {
slug,
title,
description:""
}

})

}