import { defineConfig } from "sanity";
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {media} from 'sanity-plugin-media'
import project from "./sanity/schemas/project-schema";
import schemas from "./sanity/schemas";


export const config = defineConfig({
    projectId: "zqtikvx8",
    dataset: "production",
    apiVersion: "2025-04-03",
    title: "My Sanity Studio",
    basePath: "/studio",
    plugins: [
        structureTool(),
        visionTool(),
        media({
            creditLine: {
                enabled: true,
            },
            maximumUploadSize: 20000000, // 20MB
        })
],
schema: {
    types: schemas},
    });