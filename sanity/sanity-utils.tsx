import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";

export async function getProjects() : Promise <Project[]> {
  const client = createClient({
    projectId: "zqtikvx8",
    dataset: "production",
    apiVersion: "2025-04-03",
  });

  return client.fetch(
    groq`*[_type == "project"]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    url,
    content}`
  );
}
