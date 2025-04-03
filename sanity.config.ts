import { defineConfig } from "sanity";
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'

export const config = defineConfig({
    projectId: "zqtikvx8",
    dataset: "production",
    apiVersion: "2025-04-03",
    title: "My Sanity Studio",
    basePath: "/studio",
    plugins: [
        structureTool(),
        visionTool()
],
    });